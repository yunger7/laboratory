/*
  This database listener will trigger whenever the "status" prop
  is set to "In progress".
*/

require("dotenv").config();
const { Client } = require("@notionhq/client");
const chalk = require("chalk");

const log = console.log;

const notion = new Client({
  auth: process.env.NOTION_TOKEN,
});

const databaseId = process.env.DATABASE_ID;

async function getDataFromDatabase() {
  const data = {};
  
  async function getData(cursor) {
    // Create payload
    const payload = {
      database_id: databaseId,
    }

    if (cursor) {
      payload.start_cursor = cursor;
    }

    const currentPages = await notion.databases.query(payload);

    for (const page of currentPages.results) {
      if (page.properties.Status) {
        data[page.id] = {
          status: page.properties.Status.select.name,
          title: page.properties.Name.title[0].text.content,
        }
      } else {
        data[page.id] = {
          status: "No Status",
          title: page.properties.Name.title[0].text.content,
        }
      }
    }

    if (currentPages.has_more) {
      await getData(currentPages.next_cursor);
    }

  }

  await getData();
  return data;
}

async function listenForChanges(dataInDatabase) {
  log(`${chalk.blue.bold("listener")} - looking for changes in Notion database`);

  // Get current data in database
  const newData = await getDataFromDatabase();

  // Iterate over the current data and compare with the local stored data (dataInDatabase)
  for (const [key, value] of Object.entries(newData)) {
    const pageId = key;
    const currentStatus = value.status;
    
    // If there is new data, add to local storage
    if (!(pageId in dataInDatabase)) {
      dataInDatabase[pageId] = {
        title: value.title,
        status: currentStatus,
      }
    } else {

      if (currentStatus !== dataInDatabase[pageId].status) {
        log(`${chalk.yellow.bold("event")} - status property updated`);
        dataInDatabase[pageId] = {
          title: value.title,
          status: currentStatus,
        }

        if (currentStatus === "In progress") {
          log(`${chalk.yellow.bold("event")} - ${value.title} is now 'In progress'`)
        }
      }

    }


  }

  main();
}

async function main() {
  const dataInDatabase = await getDataFromDatabase();
  setTimeout(() => listenForChanges(dataInDatabase), 5000);
}

main();

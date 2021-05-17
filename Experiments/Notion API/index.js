require("dotenv").config();

const { Client } = require("@notionhq/client");

const notion = new Client({
  auth: process.env.NOTION_TOKEN,
});

const databaseId = process.env.DATABASE_ID;
const pageId = process.env.PAGE_ID;

async function getDatabase() {
  const response = await notion.databases.retrieve({
    database_id: databaseId
  });
  console.log(response);
}

async function queryDatabase() {
  const response = await notion.databases.query({
    database_id: databaseId,
    filter: {
      property: "Name",
      title: {
        contains: "Hu"
      }
    }
  })

  console.log(response);
}

async function search() {
  const response = await notion.search({
    query: "hello world",
  });

  console.log(response.results[0].properties.Name.title);
}

async function createPage() {
  const response = await notion.pages.create({
    parent: {
      database_id: databaseId,
    },
    properties: {
      Name: {
        title: [
          {
            text: {
              content: "Don't click me"
            }
          }
        ]
      },
      URL: {
        url: "https://youtu.be/dQw4w9WgXcQ"
      },
      Tags: {
        multi_select: [
          {
            name: "Suspicious"
          }
        ]
      }
    }
  });

  console.log(response);
}

async function retrievePage() {
  const response = await notion.pages.retrieve({
    page_id: pageId
  });

  console.log(response);
}

async function retrieveBlockChildren() {
  const response = await notion.blocks.children.list({
    block_id: process.env.BLOCK_ID
  });

  console.log(response.results[response.results.length - 1].paragraph);
}

async function appendBlockChildren() {
  const response = await notion.blocks.children.append({
    block_id: pageId,
    children: [
      {
        object: "block",
        type: "paragraph",
        paragraph: {
          text: [
            {
              type: "text",
              text: { content: "This is of type " }
            },
            {
              type: "text",
              text: { content: "rich text" },
              annotations: {
                underline: true,
                color: "blue"
              }
            },
            {
              type: "text",
              text: { content: " and it is " }
            },
            {
              type: "text",
              text: { content: "awesome!" },
              annotations: {
                bold: true,
                italic: true,
              }
            },
          ]
        }
      }
    ]
  });

  console.log(response);
}

// getDatabase();
// queryDatabase();
// search();
// createPage();
// retrievePage();
// retrieveBlockChildren()
// appendBlockChildren();

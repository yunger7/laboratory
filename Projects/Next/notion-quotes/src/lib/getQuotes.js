import { Client } from "@notionhq/client";

const notion = new Client({ auth: process.env.NOTION_ACCESS_TOKEN });
const databaseId = process.env.NOTION_DATABASE_ID;

export default async function getQuotes() {
  const response = await notion.databases.query({
    database_id: databaseId,
    page_size: 10,
  });
  
  const quotes = response.results.map(page => {
    return {
      id: page.id,
      quote: page.properties.Quote.title[0]?.plain_text ?? "",
      author: page.properties.Author.rich_text[0]?.plain_text ?? "Unknown",
    }
  })

  return quotes;
}

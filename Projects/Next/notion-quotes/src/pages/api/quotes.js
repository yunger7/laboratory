import getQuotes from "../../lib/getQuotes";

export default async function quotes(req, res) {
  const quotes = await getQuotes();
  res.status(200).json(quotes);
}

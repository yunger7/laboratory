import Head from "next/head";
import useSWR from "swr";
import getQuotes from "../lib/getQuotes";

export default function Home({ quotes }) {
  const { data } = useSWR("/api/quotes", { initialData: quotes });

  return (
    <>
      <Head>
        <title>Notion quotes</title>
      </Head>
      <h1>Quotes</h1>
      {data.map(({ id, quote, author }) => {
        if (quote) {
          return (
            <blockquote className="sidekick" key={id}>
              {quote}
              <cite>{author}</cite>
            </blockquote>
          )
        }
      })}
    </>
  )
}

export const getStaticProps = async () => {
  const quotes = await getQuotes();

  return {
    props: {
      quotes
    }
  }
}

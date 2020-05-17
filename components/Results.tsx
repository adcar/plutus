import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Result from "./Result";

export default function Results() {
  const router = useRouter();
  const [quotes, setQuotes] = useState([]);
  const { q } = router.query;

  useEffect(() => {
    (async () => {
      if (q === "") {
        setQuotes([]);
        return;
      }
      const res = await fetch(
        `https://corsssssss.herokuapp.com/https://query1.finance.yahoo.com/v1/finance/search?q=${q}&lang=en-US&region=US&quotesCount=6&newsCount=4&enableFuzzyQuery=false&quotesQueryId=tss_match_phrase_query&multiQuoteQueryId=multi_quote_single_token_query&newsQueryId=news_cie_vespa&enableCb=true&enableNavLinks=true&enableEnhancedTrivialQuery=true`
      );
      const json = await res.json();
      if (json.quotes !== undefined) {
        setQuotes(
          json.quotes.filter(quote => {
            if (
              quote.isYahooFinance &&
              (quote.quoteType === "ETF" || quote.quoteType === "EQUITY")
            ) {
              return quote;
            }
          })
        );
      }
    })();
  }, [q]);

  return (
    <div
      style={{
        overflowY: "scroll",
        height: "calc(100vh - 120px)"
      }}
    >
      {quotes.map((quote, index) => (
        <Result key={index} {...quote} />
      ))}
    </div>
  );
}

//https://query1.finance.yahoo.com/v8/finance/chart/ZM
import React from "react";
import Tabs from "../../components/Tabs";
import Typography from "@material-ui/core/Typography";
import getTitleAtUrl from "get-title-at-url";
import { useTheme } from "@material-ui/core";

function round(num) {
  return Math.ceil(num * 100) / 100;
}

export default function Details({ title, prevPrice, price }) {
  const theme = useTheme();
  const changeValue = round(price - prevPrice);
  const changePercent = round((changeValue / price) * 100);

  const priceStyle = {
    color: changeValue > 0 ? theme.palette.primary.main : "red",
    padding: 5
  };

  let sign = "";
  if (changeValue > 0) {
    sign = "+";
  }

  console.log({ changeValue, changePercent });
  return (
    <div
      style={{
        display: "flex"
      }}
    >
      <Tabs currentPage="dashboard" />
      <div
        style={{
          display: "flex",
          flexDirection: "column"
        }}
      >
        <Typography variant={"h3"}>{title}</Typography>
        <Typography
          variant={"h4"}
          style={{
            ...priceStyle,
            display: "inline-flex"
          }}
        >
          ${price}{" "}
          <Typography
            component="span"
            style={{ ...priceStyle, marginLeft: 10 }}
          >
            {" "}
            {sign}
            {changeValue}
          </Typography>{" "}
          <Typography component="span" style={priceStyle}>
            ({sign}
            {changePercent}%)
          </Typography>
        </Typography>
      </div>
    </div>
  );
}
function getTitle(url: string): Promise<string> {
  return new Promise(resolve => getTitleAtUrl(url, resolve));
}

export async function getServerSideProps({ query }) {
  console.log(query);
  const res = await fetch(
    `https://query1.finance.yahoo.com/v8/finance/chart/${query.symbol}`
  );
  const json = await res.json();

  let title = await getTitle(`https://finance.yahoo.com/quote/${query.symbol}`);

  title = title.replace(/\sStock.+/, "");

  return {
    props: {
      price: json.chart.result[0].meta.regularMarketPrice,
      prevPrice: json.chart.result[0].meta.chartPreviousClose,
      title
    }
  };
}

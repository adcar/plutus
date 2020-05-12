import fetch from "node-fetch";

export default async (req, res) => {
  const {symbol} = req.query;
  const response = await fetch(`https://finance.yahoo.com/quote/${symbol}/options`);
  const text = await response.text()
  const expirationDates = text.match(/"expirationDates":\[.+?(?=])/g)[0] + "]";

  const parsedDates = JSON.parse(`{${expirationDates}}`);
  res.statusCode = 200;
  res.json(parsedDates);
}


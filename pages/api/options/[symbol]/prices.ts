import { parse } from 'node-html-parser';
import fetch from "node-fetch";


function parseRows(rows) {
  const parsedRows = [];
  rows.forEach((row, index) => {
    // Ignore the first element. It just contains header data
    if (index === 0) {
      return;
    }
    const id = row.childNodes[0].childNodes[0].innerHTML;
    const strike = row.childNodes[2].childNodes[0].innerHTML;
    const lastPrice = row.childNodes[3].innerHTML;
    const bid = row.childNodes[4].innerHTML;
    const ask = row.childNodes[5].innerHTML;
    const change = row.childNodes[6].childNodes[0].innerHTML;
    const volume = row.childNodes[8].innerHTML;
    const impliedVolatility = row.childNodes[10].innerHTML;
    parsedRows.push({  id, strike, lastPrice, bid, ask, change, volume, impliedVolatility});
  })

  return parsedRows;
}

export default async (req, res) => {
  const {symbol, date} = req.query;
  if (date === undefined) {
    res.statusCode = 400;
    res.json({
      error: "date parameter is required"
    })
  }

  const response = await fetch(`https://finance.yahoo.com/quote/${symbol}/options?date=${date}`);
  const text = await response.text()
  const root: any = parse(text);
  const calls = root.querySelectorAll("table.calls tr");
  const puts = root.querySelectorAll("table.puts tr");
  res.statusCode = 200
  res.json({
    calls: parseRows(calls),
    puts: parseRows(puts)
  })

}

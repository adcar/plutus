import { parse } from 'node-html-parser';
import fetch from "node-fetch";


export default async (req, res) => {
  const {id} = req.query;

  const response = await fetch(`https://finance.yahoo.com/quote/${id}`);
  const text = await response.text()
  const root: any = parse(text);

  const tables = root.querySelectorAll("#quote-summary table tbody");
  const strikePrice = tables[0].childNodes[4].childNodes[1].childNodes[0].innerHTML;
  const askPrice =  tables[0].childNodes[3].childNodes[1].childNodes[0].innerHTML;
  const expireDateHumanReadable =  tables[1].childNodes[0].childNodes[1].childNodes[0].innerHTML;

  const expireDate = Math.round((new Date(`${expireDateHumanReadable} GMT`)).getTime() / 1000);



  res.statusCode = 200
  res.json({
    strikePrice,
    askPrice,
    expireDate
  })





}

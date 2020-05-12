import {useEffect} from "react";



export default function Home() {
  useEffect(() => {
    (async () => {
      const res = await fetch("https://api-v2.intrinio.com/options/MSFT", {
        headers:{
          "X-Authorization-Public-Key": "8972658a17e0674c36354593817bc905"
        }
      });
      const json = await res.json();

      console.log(json);
    })();

  }, [])

  return (
    <div className="container">
      <h1>Hello, world!</h1>
    </div>
  )
}

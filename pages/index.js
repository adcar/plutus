import React from "react";
import useReq from "../utils/use-req";
import {useRouter} from "next/router";


export default function Home() {
  const {data, error} = useReq("/api/me");
  const router = useRouter();
  if (error) {
    console.error("e: " + error);
    return <h1>There was an error</h1>
  }
  if (data === undefined) {
    return <h1>Loading...</h1>
  }
  if (data.error === "not_authenticated") {

    // TODO: Change this to a splash page which has a login button
    router.push("/api/login");
  } else {
    router.push("/dashboard");
  }




  return null;

}

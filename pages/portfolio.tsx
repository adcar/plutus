import React from "react";
import Tabs from "../components/Tabs";

export default function search() {
  return (
    <div
      style={{
        display: "flex"
      }}
    >
      <Tabs currentPage="portfolio" />
      <h1>Hello, world!</h1>
    </div>
  );
}

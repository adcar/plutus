import React from "react";
import Tabs from "../components/Tabs";
import Search from "../components/Search";
import Results from "../components/Results";
export default function search() {
  return (
    <div
      style={{
        display: "flex"
      }}
    >
      <Tabs currentPage="search" />
      <div
        style={{
          display: "flex",
          alignContent: "flex-start",
          flexDirection: "column",
          justifyContent: "stretch",
          width: "100%"
        }}
      >
        <Search />
        <Results />
      </div>
    </div>
  );
}

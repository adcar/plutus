import React from "react";
import Tabs from "../components/Tabs";
import Search from "../components/Search";
import Results from "../components/Results";
export default function search({ query }) {
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
        <Search query={query.q} />
        <Results />
      </div>
    </div>
  );
}

export async function getServerSideProps({ query }) {
  return {
    props: { query } // will be passed to the page component as props
  };
}

import React from "react";
import Header from "./Header/Header";
import List from "./List/List";

export default function Layout({ data }) {
  return (
    <>
      <header>
        <Header />
      </header>
      <main>
        <List data={data} />
      </main>
    </>
  );
}

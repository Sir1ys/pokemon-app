import React from "react";
import Card from "../Card/Card";

export default function List({ data }) {
  return (
    <div className="container">
      {data.map((item) => {
        return <Card key={item.name} data={item} />;
      })}
    </div>
  );
}

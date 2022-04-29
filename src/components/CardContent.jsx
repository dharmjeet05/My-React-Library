import React from "react";
import Table from "./Table";
import TeamOne from "./TeamOne";
import TeamTwo from "./TeamTwo";

function CardContent() {
  return (
    <div className="cardContent">
      <TeamOne />
      <Table />
      <TeamTwo />
    </div>
  );
}

export default CardContent;

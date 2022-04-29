import React from "react";
import { useSelector } from "react-redux";
import dateFormat from "dateformat";

import CardContent from "./CardContent";

function Card() {
  const data = useSelector((state) => state.main.mainData);

  const date = dateFormat(data?.scheduled, "dS mmmm yyyy");

  return (
    <div className="card">
      <h2>
        {data?.venue.name}, {data?.venue.city} | {date}
      </h2>
      <CardContent />
    </div>
  );
}

export default Card;

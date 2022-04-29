import React from "react";
import { useSelector } from "react-redux";
import { Toronto, Trophy } from "../assets/images";

function TeamTwo() {
  const data = useSelector((state) => state.main.mainData);

  const teamOneTotal = data?.home.points;
  const teamTwoTotal = data?.away.points;

  return (
    <div className="teamtwo">
      <img src={Toronto} alt="Toronto" />
      <div className="teamName">
        {teamTwoTotal > teamOneTotal && <img src={Trophy} alt="Winner" />}
        <h1 id="teamh1">
          {data?.away.market} {data?.away.name}
        </h1>
      </div>
      <h1 id="teamPoints">{teamTwoTotal}</h1>
    </div>
  );
}

export default TeamTwo;

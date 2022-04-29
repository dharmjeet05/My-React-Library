import React from "react";
import { useSelector } from "react-redux";
import { Philadelphia, Trophy } from "../assets/images";

function TeamOne() {
  const data = useSelector((state) => state.main.mainData);

  const teamOneTotal = data?.home.points;
  const teamTwoTotal = data?.away.points;

  return (
    <div className="teamone">
      <img src={Philadelphia} alt="Philadelphia" />
      <div className="teamName">
        <h1 id="teamh1">
          {data?.home.market} {data?.home.name}
        </h1>
        {teamOneTotal > teamTwoTotal && <img src={Trophy} alt="Winner" />}
      </div>
      <h1 id="teamPoints">{teamOneTotal}</h1>
    </div>
  );
}

export default TeamOne;

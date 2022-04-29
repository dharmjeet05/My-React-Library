import React from "react";
import { useSelector } from "react-redux";
import translate from "../i18n/translate";

function Table() {
  const data = useSelector((state) => state.main.mainData);

  const teamOneName = data?.home.alias;
  const teamTwoName = data?.away.alias;

  const teamOneTotal = data?.home.points;
  const teamTwoTotal = data?.away.points;

  const homeScoring = data?.home.scoring;
  const awayScoring = data?.away.scoring;

  return (
    <div className="table">
      <h1>{translate("main.final")}</h1>
      <table>
        <tbody>
          <tr>
            <th></th>
            {homeScoring?.map((score) => (
              <th key={score.number}>{score.number}</th>
            ))}
            <th>T</th>
          </tr>
          <tr>
            <td>{teamOneName}</td>
            {homeScoring?.map((score) => (
              <td
                id={
                  score.points > awayScoring[score.number - 1]?.points
                    ? "tdblack"
                    : null
                }
                key={score.number}
              >
                {score.points}
              </td>
            ))}
            <td id={teamOneTotal > teamTwoTotal ? "tdblack" : null}>
              {teamOneTotal}
            </td>
          </tr>
          <tr>
            <td>{teamTwoName}</td>
            {awayScoring?.map((score) => (
              <td
                id={
                  score.points > homeScoring[score.number - 1]?.points
                    ? "tdblack"
                    : null
                }
                key={score.number}
              >
                {score.points}
              </td>
            ))}
            <td id={teamTwoTotal > teamOneTotal ? "tdblack" : null}>
              {teamTwoTotal}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Table;

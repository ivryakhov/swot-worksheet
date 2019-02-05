import React from "react";
import FactorList from "./FactorList";

const SWOTTable = (props) => {
  console.log("State ", props.state);
  console.log("Weakness: ", props.state.weakness);
  return (
    <table className="table">
    <thead>
      <tr>
        <th>&nbsp;</th>
        <th>Helpful</th>
        <th>Harmful</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th>Internal origin</th>
        <td>
          <h2><b>S</b>trengths</h2>
          <FactorList factorList={props.state.strengths}/>
          </td>
        <td>
          <h2><b>W</b>eakness</h2>
          <FactorList factorList={props.state.weakness}/>
        </td>
      </tr>
      <tr>
        <th>External origin</th>
        <td>
          <h2><b>O</b>pportunities</h2>
          <FactorList factorList={props.state.opportunities}/>
        </td>
        <td>
          <h2><b>T</b>hreats</h2>
          <FactorList factorList={props.state.threats}/>
        </td>
      </tr>
    </tbody>
    </table>
  )
}

export default SWOTTable;
import React from "react";
import Factor from './Factor';

const FactorList = (props) => {
  console.log("FactorList", props.factorList);
  return (
    <ul>
      {props.factorList.map(factor => <Factor key={factor} factor={factor}/>)}
    </ul>
    
  );
};

export default FactorList;
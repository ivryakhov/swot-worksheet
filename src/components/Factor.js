import React from 'react';

const Factor = (props) => {
  console.log("Factor", props.factor);
  return (
    <li>{props.factor}</li>
  );
};

export default Factor;
import React from 'react';

const Factor = ({factor, onRemove}) => {
  return (
    <li>
      {factor}
      <input
        type="submit"
        value="Remove"
        onClick={() => onRemove(factor)}/>
    </li>
  );
};

export default Factor;
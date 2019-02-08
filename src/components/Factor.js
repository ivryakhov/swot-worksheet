import React from 'react';

const Factor = ({factor, onRemove}) => {
  return (
    <li>
      {factor}
      <button className="delete is-pulled-right has-background-grey-light"
        type="submit"
        value="Remove"
        onClick={() => onRemove(factor)}/>
    </li>
  );
};

export default Factor;
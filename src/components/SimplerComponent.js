// Code SimplerComponentHere Here
import React from 'react';

const SimplerComponent = ({ handleClick, mood }) => {
  return (
    <div onClick={handleClick}>
      I am just happy
    </div>
  );
};

export default SimplerComponent;

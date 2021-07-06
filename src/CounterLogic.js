import React, { useState } from 'react';

function CounterLogic(props) {
  const [increment, setIncrement] = useState(0);

  const handleIncrement = () => {
    return setIncrement((prev) => prev + 1);
  };

  return <div>{props.render(increment, handleIncrement, props.title)}</div>;
}

export default CounterLogic;

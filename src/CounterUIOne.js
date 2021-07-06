import React from 'react';

function CounterUIOne(props) {
  return (
    <div>
      <p>{props.count}</p>
      <button onClick={props.handleIncrement}>Increment</button>
    </div>
  );
}

export default CounterUIOne;

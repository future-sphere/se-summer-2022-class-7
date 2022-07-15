import React from 'react';
import { DEFAULT_VALUE } from '../constants';
import Button from './Button';

function Counter() {
  const [count, setCount] = React.useState(DEFAULT_VALUE);

  const handleAdd = () => {
    setCount(count + 1);
  };

  const handleSubtract = () => {
    setCount(count - 1);
  };

  const handleReset = () => {
    setCount(DEFAULT_VALUE);
  };
  return (
    <div>
      <Button handleClick={handleAdd}>+</Button>
      <h1>{count}</h1>
      <Button handleClick={handleSubtract}>-</Button>
      <Button handleClick={handleReset}>Reset</Button>
    </div>
  );
}

export default Counter;

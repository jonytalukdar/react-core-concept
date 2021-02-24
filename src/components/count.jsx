import React, { useState } from 'react';

function Count() {
  const [count, setCount] = useState(12);
  const IncreseHandle = () => {
    const newCount = setCount(count + 1);
    return newCount;
  };
  const decreaseHandle = () => {
    const newCount = setCount(count - 1);
    return newCount;
  };
  return (
    <div>
      <h1>Count : {count} </h1>
      <button onClick={decreaseHandle}>Decrease</button>
      <button onClick={IncreseHandle}>Increase</button>
    </div>
  );
}

export default Count;

import React, { useState } from 'react';

function Count() {
  const [count, setCount] = useState(54);
  //   const handeIncrease = () => setCount(count + 1);
  //   const handleDecrease = () => setCount(count - 1);

  return (
    <div>
      <h1>count :{count} </h1>
      <button onClick={() => setCount(count - 1)}>Decrease</button>
      <button onClick={() => setCount(count + 1)}>Increase</button>
    </div>
  );
}

export default Count;

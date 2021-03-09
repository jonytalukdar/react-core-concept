import React from 'react';

const Count = (props) => {
  const count = props.cart;
  let total = 0;
  for (let i = 0; i < count.length; i++) {
    const somethign = count[i];
    total = somethign.salary;
  }
  return (
    <div>
      <h1>this is count : {count.length}</h1>
      <h2>salary : {total}</h2>
    </div>
  );
};

export default Count;

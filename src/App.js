import React from 'react';
import ComOne from './component';

function App() {
  const products = [
    { name: 'first', price: '$12' },
    { name: 'second', price: '$15' },
  ];
  return (
    <div>
      <ComOne name={products[0].name} price={products[0].price} />
      <ComOne />
    </div>
  );
}

export default App;

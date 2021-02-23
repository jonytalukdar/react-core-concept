import React from 'react';
import ComOne from './component';

function App() {
  const nayoks = [
    'anwar',
    'bapparaj',
    'alamgir',
    'manna',
    'eliays',
    'chanchal',
    'mosharaf',
    'shakib',
  ];
  const products = [
    { name: 'first', price: '$12' },
    { name: 'second', price: '$15' },
  ];
  const productName = products.map((product) => product.price);
  console.log(productName);
  const nayokNames = nayoks.map((name) => name);
  console.log(nayokNames);
  return (
    <div>
      <ul>
        {nayoks.map((nayok) => (
          <li>{nayok}</li>
        ))}
        {products.map((list) => (
          <li>{list.name}</li>
        ))}
        {products.map((list) => (
          <li>{list.price}</li>
        ))}
      </ul>
      <ComOne name={products[0].name} price={products[0].price} />
      <ComOne />
    </div>
  );
}

export default App;

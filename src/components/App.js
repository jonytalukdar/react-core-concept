import { render } from '@testing-library/react';
import React from 'react';
import Product from './product';
import Count from './count';

function App() {
  const friendsList = ['shimul', 'akash', 'robin', 'rashudul', 'polash'];
  const products = [
    { name: 'photoshop', price: '$21' },
    { name: 'XD', price: '$34' },
    { name: 'Illustrator', price: '$56' },
  ];
  return (
    <div>
      <Count />
      <ul>
        {friendsList.map((list) => (
          <li>{list}</li>
        ))}
      </ul>
      {products.map((pd) => (
        <Product product={pd}></Product>
      ))}
    </div>
  );
}

export default App;

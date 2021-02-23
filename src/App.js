import React from 'react';
import Products from './product';

function App() {
  const nayoks = ['anwar', 'faruk', 'jafur', 'alamgir', 'manna'];
  const products = [
    { name: 'first', price: '$12' },
    { name: 'second', price: '$32' },
    { name: 'third', price: '$34' },
  ];

  return (
    <div>
      <ul>
        {products.map((list) => (
          <li>{list.name}</li>
        ))}
        {nayoks.map((list) => (
          <li>{list}</li>
        ))}
      </ul>
      <Products product={products[0]} />
      <Products product={products[1]} />

      <Person name={nayoks[0]} naika="bobita" />
      <Person name="razzak" naika="shabana" />
      <Person name="bapparaz" naika="cheka" />
      <Person name="eliayas" naika="champa" />
    </div>
  );
}

function Person(props) {
  return (
    <div style={{ border: '2px solid #ddd', margin: '10px' }}>
      <h1>name : {props.name}</h1>
      <h2>hero of {props.naika}</h2>
    </div>
  );
}

export default App;

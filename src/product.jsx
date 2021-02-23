import React from 'react';

function Products(props) {
  const productStyle = {
    border: '1px solid #ddd',
    borderRadius: '10px',
    backgroundColor: '#ddd',
    height: '200px',
    width: '200px',
    margin: '12px auto',
    padding: '12px',
  };
  const { name, price } = props.product;
  return (
    <div style={productStyle}>
      <h1>name: {name}</h1>
      <h1>Price :{price} </h1>
      <button>Buy Now</button>
    </div>
  );
}

export default Products;

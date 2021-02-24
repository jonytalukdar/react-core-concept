import React from 'react';

function Product(props) {
  const productStyle = {
    backgroundColor: '#ddd',
    width: '300px',
    margin: '10px auto',
    padding: '12px',
    textAlign: 'center',
    borderRadius: '12px',
  };
  const { name, price } = props.product;
  return (
    <div style={productStyle}>
      <h3>{name}</h3>
      <h4>price: {price}</h4>
      <button>Buy Now</button>
    </div>
  );
}

export default Product;

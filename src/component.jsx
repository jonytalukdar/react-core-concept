import React from 'react';

function ComOne(props) {
  const priceStyle = {
    border: '1px solid gray',
    borderRadius: '5px',
    backgroundColor: '#ddd',
    height: '200px',
    widht: '200px',
    margin: '50px',
  };
  return (
    <div style={priceStyle}>
      <h2>{props.name}</h2>
      <h4>{props.price}</h4>
      <button>Buy Now</button>
    </div>
  );
}

export default ComOne;

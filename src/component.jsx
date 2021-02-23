import React from 'react';

function ComOne(props) {
  return (
    <div style={{ border: '2px solid #ddd', textAlign: 'center' }}>
      <h1>{props.name}</h1>
      <h2>{props.bio}</h2>
    </div>
  );
}

export default ComOne;

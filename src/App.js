import React from 'react';
import ComOne from './component';

function App() {
  const names = ['joney', 'jerry', 'jubayer', 'roney'];

  return (
    <div>
      <ComOne name={names[0]} bio={names[1]} />
      <ComOne name={names[3]} />
      <ComOne name="abul" bio="toto" />
      <ComOne name="kabul" bio="bito" />
    </div>
  );
}

export default App;

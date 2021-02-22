import React from 'react';
import './App.css';
import Text from './text';
import Another from './another';

class App extends React.Component {
  render() {
    return (
      <div>
        <Text />,
        <Another />
      </div>
    );
  }
}

export default App;

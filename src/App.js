import React, { Component } from 'react';

class App extends Component {
  // constructor() {
  //   super();
  //   this.count = 12;
  //   this.state = {
  //     count: 0,
  //   };
  // }
  state = {
    count: 0,
  };

  render() {
    const handle = () => {
      this.setState({ count: this.state.count + 1 });
    };
    return (
      <div>
        <h1>This is state</h1>
        <h1>{this.state.count}</h1>
        <button
          onClick={() => {
            handle();
            console.log('click', this.state.count);
          }}
        >
          Increment
        </button>
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import GridCell from './components/GridCell'

class App extends Component {
  render() {
    const cells = [];

    for (let y = 5; y >= 0; y--) {
      const row = [];
      for (let x = 0; x < 7; x++) {
        row.push(<GridCell key={x} x={x} y={y} />);
      }
      cells.push(<div key={y} className="row">{row}</div>);
    }
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        {cells}
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';

import GridCell from './components/GridCell'
import Board from './components/Board'

class App extends Component {
  render() {
    const { currentTurn } = this.props;
    // const cells = [];

    // for (let y = 5; y >= 0; y--) {
    //   const row = [];
    //   for (let x = 0; x < 7; x++) {
    //     row.push(<GridCell key={x} x={x} y={y} />);
    //   }
    //   cells.push(<div key={y} className="row">{row}</div>);
    // }
    return (
      <div className="App">
        Connect Four
        {/* {cells} */}
        <Board x={7} y={5}/>
        <span>It is {currentTurn}'s turn!</span>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  currentTurn: state.currentTurn,
});

export default connect(mapStateToProps, null)(App);

import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';

import GridCell from './components/GridCell'
import Board from './components/Board'

class App extends Component {
  render() {
    const { currentTurn } = this.props;
    return (
      <div className="App">
        Connect Four
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

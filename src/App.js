import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';

import Board from './components/Board'

class App extends Component {
  render() {
    const { currentTurn, gameMessage } = this.props;
    return (
      <div className="App">
        Connect Four
        <Board x={7} y={5}/>
        <span>{gameMessage}</span>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  currentTurn: state.currentTurn,
  gameMessage: state.gameMessage,
});

export default connect(mapStateToProps, null)(App);

import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';

import Board from './components/Board'
import { resetGame } from './store/actions'

class App extends Component {
  render() {
    const { gameMessage, resetGame } = this.props;
    return (
      <div className="App">
        Connect Four
        <Board x={7} y={5}/>
        <span>{gameMessage}</span>
        <div><button onClick={() => resetGame()}>Reset Game</button></div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  gameMessage: state.gameMessage,
});

const mapDispatchToProps = dispatch => ({
  resetGame: () => dispatch(resetGame()),
})

export default connect(mapStateToProps, mapDispatchToProps)(App);

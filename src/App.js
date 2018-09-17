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
        <div className="title">Connect Four</div>
        <Board x={7} y={5}/>
        <span>{gameMessage}</span>
        <div className="button-container"><button className="reset-button" onClick={() => resetGame()}>Reset Game</button></div>
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

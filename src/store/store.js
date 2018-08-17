import { createStore } from 'redux';
import { DROP_CHECKER } from './actions'

const board = [
    [], //col 1
    [], //col 2
    [], //col 3
    [], //col 4
    [], //col 5
    [], //col 6
    [], //col 7
]

const initialState = {
    currentTurn: 'red',
    board: board
};

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case DROP_CHECKER:
                console.log(state.currentTurn + 'player dropping onto column ' + action.payload)
                const tile = state.current;
                const col = state.board[action.payload].concat(tile); // new row
                const board = state.board.slice(); // copy of board
                board[action.payload] = col; // update column with new tile
                return {
                    currentTurn: state.currentTurn === 'red' ? 'black' : 'red',
                    board: board,
                }
        default: 
            return state;
    }
}

const store = createStore(reducer);

export default store;
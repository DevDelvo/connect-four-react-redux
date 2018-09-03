import { createStore } from 'redux';
import { DROP_CHECKER, RESET_GAME } from './actions'

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
    gameMessage: 'It is red\'s turn!',
    board: board,
    winner: false,
};

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case DROP_CHECKER:
                const tile = state.currentTurn;
                const col = state.board[action.payload].concat(tile); // new row
                const board = state.board.slice(); // copy of board
                if (state.board[action.payload].length >= 6) {
                    console.log('Column is full! Pick another column!')
                    return {
                        currentTurn: state.currentTurn,
                        gameMessage: 'Column is full! Pick another column!',
                        board: board,
                    }
                } else {
                    board[action.payload] = col; // update column with new tile
                    return {
                        currentTurn: state.currentTurn === 'red' ? 'black' : 'red', //changes player turn
                        gameMessage: state.currentTurn === 'red' ? 'It is black\'s turn!' : 'It is red\'s turn!',
                        board: board,
                    }
                }
        case RESET_GAME:
                return {
                    ...initialState
                }
        default: 
            return state;
    }
}

const store = createStore(reducer);

export default store;
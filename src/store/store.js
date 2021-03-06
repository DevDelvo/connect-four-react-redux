import { createStore } from 'redux';
import { DROP_CHECKER, RESET_GAME, GAME_WINNER } from './actions'

const checkWinner = (row, col, board, currentTurn) => {
    let winningCol = checkColumn(col, board, currentTurn);
    let winningRow = checkRow(row, board, currentTurn);
    let leftDiagonalWinner = checkLeftDiagonal(row, col, board, currentTurn);
    let rightDiagonalWinner = checkRightDiagonal(row, col, board, currentTurn);

    let winner = winningCol || winningRow || leftDiagonalWinner || rightDiagonalWinner
    if (winner) {
        return currentTurn
    }
}

const checkColumn = (column, board, currentTurn) => {
    let count = 0;
    let winPositions = [];
    for (let i = 0; i < board[column].length; i++) {
        if (board[column][i] === currentTurn) {
            count++;
            winPositions.push({row: i, col: column});
            if (count === 4) {
                return winPositions;
            }
        } else {
            count = 0;
            winPositions = [];
        }
    }
}

const checkRow = (row, board, currentTurn) => {
    let count = 0;
    let winPositions = [];
    for (let i = 0; i <= 6; i++) {
        if (board[i][row] === currentTurn) {
            count++;
            winPositions.push({row: row, col: i});
            if (count === 4) {
                return winPositions;
            }
        } else {
            count = 0;
            winPositions = [];
        }
    }
}

const checkLeftDiagonal = (row, column, board, currentTurn) => {
    let count = 0;
    let winPositions = [];
    let startRow = row > column ? row - column : 0;
    let startCol = column > row ? column - row : 0;

    for (let i = 0; i <= 6; i++) {
        let r = startRow + i;
        let c = startCol + i;
        console.log(currentTurn, r, c)
        if (r >= 6 || c >= 7) { //otherwise returns undefined
            break;
        }
        if (board[c][r] === currentTurn) {
            count++;
            winPositions.push({row: r, col: c});
            if (count === 4) {
                return winPositions;
            }
        } else {
            count = 0;
            winPositions = [];
        }
    }
}

const checkRightDiagonal = (row, column, board, currentTurn) => {
    let count = 0;
    let winPositions = [];
    let startRow = row + column <= 5 ? row + column : 5;
    let startCol = row + column <= 5 ? 0 : (row + column) - startRow;

    for (let i = 0; i < board[column].length; i++) {
        let r = startRow - i;
        let c = startCol + i;
        if (r < 0 || c >= 7) {
            break;
        }

        if (board[c][r] === currentTurn) {
            count++;
            winPositions.push({row: r, col: c});

            if (count === 4) {
                console.log('right diagonal winner is', currentTurn);
                return winPositions;
            }
        } else {
            count = 0;
            winPositions = [];
        }
    }
}

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
            if (state.winner === false) {
                const tile = state.currentTurn;
                const col = state.board[action.payload].concat(tile); // new row
                const board = state.board.slice(); // copy of board
                if (state.board[action.payload].length >= 6) { // if the column is full
                    return {
                        currentTurn: state.currentTurn, // current turn doesnt change
                        gameMessage: 'Column is full! Pick another column!',
                        board: board,
                    }
                } else { // if the column isnt full
                    board[action.payload] = col; // update column with new tile
                    const row = board[action.payload].length - 1;
                    const column = action.payload;
                    const winner = checkWinner(row, column, board, state.currentTurn)
                    // console.log('player: ', tile, 'row: ', row, 'col: ', column)
                    if (winner) {
                        console.log('winner', winner)
                        return {
                            board: board,
                            gameMessage: `${winner} is the winner!!!`,
                            winner: true,
                        }
                    }
                    return {
                        currentTurn: state.currentTurn === 'red' ? 'black' : 'red', //changes player turn
                        gameMessage: state.currentTurn === 'red' ? 'It is black\'s turn!' : 'It is red\'s turn!',
                        board: board,
                        winner: false,
                    }
                }
            } else if (state.winner === true) {
                return {
                    ...state,
                    winner: true,
                    gameMessage: 'Press reset to begin a new game!'
                }
            }
            break;
        case RESET_GAME:
                return {
                    ...initialState //reset everything
                }
        case GAME_WINNER:
                return {
                    currentTurn: state.currentTurn,
                    gameMessage: `The ${state.currentTurn} player has won the game!`,
                    board: board,
                    winner: true,
                }
        default:
            return state;
    }
}

const store = createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
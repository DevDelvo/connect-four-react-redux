import { createStore } from 'redux';
import { DROP_PIECE } from './actions'

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
    board
};

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case DROP_PIECE:
            return {
                ...state,
            }
    }
}

const store = createStore(reducer);

export default store;
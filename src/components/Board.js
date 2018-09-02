import React, { Component } from 'react';
import GridCell from './GridCell'

class Board extends Component {
    makeBoard = (x, y) => {
        const board = [];
        for (let cols = y; cols >= 0; cols--) {
            const row = [];
            for (let rows = 0; rows < x; rows++) {
                row.push(<GridCell key={rows} x={rows} y={cols} />)
            }
            board.push(<div key={cols} className="row">{row}</div>)
        }
        return board;
    }

    render() {
        const { x, y } = this.props;
        const board = this.makeBoard(x, y);
        return (
            board
        )

    }
}

export default Board;
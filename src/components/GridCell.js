import React from 'react';
import { connect } from 'react-redux';
import { dropChecker } from '../store/actions'

class GridCell extends React.Component {
    handleClick() {
         const column = this.props.x
         const row = this.props.board[column].length;
        // const column = this.props.x;
        console.log(`Placed at column ${column} and row ${row}`)
        this.props.dropChecker(column);
        this.checkWinner(row, column)
        // console.log(this.props.board[0])
    }

    checkWinner = (row, col) => {
        let winningRow = this.checkRow(row);
        let winningCol = this.checkColumn(col);
        // let leftDiagonalWinner = this.checkLeftDiagonal(row, col);
        // let rightDiagonalWinner = this.checkRightDiagonal(row, col);

        // let winner = winningRow || winningCol || leftDiagonalWinner || rightDiagonalWinner;
        let winner = winningCol || winningRow
        
        return winner;
    }

    checkColumn = (column) => {
        let count = 0;
        let winPositions = [];
        for (let i = 0; i < this.props.board[column].length; i++) {
            if (this.props.board[column][i] === this.props.currentTurn) {
                count++;
                winPositions.push({row: i, col: column});
                if (count === 4) {
                    console.log(winPositions)
                    console.log('col winner is', this.props.currentTurn);
                    return winPositions;
                }
            } else {
                count = 0;
                winPositions = [];
            }
        }
    }

    checkRow(row) {
        let count = 0;
        let winPositions = [];
        for (let i = 0; i < 6; i++) {
            if (this.props.board[i][row] === this.props.currentTurn) {
                count++;
                winPositions.push({row: row, col: i});
                if (count === 4) {
                    console.log(winPositions)
                    console.log('row winner is', this.props.currentTurn);
                    return winPositions;
                }
            } else {
                count = 0;
                winPositions = [];
            }
        }
    }

    // checkLeftDiagonal(row, column) {
    //     let count = 0;
    //     let winPositions = [];
    //     let startRow = row > column ? row -column : 0;
    //     let startCol = column > row ? column - row : 0;

    //     for (let i = 0; i < 6; i++) {
    //         let r = startRow + i;
    //         let c = startCol + i;
    //         if (r >= 6 || c >= 7) {
    //             break;
    //         }

    //         if (this.props.board[r][c] === this.props.currentTurn) {
    //             count++;
    //             winPositions.push({row: r, col: c});

    //             if (count === 4) {
    //                 return winPositions;
    //             }
    //         } else {
    //             count = 0;
    //             winPositions = [];
    //         }
    //     }
    // }

    // checkRightDiagonal(row, column) {
    //     let count = 0;
    //     let winPositions = [];
    //     let startRow = row + column <= 5 ? row + column : 5;
    //     let startCol = row + column <= 5 ? 0 : (row + column) - startRow;

    //     for (let i = 0; i < 6; i++) {
    //         let r = startRow - i;
    //         let c = startCol + i;
    //         if (r < 0 || c >= 7) {
    //             break;
    //         }

    //         if (this.props.board[r][c] === this.props.currentTurn) {
    //             count++;
    //             winPositions.push({row: r, col: c});

    //             if (count === 4) {
    //                 return winPositions;
    //             }
    //         } else {
    //             count = 0;
    //             winPositions = [];
    //         }
    //     }
    // }

    render() {
        const { board, x, y } = this.props;

        let classes = 'cell empty';
        if (board[x][y] !== undefined) {
            if (board[x][y] === 'red') { //adds the p2 class to the class, CSS style will make it a red circl
                classes += ' p2';
            } else {
                classes += ' p1'; //otherwise it adds p1, which makes it a black circle
            }
        }

        return (
            <div className={classes} onClick={() => this.handleClick()}>
                {/* <div>{this.props.x}, {this.props.y}</div> */}
            </div>
        )
    }
}

const mapStateToProps = state => ({
    board: state.board,
    currentTurn: state.currentTurn,
});
const mapDispatchToProps = dispatch => ({
    dropChecker: col => dispatch(dropChecker(col))
});

export default connect(mapStateToProps, mapDispatchToProps)(GridCell);
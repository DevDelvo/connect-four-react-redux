import React from 'react';
import { connect } from 'react-redux';
import { dropChecker } from '../store/actions'

class GridCell extends React.Component {
    handleClick() {
        const column = this.props.x
        // const row = this.props.board[column].length;
        // console.log(`Placed at column ${column} and row ${row}`)
        this.props.dropChecker(column);
    }

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
    dropChecker: col => dispatch(dropChecker(col)),
});

export default connect(mapStateToProps, mapDispatchToProps)(GridCell);
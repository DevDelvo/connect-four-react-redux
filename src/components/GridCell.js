import React from 'react';
import { connect } from 'react-redux';
import { dropChecker } from '../store/actions'

class GridCell extends React.Component {
    handleClick() {
        const column = this.props.x;
        // console.log(`Clicked on column ${this.props.x} and row ${this.props.y}`)
        this.props.dropChecker(column);
    }

    render() {
        const { board, x, y } = this.props;

        let classes = 'cell';
        if (board[x][y] !== undefined) {
            if (board[x][y] === 'red') {
                classes += ' p2';
            } else {
                classes += ' p1';
            }
        }

        return (
            <div className={classes} onClick={() => this.handleClick()}>
                <p>{this.props.x}, {this.props.y}</p>
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
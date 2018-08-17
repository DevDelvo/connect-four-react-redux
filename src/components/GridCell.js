import React from 'react';
import { connect } from 'react-redux';
import { dropChecker } from '../store/actions'
class GridCell extends React.Component {
    handleClick() {
        const column = this.props.x;
        console.log(`Clicked on column ${this.props.x} and row ${this.props.y}`)
        this.props.dropChecker(column);
    }

    render() {
        return (
            <div className="cell" onClick={() => this.handleClick()}>
                <p>{this.props.x}, {this.props.y}</p>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    // board: state.board,
    // turn: state.turn,
});
const mapDispatchToProps = dispatch => ({
    dropChecker: col => dispatch(dropChecker(col))
});

export default connect(mapStateToProps, mapDispatchToProps)(GridCell);
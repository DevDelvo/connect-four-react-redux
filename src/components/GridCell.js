import React from 'react';

class GridCell extends React.Component {
    render() {
        return (
            <div>
                <p>{this.props.x}, {this.props.y}</p>
            </div>
        )
    }
}
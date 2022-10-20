import React from 'react'

class Counter extends React.PureComponent {
    render() {
        return (
            <h1 id={this.props.Id}>{this.props.text}</h1>
        );
    }
}

export default Counter
import React from 'react'

class Button extends React.Component {
    render() {
        return (
            <button className="button" onClick={()=>
                this.props.sign === "+" ? 
                this.props.handler(1)
                : 
                this.props.handler(-1)
            }>{this.props.sign}</button>
        );
    }
}

export default Button
import React from 'react';

 class Btn extends React.Component {
    render() {
        return (
            <div>
                <button className="btn" onClick={this.props.onClick}>{this.props.name}</button>
            </div>
        )
    }
}

export default Btn;
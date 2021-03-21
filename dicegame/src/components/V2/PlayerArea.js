import React from 'react';

 class PlayerArea extends React.Component {
    render() {
        return (
            <div>
                <div className={`playerDisplay ${this.props.myclass ? "" : "turn" } ${this.props.winner ? "win" : " "} `}>
                    <h1 >{this.props.name}</h1>
                    <h1>Score: <span>{this.props.score}</span></h1>
                    <h1>Current: {this.props.current}</h1>
                </div>
            </div>
        )
    }
}

export default PlayerArea;
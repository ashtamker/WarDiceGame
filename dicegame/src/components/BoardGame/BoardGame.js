import React from 'react';
import './BoardStyle.css';


const setupData = {
    targetScore: 100,
    playerOneScore: 0,
    playerTwoScore: 0,
    dice: [1,1],
    turnFlag: true,

}

class BoardGame extends React.Component {
    state = {...setupData};

    render(){
        const {playerOneScore, playerTwoScore , targetScore} = this.state;
        return (
            <div className="board">

            </div>
        )
    }

}

export default BoardGame;
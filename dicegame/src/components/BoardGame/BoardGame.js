import React from 'react';
import './BoardStyle.css';
import RollDice from '../RollDice/RollDice';
// import GetDice from '../Dice/GetDice';
import Player from '../Player/Player';


const setupData = {
    targetScore: 50,
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
                <RollDice />
              
                

            </div>
        )
    }

}

export default BoardGame;
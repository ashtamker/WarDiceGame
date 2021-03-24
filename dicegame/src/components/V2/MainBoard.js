import React from 'react'
import PlayerArea from './PlayerArea';
import Btn from './Btn';
import DiceFace from './DiceFace';
import './style.css';

class MainBoard extends React.Component {
    constructor(props) {
      super();
  
      this.state = this.setupState();
    }
  
    setupState = () => {
      return {
        dice: [1, 1],
        Playername: ['Player1', 'Player2'],
        score: [0, 0],
        currentScore: [0, 0],
        target: 15,
        turnPlayer1: true,
      }
    }

  
    newGame = () => {
         this.setState(this.setupState());
    }
 
  
    changeTurns = () => {
      return (this.state.turnPlayer1) ? this.setState({ turnPlayer1: false }) : this.setState({ turnPlayer1: true })
    }
  
    addThisRoundScore = (num) => {
      let index;
      if (this.state.turnPlayer1) {
        index = 0
      } else { index = 1 }
      let array = this.state.currentScore
      array[index] += num
      this.setState({ currentScore: array })
    }
  
    rollTheDice = () => {
      let d1 = Math.floor(Math.random() * 6 + 1);
      let d2 = Math.floor(Math.random() * 6 + 1);
      this.setState({ dice: [d1, d2] })
      if (d1 === d2 &&  d1 === 6) {
        this.setState({ currentScore: [0,0] })
        this.changeTurns();
      } else {
        let sum = d1 + d2;
        this.addThisRoundScore(sum);
      }
    
    }
  

    holdTurn = () => {
      let index;
      if (this.state.turnPlayer1) {
        index = 0
      } else { index = 1 }
      let array = this.state.score
      let curent = this.state.currentScore;
      array[index] += curent[index]
      this.setState({ score: array })
      this.setState({ currentScore: [0, 0] })
      this.changeTurns();
    }
     
    componentDidUpdate() {
      if (this.state.score[0] >= this.state.target) {     
       window.alert('Player 1 Wins')
      } else if (this.state.score[1] >= this.state.target) {
       window.alert('Player 2 Wins')
      }
    }
  
    render() {
      return (
        <div className="App">
          <PlayerArea key={this.state.Playername[0]} name={this.state.Playername[0]}
           score={this.state.score[0]} current={this.state.currentScore[0]}
            myclass={this.state.turnPlayer1} winner={this.state.Player1Win}/>
          <Btn name="New Game" onClick={this.newGame} />
          <DiceFace dice1={this.state.dice[0]} dice2={this.state.dice[1]} />
          <Btn name="Roll Dice" onClick={this.rollTheDice} />
          <Btn name="Hold" onClick={this.holdTurn} />
          <PlayerArea key={this.state.Playername[1]} name={this.state.Playername[1]} 
          score={this.state.score[1]} current={this.state.currentScore[1]} 
          myclass={!this.state.turnPlayer1} winner={this.state.Player2Win} />
        </div>
      )
    }
  }
  
  export default MainBoard
import React from 'react'
import PlayerArea from './PlayerArea';
import Btn from './Btn';
import DiceFace from './DiceFace';
import './style.css';

class MainBoard extends React.Component {
    constructor(props) {
      super();
  
      this.state = this.myState();
    }
  
    myState = () => {
      return {
        isPlayer1: true,
        dice: [1, 1],
        name: ['Player1', 'Player2'],
        score: [0, 0],
        currentScore: [0, 0],
        target: 50,
      }
    }
  

  
    newGame = () => {
      console.log('new game')
         this.setState(this.myState());
    }
  
    componentDidUpdate() {
      if (this.state.score[0] >= this.state.target) {     
       window.alert('Player 1 Wins')
      } else if (this.state.score[1] >= this.state.target) {
       window.alert('Player 2 Wins')
      }
    }
  
    toggleTurns = () => {
      return (this.state.isPlayer1) ? this.setState({ isPlayer1: false }) : this.setState({ isPlayer1: true })
    }
  
    addCurrent = (num) => {
      let index;
      if (this.state.isPlayer1) {
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
      if (d1 === d2) {
        this.setState({ currentScore: [0,0] })
        this.toggleTurns();
      } else {
        let sum = d1 + d2;
        this.addCurrent(sum);
      }
    
    }
  
  
    holdTurn = () => {
      let index;
      if (this.state.isPlayer1) {
        index = 0
      } else { index = 1 }
      let array = this.state.score
      let curent = this.state.currentScore;
      array[index] += curent[index]
      this.setState({ score: array })
      this.setState({ currentScore: [0, 0] })
      this.toggleTurns();
    }
  
    render() {
      return (
        <div className="App">
          <PlayerArea key={this.state.name[0]} name={this.state.name[0]}
           score={this.state.score[0]} current={this.state.currentScore[0]}
            myclass={this.state.isPlayer1} winner={this.state.Player1Win}/>
          <Btn name="New Game" onClick={this.newGame} />
          <DiceFace dice1={this.state.dice[0]} dice2={this.state.dice[1]} />
          <Btn name="Roll Dice" onClick={this.rollTheDice} />
          <Btn name="Hold" onClick={this.holdTurn} />
          <PlayerArea key={this.state.name[1]} name={this.state.name[1]} 
          score={this.state.score[1]} current={this.state.currentScore[1]} 
          myclass={!this.state.isPlayer1} winner={this.state.Player2Win} />
  
        </div>
      )
    }
  }
  
  export default MainBoard
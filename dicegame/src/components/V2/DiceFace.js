import React from 'react';


 class DiceFace extends React.Component {

  
    render() {

        const urlDice1 = `https://github.com/pini85/dice-game-starter-pack/blob/master/dice-${this.props.dice1}.png?raw=true`
        const  urlDice2 = `https://github.com/pini85/dice-game-starter-pack/blob/master/dice-${this.props.dice2}.png?raw=true`
        return (
            <div>
                <div className="diceDisplay">
                    <div className="dice" style={{backgroundImage:`url(${urlDice1})`}}></div>
                    <div className="dice" style={{backgroundImage:`url(${urlDice2})`}} ></div>
                </div>
            </div>
        )
    }
}

export default DiceFace;
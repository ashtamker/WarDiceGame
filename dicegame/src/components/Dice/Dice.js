import React from 'react';
import './Dice.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDice } from '@fortawesome/free-solid-svg-icons';

class Dice extends React.Component{
    render(){ 
        const {face, rolling} = this.props 
          
        // Using font awesome icon to show  
        // the exactnumber of dots 
        return <i className={`Die fas faDice${face} 
                  ${rolling && 'Die-shaking'}`} />
                   
      }


}

export default Dice;
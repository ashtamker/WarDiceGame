import React from 'react';
import './Die.css';



class Die extends React.Component{
    render(){ 
        const {face, rolling} = this.props 
        
        // Using font awesome icon to show  
        // the exactnumber of dots 
        return (
             <div><i className={`Die fas fa-dice-${face}
                        ${rolling && 'Die-shaking'}`}/>
        
                  </div> 
        )  
    } 


}

export default Die;

import React from 'react';
import Card from './card.js';


const CardList = ({ robots }) => {
    
    return (
     <div>
            {
    robots.map((user, id) => {
      return  (<Card 
            key={id} 
            id={robots[id].id} 
            name={robots[id].name} 
            email={robots[id].email} 
            username={robots[id].username}  
            /> )})  
                
            }

        </div> 
    )
}

export default CardList;
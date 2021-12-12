import React from 'react';
import './card.styles.css';

const Card = ({img, name, level}) => {
    return (
        <div className="card-container">
            <img 
                src={img} 
                alt="monster" 
            />
            <h2> {name} </h2>
            <p> {level} </p>
        </div>
    )
}

export default Card;

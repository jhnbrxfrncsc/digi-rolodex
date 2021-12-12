import React from 'react';
import Card from '../Card';
import './card-list.styles.css';

const CardList = ({digimons}) => {
    return (
        <div className="card-list">
            {
                digimons?.map(({img, name, level}) => {
                    return (
                        <Card 
                            key={name} 
                            img={img} 
                            name={name} 
                            level={level}
                        />
                    )
                })
            }
        </div>
    )
}

export default CardList;

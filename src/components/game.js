import React from 'react';

const Game = ({ title, description, imageUrl}) => (
    <div className="game">
        <img src={imageUrl} alt={title}/>
        <div className="game-info">
            <h3>{title}</h3>
        </div>
        <div className="game-desc">
            <h2>Description:</h2>
            <p>{description}</p>
        </div>
    </div>
);

export default Game;
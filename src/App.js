import React, { useEffect, useState } from 'react';
import Game from './components/game';
import './App.css';

const GAMES = "https://games-world.herokuapp.com/games/";

function App() {
  const [ games, setGames ] = useState([]);

  useEffect(() => {
    fetch(GAMES)
    .then(res => res.json())
    .then(data => {
      console.log(data);
      setGames(data);
    });
    
  }, [])

  return (
    <div className="game-container">
      {games.length > 0 && games.map(game => (
        <Game key={game._id} {...game} />
      ))}
    </div>
  );
}

export default App;

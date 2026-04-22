import { useState } from 'react';
import Player from "./components/Player";
import Gameboard from "./components/Gameboard";
import Log from './components/Log';

function App() {
  const [gameTurns, setGameTurns] = useState([]);
  const [activePlayer, setActivePlayer] = useState('X');

  function handleSelectSquare(rowIndex, colIndex) {
    setActivePlayer((curActivePlayer) => curActivePlayer === 'X' ? 'O' : 'X');
    setGameTurns(
      (prevTurns) => {
        let currentPlayer = 'X';
        if(prevTurns[0].player === 'X'){
          
        }
        const updatedTurns = [{ square: { row: rowIndex, col: colIndex }, player : activePlayer }, ...prevTurns]
      }//...prevTurns copies the existing prevTurns
    );
  }
  return (
    <main>
      <div id='game-container'>
        {/* Players */}
        <ol id='players' className='highlight-player'>
          <Player name='Player 1' symbol='X' isActive={activePlayer === 'X'} />
          <Player name='Player 2' symbol='O' isActive={activePlayer === 'O'} />
        </ol>
        <Gameboard onSelectSquare={handleSelectSquare} activePlayerSymbol={activePlayer} />
      </div>
      <Log />
    </main>
  )
}

export default App

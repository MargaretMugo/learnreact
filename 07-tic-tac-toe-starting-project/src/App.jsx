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
        if(prevTurns.length > 0 && prevTurns[0].player === 'X'){//if the previous turn is 1 if the latest stored turn = X do this
          currentPlayer = 'O';
        }
        const updatedTurns = [{ square: { row: rowIndex, col: colIndex }, player : activePlayer }, ...prevTurns];
        return updatedTurns;
      });//...prevTurns copies the existing prevTurn);
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

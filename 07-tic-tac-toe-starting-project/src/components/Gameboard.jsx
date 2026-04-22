import { useState } from 'react';
const initialGameBoard = [
    [null, null, null],
    [null, null, null],
    [null, null, null],];
export default function Gameboard({ onSelectSquare}) {
    // const [gameBoard, setGameBoard] = useState(initialGameBoard);

    // function handleSelectSquare(rowIndex, colIndex){
    //     setGameBoard((prevGameBoard) => 
    //     {
    //         const updatedBoard = [...prevGameBoard.map(innerArray => [...innerArray])];
    //         updatedBoard[rowIndex][colIndex] = activePlayerSymbol;
    //         return updatedBoard;          
    //     });
    //     onSelectSquare();
    // }
    return (
        <ol id='game-board'>
            {initialGameBoard.map((row, rowIndex) => <li key={rowIndex}>
                <ol>
                    {row.map((playerSymbol, colIndex) =>
                        <li key={colIndex}>
                            <button onClick={onSelectSquare}></button>
                        </li>)}
                </ol>
            </li>)}
        </ol>
    );
}
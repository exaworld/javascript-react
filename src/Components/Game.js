import { useState } from 'react';
import Board from './Board';
import '../Styles/Game.css';
import History from './History';

function Game() {
    const [history, setHistory] = useState([Array(9).fill(null)]);
    const [currentBoard, setCurrentBoard] = useState(history[0]);
    const xIsNext = history.length % 2 !== 0;
    const winner = calculateWinner(history[history.length - 1]);
    const gameOver = !winner && history.length === 10;

    const handlePlay = (nextBoard) => {
        setHistory([...history, nextBoard]);
        setCurrentBoard(nextBoard); //change view of current board on play
    }
    
    //set view of current board on history view
    const handleViewHistory = (currentHistory) => {
        setCurrentBoard(history[currentHistory]);
    }

    const handlePlayAgain = () => {
        setHistory([Array(9).fill(null)]);
        setCurrentBoard(history[0]);
    }

    return (
        <div className='game'>
            <h1 className='title'>TIC TAC TOE</h1>
            <h1 className='game-status'>
                { winner ?
                    <>
                        <img src={`image_${winner.value}.png`} alt={winner.value} className="image-icon">
                        </img><span>Won</span>
                    </>:
                    gameOver ? "Game Over!" : `Next Player: ${ xIsNext ? 'X' : 'O' }`
                }
            </h1>
            <Board currentBoard={currentBoard} onPlay={handlePlay} xIsNext={xIsNext} winner={winner} gameOver={gameOver}/>
            { (winner || gameOver) &&
                <History
                    history={history}
                    currentHistory = {history.indexOf(currentBoard)}
                    viewHistory={handleViewHistory}
                    playAgain={handlePlayAgain}
                />
            }
        </div>
        
    )
}

const calculateWinner = (board) => {
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ]

    for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        //verify if all elements are the same (either X or O)
        if (board[a] &&
            board[a] === board[b] &&
            board[a] === board[c]
        ){
            return { combination: lines[i], value: board[a] };
        }
    }

    return null;
}

export default Game;

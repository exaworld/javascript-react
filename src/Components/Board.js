import '../Styles/Board.css';
import Square from './Square';

function Board({ currentBoard, onPlay, xIsNext, winner, gameOver }) {
    
    const handleClick = (i) => {
        const nextBoard = currentBoard.slice();
        if (winner || gameOver || currentBoard[i]) return;
        //there is a winner or square being clicked is already field with X or O
        
        if (xIsNext) {
            nextBoard[i] = 'x';
        }
        else {
            nextBoard[i] = 'o';
        }
        onPlay(nextBoard);
        //Arguments: Current board snapshot, pass it to history on parent;
    }
    

    return (
        <div className='board'>
            <div className='board-row'>
                <Square index={0} value={currentBoard[0]} onClick={() => handleClick(0)} winner={winner}/>
                <Square index={1} value={currentBoard[1]} onClick={() => handleClick(1)} winner={winner}/>
                <Square index={2} value={currentBoard[2]} onClick={() => handleClick(2)} winner={winner}/>
            </div>
            <div className='board-row'>
                <Square index={3} value={currentBoard[3]} onClick={() => handleClick(3)} winner={winner}/>
                <Square index={4} value={currentBoard[4]} onClick={() => handleClick(4)} winner={winner}/>
                <Square index={5} value={currentBoard[5]} onClick={() => handleClick(5)} winner={winner}/>
            </div>
            <div className='board-row'>
                <Square index={6} value={currentBoard[6]} onClick={() => handleClick(6)} winner={winner}/>
                <Square index={7} value={currentBoard[7]} onClick={() => handleClick(7)} winner={winner}/>
                <Square index={8} value={currentBoard[8]} onClick={() => handleClick(8)} winner={winner}r/>
            </div>
        </div>
    )
}

export default Board;

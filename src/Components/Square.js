import '../Styles/Square.css';


function Square({ value, onClick, winner, index }) {
    const winningSquare = winner?.combination?.includes(index) ? 'winning-square' : "";

    return <button className={`square ${winningSquare}`} onClick={onClick}>
        {value === 'x' && <img src="image_x.png" alt="x" className={`image-icon ${winningSquare}-image`}></img>}
        {value === 'o' && <img src="image_o.png" alt="o" className={`image-icon ${winningSquare}-image`}></img>}
    </button>
}

export default Square;

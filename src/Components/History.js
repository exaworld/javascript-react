import '../Styles/History.css';

function History({ history, currentHistory, viewHistory, playAgain }) {
    const historyLastIndex = history?.length - 1;

    const handleCurrentHistory = (step) => {
        if (step === 'previous' && currentHistory > 0) {
            viewHistory(currentHistory - 1);
        }
        if (step === 'next' && currentHistory < historyLastIndex ) {
            viewHistory(currentHistory + 1)
        }
    }

    return (
        <div className='history-setting'>
            <div className='history-options'>
                <button
                    className={`history-button previous-button`}
                    disabled = {currentHistory === 0}
                    onClick={() => handleCurrentHistory('previous')}
                >Previous</button>
                <button
                    className='history-button next-button'
                    disabled = {currentHistory === historyLastIndex}
                    onClick={() => handleCurrentHistory('next')}
                >Next</button>
            </div>
            <button
                className='play-again-button'
                onClick={() => playAgain()}
            >Play Again</button>
        </div>
    )   
}

export default History;

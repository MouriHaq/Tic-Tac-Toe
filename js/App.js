function App() {
    /*----- constants -----*/
const winningCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6], 
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
    ];

    /*----- app's state (variables) -----*/
    
    const [board, setBoard] = React.useState(["", "","","","","","","",""])
    const [turn, setTurn] = React.useState('X')
    const [win, setWin] = React.useState(null);

    function getWinner() {
        let winner = null;
        winningCombos.forEach( function (combo, index) {
        if (
            board[combo[0]] && 
            board[combo[0]] === board[combo[1]] && 
            board[combo[0]] === board[combo[2]]
            ) 
            winner = board[combo[0]]
        }}
        return winner ? : board.includes('') ? null : 'T'
        }

    function handleTurn(event) {
        console.log(event.target, event.target.id)
        let idx = event.target.id 
        if (gameOver === false) { 
        let newBoard = [...board]                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    
        newBoard[idx] = turn
        setBoard(newBoard)
        let nextTurn = turn === 'X' ? 'O' : 'X'
        setTurn(nextTurn)
        let whoWon = getWinner();
        setWin(whoWon)
        // render();
        }

        function Message() {

            let messages = win === 'T' 
            ? `that's a tie` 
            : win 
            ? `${win} wins the game` 
            : `it's ${turn}'s turn!`;
            
            return <h2>{message}</h2>

         }
            if(win){
                return ...
            }else {
                return (
                    <h2>It's {turn}'s' turn!</h2>
                )
            }

        }

    return (
        <div>
            <h1>Tic-React-Toe</h1>

                <div class="flex-container flex-column">
                <div 
                    class="flex-container flex-wrap" 
                    id="board" 
                    onClick={handleTurn}
                >
                    {
                        board.map((data, index)=>{
                            return <div key={index} class="square">{data}</div>
                        })    
                    }
                {/* <!-- A reset button because users are going to want to play round after round of your glorious game without ever refreshing the browser! -->
                <button id="reset-button">reset</button>*/}
                <button id="reset-button">reset</button>
        </div> 

    )
}

ReactDom.render(<App />, root)
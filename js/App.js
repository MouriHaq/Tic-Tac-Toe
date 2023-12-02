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
    let turn = 'X';
    let win;

    function getWinner() {
        let winner = null;
        winningCombos.forEach((combo, index) => {
        if (board[combo[0]] && board[combo[0]] === board[combo[1]] && 
            board[combo[0]] === board[combo[2]]) {winner = board[combo[0]];
        }
        });

    function handleTurn(event) {
        console.log(event.target, event.target.id)
        let idx = event.target.id 
        if (gameOver === false) { 
        let newBoard = [...board]                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    
        newBoard[idx] = turn
        setBoard(newBoard)
        turn = turn === 'X' ? 'O' : 'X';
        //win = getWinner();
        // render();
        }
    }


    return (
        <div>
            <h1>Tic-React-Toe</h1>
            <h2>It's X's turn!</h2>

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
                {/* <div class="square"></div>
                <div class="square"></div>
                <div class="square"></div>
                <div class="square"></div>
                <div class="square"></div>
                <div class="square"></div>
                <div class="square"></div>
                <div class="square"></div>
                <div class="square"></div> */}
                </div>
                {/* <!-- A reset button because users are going to want to play round after round of your glorious game without ever refreshing the browser! -->
                <button id="reset-button">reset</button>*/}
                <button id="reset-button">reset</button>
        </div> 

    )


ReactDom.render(<App />, root)
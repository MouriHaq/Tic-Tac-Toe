/*----- constants -----*/
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
    let board;
    let turn = 'X';
// new code below
    let win;

/*----- cached element references -----*/
    const squares = Array.from(document.querySelectorAll('#board div'));

// new code below
    const messages = document.querySelector('h2');

/*----- event listeners -----*/
    document.getElementById('board').addEventListener('click', handleTurn);

/*----- functions -----*/

    function handleTurn(event) {
        let idx = squares.findIndex(function(square) {
        return square === event.target;
        });
        // new code below
        board[idx] = turn;
        // This is tidy
        turn = turn === 'X' ? 'O' : 'X';
        // In an if statement it would look like: 
        // if (turn === 'X') {
        // turn = 'O' 
        // } else {
        // turn = 'X' 
        // };
        // writing the ternary saved you from all that. 
        render();
        };

    function init() {
        board = [
        '', '', '',
        '', '', '',
        '', '', ''
        ];
        // new code here
        render();
        };

    function render() {
        board.forEach(function(mark, index) {
        //this sets the text content of the square of the same position to the mark on the board. 
        squares[index].textContent = mark;
        });
        // new code below
    messages.textContent = `It's ${turn}'s turn!`;
    }; 
        
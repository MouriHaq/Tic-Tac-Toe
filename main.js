/*----- constants -----*/
/*----- app's state (variables) -----*/
let board;
let turn = 'X';
/*----- cached element references -----*/
const squares = Array.from(document.querySelectorAll('#board div'));

/*----- event listeners -----*/
    document.getElementById('board').addEventListener('click', handleTurn);

/*----- functions -----*/

    function handleTurn(event) {
        let idx = squares.findIndex(function(square) {
        return square === event.target;
        });
        // new code below
        board[idx] = turn;
        // check your console logs to make sure it's working!
        console.log(board);
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
        };
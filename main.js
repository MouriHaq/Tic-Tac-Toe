console.log('Your JS is linked up. Be the person you needed when you were little.')
/*----- constants -----*/
/*----- app's state (variables) -----*/
let board;
/*----- cached element references -----*/
const squares = Array.from(document.querySelectorAll('#board div'));
/*----- event listeners -----*/
/*----- functions -----*/
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
        board.forEach(function(mark, index){
        console.log(mark, index);
        });
        };
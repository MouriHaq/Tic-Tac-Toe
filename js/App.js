function App() {
    return (
        <div>
            <h1>Tic-React-Toe</h1>
            <h2>It's X's turn!</h2>

                <div class="flex-container flex-column">
                <div class="flex-container flex-wrap" id="board">
                <div class="square"></div>
                <div class="square"></div>
                <div class="square"></div>
                <div class="square"></div>
                <div class="square"></div>
                <div class="square"></div>
                <div class="square"></div>
                <div class="square"></div>
                <div class="square"></div>
                </div>
                {/* <!-- A reset button because users are going to want to play round after round of your glorious game without ever refreshing the browser! -->
                <button id="reset-button">reset</button>*/}
                <button id="reset-button">reset</button>
        </div> 

    )
}

ReactDom.render(<App />, root)
document.addEventListener('DOMContentLoaded', () => {
    let squares = document.querySelectorAll(".square");
    squares.forEach((square) => {
        square.addEventListener('click', handleClick)
    })
})

function handleClick(event){
    let square = event.target;
    let position = square.id;

    if (handleMove(position)) {
        let winner = ''
        setTimeout(() => {
            if (playerTime == 0) {
                winner = 'Rebel';
                alert(`The game is over! Congratulations ${winner}`);
            } else {
                winner = 'Imperial';
                alert(`The game is over! Congratulations ${winner}`);
            }
        }, 10) 
    };

    updateSquare(position);
}

function updateSquare(position) {
    let square = document.getElementById(position.toString());
    let symbol = board[position];
    square.className = `square ${symbol}`
}
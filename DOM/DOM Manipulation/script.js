const squares = document.querySelectorAll('.colorBox');
let timesClicked = {'red': 0, 'yellow': 0, 'green': 0 };


squares.forEach(square => {
    square.onclick = () => {
    timesClicked[square.id] +=1; 
    square.innerText = timesClicked[square.id];
}});


let clearGame = document.getElementById('clear');
clearGame.onclick = () => {
    squares.forEach(square => {
        timesClicked[square.id] = 0;
        square.innerText = '';
    })
}

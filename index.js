const tiles = Array.from(document.getElementsByClassName('tile'));
const reset = document.getElementById('reset');
const announcer = document.querySelector('.announcer');
const displayPlayer = document.querySelector('.display-player');
const turnElement = document.getElementById('turn');

let board = ['','','','','','','','',''];
let isGameActive = true;
let currentPlayer = 'X';

const PLAYERX_WON = 'PLAYERX_WON';
const PLAYERO_WON = 'PLAYERO_WON';
const TIE = 'TIE';
/*

    [0,1,2]
    [3,4,5]
    [6,7,8]


*/

let winingCondition = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]

function handleResultDisplay() {
    let roundWon = false;
    for (let i = 0; i <= 7; i++) {
        let winCondition = winingCondition[i];
        let a = board[winCondition[0]];
        let b = board[winCondition[1]];
        let c = board[winCondition[2]];
        if (a == '' || b == '' || c == '') {
            continue;
        }
        if (a === b && b === c) {
            roundWon = true;
            break;
        }
    }
    if (roundWon) {
        announce(currentPlayer === 'X' ? PLAYERX_WON : PLAYERO_WON)
        isGameActive = false;
        return;
    }
    if (!board.includes('')) {
        announce(TIE);
    }
}

const announce = (type) => {
    switch (type) {
        case PLAYERX_WON:
            announcer.innerHTML = "player <span class='playerX'>X</span>'s won";
            break;
    
        case PLAYERO_WON:
            announcer.innerHTML = `player <span class='playerO'>O</span>'s won`;
            break;
        case TIE:
            announcer.innerHTML = "GAME TIE";
            break;
    }
    announcer.classList.remove('hide');
    turnElement.classList.add('hide');
}

const isValidMove = (tile) => {
    if (tile.innerText === 'X' || tile.innerText === 'O') {
        return false;
    }
    return true;
}

const changePlayer = () => {
    displayPlayer.classList.remove(`player${currentPlayer}`);
    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    displayPlayer.innerText = currentPlayer;
    displayPlayer.classList.add(`player${currentPlayer}`);
}

const updateBoard = (index) => {
    board[index] = currentPlayer;
}

const userAction = (tile,index) => {
    if (isValidMove(tile) && isGameActive) {
        tile.innerText = currentPlayer;
        tile.classList.add(`player${currentPlayer}`);
        updateBoard(index);
        handleResultDisplay();
        changePlayer();
    }
}

const resetBoard = () => {
    board = ['','','','','','','','',''];
    if (currentPlayer === 'O') {
        changePlayer();
    } 
    isGameActive = true;
    announcer.classList.add('hide');
    turnElement.classList.remove('hide');
    tiles.forEach( tile => {
        tile.innerText = '';
        tile.classList.remove('playerX')
        tile.classList.remove('playerO')
    })
}

tiles.forEach((tile,index) => tile.addEventListener('click', () => { userAction(tile,index)}));
reset.addEventListener('click',resetBoard);
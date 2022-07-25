// first attempt to try


// let player = document.getElementById('player');
// let playar = document.getElementById('playar');
// let turn = document.getElementById('turn');
// let won = document.getElementById('won');
// won.style.display = 'none';
// let reset = document.getElementById('reset');
// let b1;
// let b2 = document.getElementById('b2').getElementsByClassName('play').innerText;
// let b3 = document.getElementById('b3').getElementsByClassName('play').innerText;
// let b4 = document.getElementById('b4').getElementsByClassName('play').innerText;
// let b5 = document.getElementById('b5').getElementsByClassName('play').innerText;
// let b6 = document.getElementById('b6').getElementsByClassName('play').innerText;
// let b7 = document.getElementById('b7').getElementsByClassName('play').innerText;
// let b8 = document.getElementById('b8').getElementsByClassName('play').innerText;
// let b9 = document.getElementById('b9').getElementsByClassName('play').innerText;
// let tiles = Array.from(document.getElementsByClassName('tile'));
// // console.log(tiles);
// // console.log(b1);
// tiles.forEach(element => {
//     element.addEventListener('mousemove',function () {
//         console.log('blurred');
//     })
//     element.addEventListener('click',function () {
//         b1 = document.getElementById('b1').firstElementChild;
//         if (b1 != null) {
//             console.log(b1.innerText);
//         }
//         console.log(b1);
//         let number;
//         reset.addEventListener('click',function () {
//             window.location.reload();
//     })
//     let dec = '';
//     if(b1 == 'X' && b2 == 'X' && b3 == 'X'){
//         dec += '<span id="player1">X</span>';
//         playar.innerHTML = dec;
//         won.style.display = 'block';
//         turn.style.display = 'none';
//     }
//     else if (b4 == 'X' && b5 == 'X' && b6 == 'X'){
//         dec += '<span id="player1">X</span>';
//         playar.innerHTML = dec;
//         won.style.display = 'block';
//         turn.style.display = 'none';
//     }
//     else if (b7 == 'X' && b8 == 'X' && b9 == 'X'){
//         dec += '<span id="player1">X</span>';
//         playar.innerHTML = dec;
//         won.style.display = 'block';
//         turn.style.display = 'none';
//     }
//     else if (b1 == 'X' && b4 == 'X' && b7 == 'X'){
//         dec += '<span id="player1">X</span>';
//         playar.innerHTML = dec;
//         won.style.display = 'block';
//         turn.style.display = 'none';
//     }
//     else if (b2 == 'X' && b5 == 'X' && b8 == 'X'){
//         dec += '<span id="player1">X</span>';
//         playar.innerHTML = dec;
//         won.style.display = 'block';
//         turn.style.display = 'none';
//     }
//     else if (b3 == 'X' && b6 == 'X' && b9 == 'X'){
//         dec += '<span id="player1">X</span>';
//         playar.innerHTML = dec;
//         won.style.display = 'block';
//         turn.style.display = 'none';
//     }
//     else if (b1 == 'X' && b5 == 'X' && b9 == 'X'){
//         dec += '<span id="player1">X</span>';
//         playar.innerHTML = dec;
//         won.style.display = 'block';
//         turn.style.display = 'none';
//     }
//     else if (b3 == 'X' && b5 == 'X' && b7 == 'X'){
//         dec += '<span id="player1">X</span>';
//         playar.innerHTML = dec;
//         won.style.display = 'block';
//         turn.style.display = 'none';
//     }
//     else if(b1 == 'O' && b2 == 'O' && b3 == 'O'){
//         dec += '<span id="player2">O</span>';
//         playar.innerHTML = dec;
//         won.style.display = 'block';
//         turn.style.display = 'none';
//     }
//     else if (b4 == 'O' && b5 == 'O' && b6 == 'O'){
//         dec += '<span id="player2">O</span>';
//         playar.innerHTML = dec;
//         won.style.display = 'block';
//         turn.style.display = 'none';
//     }
//     else if (b7 == 'O' && b8 == 'O' && b9 == 'O'){
//         dec += '<span id="player2">O</span>';
//         playar.innerHTML = dec;
//         won.style.display = 'block';
//         turn.style.display = 'none';
//     }
//     else if (b1 == 'O' && b4 == 'O' && b7 == 'O'){
//         dec += '<span id="player2">O</span>';
//         playar.innerHTML = dec;
//         won.style.display = 'block';
//         turn.style.display = 'none';
//     }
//     else if (b2 == 'O' && b5 == 'O' && b8 == 'O'){
//         dec += '<span id="player2">O</span>';
//         playar.innerHTML = dec;
//         won.style.display = 'block';
//         turn.style.display = 'none';
//     }
//     else if (b3 == 'O' && b6 == 'O' && b9 == 'O'){
//         dec += '<span id="player2">O</span>';
//         playar.innerHTML = dec;
//         won.style.display = 'block';
//         turn.style.display = 'none';
//     }
//     else if (b1 == 'O' && b5 == 'O' && b9 == 'O'){
//         dec += '<span id="player2">O</span>';
//         playar.innerHTML = dec;
//         won.style.display = 'block';
//         turn.style.display = 'none';
//     }
//     else if (b3 == 'O' && b5 == 'O' && b7 == 'O'){
//         dec += '<span id="player2">O</span>';
//         playar.innerHTML = dec;
//         won.style.display = 'block';
//         turn.style.display = 'none';
//     }
//     else{
//         number = document.getElementsByClassName('play').length;
//         // console.log(noOfX);
//         // console.log(noOfO);
//         let str = '';
//         let html = '';
//         if (number % 2 == 0) {
//             html += '<span id= "player2">O</span>'
//             player.innerHTML = html;
//             str = '<span class="play">X</span>';
//             element.innerHTML = str;
//             element.style.color = '#09c372';
//         }
//         else if(number % 2 != 0){
//             html += '<span id= "player1">X</span>';
//             player.innerHTML = html;
//             str = '<span class="play">O</span>';
//             element.innerHTML = str;
//             element.style.color = '#498afb';
//         }
//         else{
//             console.log('nhi pta kya hua');
//         }
//     }
// })
// });
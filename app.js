const container = document.querySelector('.container');
const buttons = document.querySelector('.buttons');
const grayBtn = document.querySelector('.grayBtn');
const blackBtn = document.querySelector('.blackBtn');
const rainbowBtn = document.querySelector('.rainbowBtn');
const eraseBtn = document.querySelector('.eraseBtn');
const resetBtn = document.querySelector('.resetBtn');

window.addEventListener('load', populateSquares(16));
window.addEventListener('load', gray);

let squares = document.querySelectorAll('.square');

function populateSquares(num) {
    for (let i = 0; i < (num * num); i++) {
        const square = document.createElement('div');
        square.style.backgroundColor = 'white';
        container.appendChild(square).classList.add('square');
        container.style.gridTemplateColumns = `repeat(${num}, 1fr)`;
        container.style.gridTemplateRows = `repeat(${num}, 1fr)`;
    }
}

function depopulateSquares() {
    for (let i = 0; i < squares.length; i++) {
        squares[i].remove();
    }
}

function gray() {
    for (let i = 0; i < squares.length; i++) {
        squares[i].addEventListener('mouseover', () => {
            let grayColor = Math.floor(Math.random() * 255);
            squares[i].style.backgroundColor = `rgb(${grayColor}, ${grayColor}, ${grayColor})`;
        });
    }
}

function rainbow() {
    for (let i = 0; i < squares.length; i++) {
        squares[i].addEventListener('mouseover', () => {
            let red = Math.floor(Math.random() * 255);
            let green = Math.floor(Math.random() * 255);
            let blue = Math.floor(Math.random() * 255);
            squares[i].style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
        });
    }
}

function black() {
    for (let i = 0; i < squares.length; i++) {
        squares[i].addEventListener('mouseover', () => {
            squares[i].style.backgroundColor = `black`;
        });
    }
}

function erase() {
    for (let i = 0; i < squares.length; i++) {
        squares[i].addEventListener('mouseover', () => {
            squares[i].style.backgroundColor = `white`;
        });
    }
}

grayBtn.addEventListener('click', gray);
rainbowBtn.addEventListener('click', rainbow);
blackBtn.addEventListener('click', black);
eraseBtn.addEventListener('click', erase);
resetBtn.addEventListener('click', () => {
    depopulateSquares();
    let gridSize = prompt('Enter a number between 4 and 64');
    while (gridSize < 4 || gridSize > 64 || Number.isNaN(gridSize)) {
        gridSize = prompt('Enter a NUMBER between 4 and 64');
    }
    populateSquares(gridSize);
    squares = document.querySelectorAll('.square');
    gray();
});
const container = document.querySelector('.container');
const buttons = document.querySelector('.buttons');
const grayBtn = document.createElement('button');
const blackBtn = document.createElement('button');
const rgbBtn = document.createElement('button');
const resetBtn = document.createElement('button');
const squares = document.querySelectorAll('.square');

function populateSquares(num) {
    for (let i = 0; i < (num * num); i++) {
        const square = document.createElement('div');
        square.style.border = '1px solid black';
        container.appendChild(square).classList.add('square');
        container.style.gridTemplateColumns = `repeat(${num}, 1fr)`;
        container.style.gridTemplateRows = `repeat(${num}, 1fr)`;
    }

}

populateSquares(8);

buttons.appendChild(grayBtn);
grayBtn.textContent = 'Gray';

function grayColor() {
    console.log('gray');
}

function gray() {
    grayColor();
}

grayBtn.addEventListener('click', gray);

for (let i = 0; i < squares.length; i++) {
    squares[i].addEventListener('mouseover', grayColor);
}

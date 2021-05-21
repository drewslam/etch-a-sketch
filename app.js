const container = document.querySelector('.container');
const buttons = document.querySelector('.buttons');

function populateSquares(num) {
    for (let i = 0; i < (num * num); i++) {
        const square = document.createElement('div');
        container.style.gridColumnEnd = `${num}`;
        container.style.gridRowEnd = `${num}`;
        square.classList.add('square');
        square.style.border = '1px solid black';
        container.appendChild(square);
    }

}

populateSquares(2);
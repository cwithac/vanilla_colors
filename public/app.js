const colors = generateRandomColors(6);

const squares = document.querySelectorAll('.square');
let selectedColor = pickColor();
const rgbDisplay = document.getElementById('colorDisplay');
const messageDisplay = document.querySelector('#message');

rgbDisplay.textContent = selectedColor;

//Sets click listeners and conditionals for clicked squares
for (let i = 0; i < squares.length; i++) {
  squares[i].style.backgroundColor = colors[i];
  squares[i].addEventListener('click', (e) =>{
    let clickedColor = e.currentTarget.style.backgroundColor;
    if (clickedColor === selectedColor) {
      messageDisplay.textContent = 'Correct! You Win!';
      changeColors(clickedColor);
    } else {
      e.currentTarget.style.backgroundColor = '#232323';
      messageDisplay.textContent = 'Incorrect, Try Again!';
    }
  });
};

//Changes all squares to clicked color
const changeColors = (color) => {
  for (let i = 0; i < squares.length; i++) {
    squares[i].style.backgroundColor = color;
  }
};

//Color Randomizer, ES5 Scope
function pickColor() {
  let random = Math.floor(Math.random() * colors.length);
  return colors[random];
};

function generateRandomColors(num) {
  const arr = [];
  for (let i = 0; i < num; i++) {
    arr.push(randomColor());
  }
  return arr;
};

function randomColor() {
  let r = Math.floor(Math.random() * 256);
  let g = Math.floor(Math.random() * 256);
  let b = Math.floor(Math.random() * 256);
  return 'rgb(' + r + ', ' + g + ', ' + b + ')';
};

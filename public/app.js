//GLOBAL INITIALIZERS

let squares = [];
let numSquares = 6;
let colors = generateRandomColors(numSquares);
let selectedColor = pickColor();

// DOM ACCESS
const rgbDisplay = document.getElementById('colorDisplay');
const messageDisplay = document.querySelector('#message');
const header = document.getElementsByTagName('header');
const resetButton = document.querySelector('#reset');
const easyButton = document.querySelector('#easy-btn');
const medButton = document.querySelector('#med-btn');
const hardButton = document.querySelector('#hard-btn');
const container = document.getElementById('container');
const allSquares = document.querySelectorAll('.square');
let square;

//HEADER / SUB HEADER BUTTONS and CONTENT
rgbDisplay.textContent = selectedColor;
resetButton.addEventListener('click', function() {
  resetGame(numSquares);
  setupSquares();
});

easyButton.addEventListener('click', function() {
  hardButton.classList.remove('selected');
  medButton.classList.remove('selected');
  easyButton.classList.add('selected');
  numSquares = 3;
  resetGame(numSquares);
});

medButton.addEventListener('click', function() {
  hardButton.classList.remove('selected');
  medButton.classList.add('selected');
  easyButton.classList.remove('selected');
  numSquares = 6;
  resetGame(numSquares);
});

hardButton.addEventListener('click', function() {
  hardButton.classList.add('selected');
  medButton.classList.remove('selected');
  easyButton.classList.remove('selected');
  numSquares = 9;
  resetGame(numSquares);
});

//GAME PLAY SQUARES
const setupSquares = function(numSquares) {
  for (let i = 0; i < numSquares; i++) {
    square = document.createElement('div');
    square.setAttribute('class', 'square');
    squares.push(square);
    container.appendChild(square);
  }
  //Sets click listeners and conditionals for clicked squares
  for (let i = 0; i < squares.length; i++) {
    squares[i].style.backgroundColor = colors[i];
    squares[i].addEventListener('click', function(){
      let clickedColor = this.style.backgroundColor;
      if (clickedColor === selectedColor) {
        messageDisplay.textContent = 'Correct! You Win!';
        changeColors(clickedColor);
        //HTML Collection header[0]
        header[0].style.backgroundColor = clickedColor;
        resetButton.textContent = 'Play Again?';
      } else {
        this.style.backgroundColor = '#454545';
        messageDisplay.textContent = 'Incorrect, Try Again!';
      }
    });
  };
};

//Changes all squares to clicked color
const changeColors = function(color) {
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

//GAME RESET FOR BUTTONS
function resetGame(numSquares) {
  colors = generateRandomColors(numSquares);
  selectedColor = pickColor();
  rgbDisplay.textContent = selectedColor;
  header[0].style.backgroundColor = '#454545';
  messageDisplay.textContent = '';
  resetButton.textContent = 'New Colors';
  for (let i = 0; i < squares.length; i++) {
    container.removeChild(squares[i]);
  }
  squares = [];
  setupSquares(numSquares);
};

//INITIAL LOAD
setupSquares(numSquares);

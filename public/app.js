//Global Initial Variables and DOM Access
let numSquares = 6;
let colors = generateRandomColors(numSquares);
const squares = document.querySelectorAll('.square');
let selectedColor = pickColor();
const rgbDisplay = document.getElementById('colorDisplay');
const messageDisplay = document.querySelector('#message');
const header = document.getElementsByTagName('header');
const resetButton = document.querySelector('#reset');
const easyButton = document.querySelector('#easy-btn');
const hardButton = document.querySelector('#hard-btn');

//SUB HEADER BUTTONS
resetButton.addEventListener('click', function() {
  resetGame(numSquares);
  setupSquares();
});

easyButton.addEventListener('click', function() {
  hardButton.classList.remove('selected');
  easyButton.classList.add('selected');
  numSquares = 3;
  resetGame(numSquares);
  for (let i = 0; i < squares.length; i++) {
    if (colors[i]) {
      squares[i].style.backgroundColor = colors[i];
    } else {
      squares[i].style.display = 'none';
    }
  }
});

hardButton.addEventListener('click', function() {
  hardButton.classList.add('selected');
  easyButton.classList.remove('selected');
  numSquares = 6;
  resetGame(numSquares)
  for (let i = 0; i < squares.length; i++) {
      squares[i].style.backgroundColor = colors[i];
      squares[i].style.display = 'block';
  }
});

//GAME PLAY SQUARES
const setupSquares = function() {
  rgbDisplay.textContent = selectedColor;
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
        this.style.backgroundColor = '#232323';
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
  header[0].style.backgroundColor = '#232323';
  messageDisplay.textContent = '';
  resetButton.textContent = 'New Colors';
};

//INITIAL LOAD
setupSquares();

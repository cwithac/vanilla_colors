let colors = generateRandomColors(6);
const squares = document.querySelectorAll('.square');
let selectedColor = pickColor();
const rgbDisplay = document.getElementById('colorDisplay');
const messageDisplay = document.querySelector('#message');
const header = document.getElementsByTagName('header');
const resetButton = document.querySelector('#reset');
const easyButton = document.querySelector('#easy-btn');
const hardButton = document.querySelector('#hard-btn');

rgbDisplay.textContent = selectedColor;

resetButton.addEventListener('click', resetGame);
easyButton.addEventListener('click', function() {
  hardButton.classList.remove('selected');
  easyButton.classList.add('selected');
  colors = generateRandomColors(3);
  selectedColor = pickColor();
  rgbDisplay.textContent = selectedColor;
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
  colors = generateRandomColors(6);
  selectedColor = pickColor();
  rgbDisplay.textContent = selectedColor;
  for (let i = 0; i < squares.length; i++) {
      squares[i].style.backgroundColor = colors[i];
      squares[i].style.display = 'block';
  }
});

const setupSquares = () => {
  //Sets click listeners and conditionals for clicked squares
  for (let i = 0; i < squares.length; i++) {
    squares[i].style.backgroundColor = colors[i];
    squares[i].addEventListener('click', (e) =>{
      let clickedColor = e.currentTarget.style.backgroundColor;
      if (clickedColor === selectedColor) {
        messageDisplay.textContent = 'Correct! You Win!';
        changeColors(clickedColor);
        //HTML Collection header[0]
        header[0].style.backgroundColor = clickedColor;
        resetButton.textContent = 'Play Again?';
      } else {
        e.currentTarget.style.backgroundColor = '#232323';
        messageDisplay.textContent = 'Incorrect, Try Again!';
      }
    });
  };
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

function resetGame() {
  colors = generateRandomColors(6);
  setupSquares();
  selectedColor = pickColor();
  rgbDisplay.textContent = selectedColor;
  header[0].style.backgroundColor = '#232323';
  messageDisplay.textContent = '';
  resetButton.textContent = 'New Colors';
};

setupSquares();

const colors = [
  'rgb(255, 0, 0)',
  'rgb(255, 255, 0)',
  'rgb(255, 255, 255)',
  'rgb(0, 255, 0)',
  'rgb(0, 255, 255)',
  'rgb(0, 0, 255)',
];

const squares = document.querySelectorAll('.square');
const selectedColor = colors[4];
const rgbDisplay = document.getElementById('colorDisplay');

rgbDisplay.textContent = selectedColor;

for (let i = 0; i < squares.length; i++) {
  squares[i].style.backgroundColor = colors[i];
  squares[i].addEventListener('click', (e) =>{
    let clickedColor = e.currentTarget.style.backgroundColor;
    if (clickedColor === selectedColor) {
      console.log('Correct');
    } else {
      console.log('Wrong');
    }
  });
};

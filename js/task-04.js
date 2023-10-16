const bodyEl = document.querySelector('body');
const colorEl = document.querySelector('.color');
const changeColorEl = document.querySelector('.change-color');

changeColorEl.addEventListener('click', handlerColor);

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, 0)}`;
  }

  function handlerColor() {
    const randomColor = getRandomHexColor();

    bodyEl.style.backgroundColor = randomColor;
    colorEl.textContent = randomColor;
  }
  
const controlsEl = document.querySelector('#controls');
const inputEl = controlsEl.querySelector('input');
const boxesEl = document.querySelector('#boxes');

controlsEl.addEventListener('click', handlerButtonClick);

function handlerButtonClick(event) {
    if (event.target.dataset.create) {
        const amount = +inputEl.value;
        createBoxes(amount);
    } else if (event.target.dataset.destroy) {
        destroyBoxes();
    }
}

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, 0)}`;
}

function createBoxes(amount) {
    destroyBoxes();

    let size = 30;

    for (let i = 0; i < amount; i += 1) {
        const box = document.createElement('div');

        box.style.width = size + 'px';
        box.style.height = size + 'px';
        box.style.backgroundColor = getRandomHexColor();

        boxesEl.appendChild(box);

        size += 10;
    }
}

function destroyBoxes() {
    boxesEl.innerHTML = '';
}


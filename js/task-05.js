const createButtonEl = document.querySelector('[data-create]');
const destroyButtonEl = document.querySelector('[data-destroy]')
const inputEl = document.querySelector('input');
const boxesEl = document.querySelector('#boxes');

createButtonEl.addEventListener('click', handleCreateButtonClick);
destroyButtonEl.addEventListener('click', destroyBoxes);


function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, 0)}`;
}

function handleCreateButtonClick() {
    const amount = +inputEl.value;
    createBoxes(amount);
}

function createBoxes(amount) {
    destroyBoxes();
    const elements = [];
    let size = 30;

    for (let i = 0; i < amount; i += 1) {
        const box = document.createElement('div');

        box.style.width = size + 'px';
        box.style.height = size + 'px';
        box.style.backgroundColor = getRandomHexColor();

        elements.push(box);
        size += 10;
    }
    boxesEl.append(...elements);
}

function destroyBoxes() {
    boxesEl.innerHTML = '';
}


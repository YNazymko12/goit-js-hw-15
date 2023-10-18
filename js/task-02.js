const controlInputEl = document.querySelector('#font-size-control');
const textEl = document.querySelector('#text');

textEl.style.fontSize = controlInputEl.value + 'px';

controlInputEl.addEventListener('input', handlerFontSize);

function handlerFontSize(event) {
   const fontSizeControl = event.target.value + 'px';
   textEl.style.fontSize = fontSizeControl;
}
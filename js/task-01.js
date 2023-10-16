const inputEl = document.querySelector('#validation-input');

inputEl.addEventListener('blur', handlerInput);

function handlerInput(event) {
    const requiredLength = parseInt(event.target.getAttribute('data-length'));
    const currentLength = event.target.value.length;

    event.target.classList.toggle('valid', currentLength === requiredLength);
    event.target.classList.toggle('invalid', currentLength !== requiredLength)
}


const loginFormEl = document.querySelector('.login-form');

const checkFields = (email, password) => {
    return email.trim() === '' || password.trim() === '';
};

loginFormEl.addEventListener('submit', handlerForm);

function handlerForm(event) {
    event.preventDefault();

    const { email, password } = loginFormEl.elements;

    if(checkFields(email.value, password.value)) {
        alert('Усі поля повинні бути заповнені');
        return;
        
    } else {
        const userLogin = {
            email: email.value,
            password: password.value
        };
        console.log(userLogin);
    };
    

    loginFormEl.reset();
}
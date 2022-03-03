
const form = document.querySelector('.form');

function getFormValue (event) {
    event.preventDefault();

    const nameFeild = document.querySelector('#name');
    const mailFeild = document.querySelector('#mail');
    const massageFeild = document.querySelector('#msg');

    const formData = {
        name: nameFeild.value,
        mail: mailFeild.value,
        massage: massageFeild.value
    };

    console.log(formData);
    
}

form.addEventListener('submit', getFormValue);



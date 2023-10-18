const signupform = document.getElementById('signupform');
const email = document.getElementById('emailvalue');
const passwordvalue = document.getElementById('passwordvalue');
const confirmpassword = document.getElementById('confirmpassword');
const phonenumber = document.getElementById('phonenumber');
const signin = document.getElementById('signin');

signupform.addEventListener('signin', e => {
    e.preventDefault();

    validateInputs();
});

// validate email

const isValidEmail = email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}


const setError = (element,message) => {
    const parentinput = element.parentElement;
    const errorDisplay = parentinput.querySelector('.error');
    errorDisplay.innerText = message;
    parentinput.classList.add('error');
    parentinput.classList.remove('success');
}
const setSuccess = element => {
    const parentinput = element.parentElement;
    const errorDisplay = parentinput.querySelector('.error');
    errorDisplay.innerText = '';
    parentinput.classList.add('success');
    parentinput.classList.remove('error');
}
const validateInputs = () =>{
    const emailval = email.value.trim();
    const passwordval = passwordvalue.value.trim();
    const confirmval = confirmpassword.value.trim();
    const phoneval = phonenumber.value.trim();

    if(emailval === '')
    {
        setError(email,'email is required');
    }
    else if (!isValidEmail(emailval)){
        alert('hello');
        setError(email, 'provide a valid email address');
    }
    else{
        setSuccess(email);
    }
}   

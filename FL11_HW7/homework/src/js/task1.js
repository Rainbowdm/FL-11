const checkEmail = prompt('Enter your email address', '');
const minSymbols = 6;
let password = '';

if (checkEmail === '' || checkEmail === null) {
    alert('Canceled');
} else if (checkEmail.length < minSymbols) {
    alert('I don’t know any emails having name length less than 6 symbols');
} else if (checkEmail === 'user@gmail.com' || checkEmail === 'admin@gmail.com') {
    password = prompt('Enter your password', '');
} else {
    alert('I don’t know you');
}

if (password === '' || password === null) {
    alert('Canceled');
}
if (checkEmail === 'user@gmail.com' && password === 'UserPass') {
    console.log('valid password');
    if (checkEmail === 'admin@gmail.com' && password === 'AdminPass') {
        console.log('valid password');
    }
} else {
    alert('Wrong password');
}
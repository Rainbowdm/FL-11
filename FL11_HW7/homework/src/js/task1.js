const minLengthSix = 6;
let password = '';
let oldPass;
let newPass;
const minLenghtFive = 5;
let newPassAgain;
let changePass;

//Step 1. Check login
const checkEmail = prompt('Enter your email address', '');
if (checkEmail === '' || checkEmail === null) {
    alert('Canceled');
} else if (checkEmail.length < minLengthSix) {
    alert('I don’t know any emails having name length less than 6 symbols');
} else if (checkEmail === 'user@gmail.com' || checkEmail === 'admin@gmail.com') {
    password = prompt('Enter your password', '');

    //Step 2. Check password:
    if (password === '' || password === null) {
        alert('Canceled');
    } else if (checkEmail === 'user@gmail.com' && password === 'UserPass' ||
        checkEmail === 'admin@gmail.com' && password === 'AdminPass') {
        //Step 3. Change the password:
        changePass = confirm('Do you want to change your password?', '');
        if (changePass === false) {
            alert('You have failed the change');
        } else if (changePass === true) {
            oldPass = prompt('Enter your correct old password', '');
        }
        if (oldPass === password) {
            newPass = prompt('Enter new password', '');
        }
        if (newPass.length < minLenghtFive) {
            alert('It’s too short password. Sorry.');
        } else {
            newPassAgain = prompt('Confirm your password again');
        }
        if (newPassAgain === newPass) {
            alert('You have successfully changed your password');
        } else {
            alert('You wrote the wrong password.');
        }
    } else {
        alert('Wrong password');
    }
} else {
    alert('I don’t know you');
}
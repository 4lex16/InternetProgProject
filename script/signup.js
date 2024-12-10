// This script manages code needed for signup.html

// All constants needed
const usernameTb = document.querySelector('#username-tb');
const emailTb = document.querySelector('#email-tb');
const passwordTb = document.querySelector('#password-tb');
const conPasswordTb = document.querySelector('#con-password-tb');
const signupBtn = document.querySelector('#submit-btn');

// Gets the information, checks if it is ok then adds to profile list, returns to signin page
function signUp() {
    if (usernameTb.value === "" ||
        emailTb.value === "" ||
        passwordTb.value === "" ||
        conPasswordTb.value === "") {
        alert("Please fill out all the forms");
        return;
    }
    const users = localStorage.getItem('users') ? JSON.parse(localStorage.getItem('users')) : []
    const username =  usernameTb.value;
    const email = emailTb.value;
    const pass = passwordTb.value;
    const cpass = conPasswordTb.value;

    if (pass !== cpass) {
        alert("Your passwords do not match");
        return;
    }
    const info = {
        "username":`${username}`,
        "email":`${email}`,
        "pass":`${pass}`,
        "profile":{
            "img":"",
            "description":""
        },
        "stats":[],
        "comments":[]
    }
    users.push(info);
    localStorage.setItem('users', JSON.stringify(users));
    window.location.href = 'account.html';
}

signupBtn.addEventListener('click', signUp);

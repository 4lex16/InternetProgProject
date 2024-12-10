// This script manages all code needed to display data for "account.html"

// All constants needed
const emailTb = document.querySelector('#email-tb');
const passwordTb = document.querySelector('#password-tb');
const submitBtn = document.querySelector('#sign-in-btn');
const signInForm = document.querySelector('#sign-in-form');
const accountDiv = document.querySelector('#account-div')

// Retrieves all the user data for "json/profiles.json"
async function getUsersData() {
     return await JSON.parse(localStorage.getItem("users"));
}

async function getUserData() {
    return await JSON.parse(localStorage.getItem("loggedIn"));
}


// Loads all the data as html onto the page
async function loadUserData() {
    const user = await getUserData();
    accountDiv.innerHTML = `
        <h1>${user.username}</h1>
        <p>${user.profile.description}</p>
        <img alt="profile picture" src="${user.profile.img}">
    `;
}

// Adds information of who is logged into localStorage
async function login() {
    const users = await getUsersData();
    if (users !== null) {
        const email = emailTb.value;
        const pass = passwordTb.value;
        for (const user of users) {
            if (user.email == email && user.pass == pass) {
                localStorage.setItem('loggedIn', JSON.stringify(user))
                loadUserData();
                window.location.reload();
                return;
            }
        }
    }
    alert("Incorrect account information");
}

submitBtn.addEventListener('click', login);

// Removes information of who is logged from localStorage
function logout() {
    localStorage.removeItem('loggedIn')
}

function isLoggedIn() {
    if (localStorage.getItem('loggedIn')) {
        signInForm.style.display = 'none';
        accountDiv.style.display = 'flex';
        loadUserData();
    } else {
        signInForm.style.display = 'flex';
        accountDiv.style.display = 'none';
    }
}

document.addEventListener('DOMContentLoaded', isLoggedIn)
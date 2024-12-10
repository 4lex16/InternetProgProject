// This script manages the state of the header (logged in or not)

const navbar = document.querySelector("nav");
const ddLink = document.querySelector("#profile-drop-down-link")
const ddMenu = document.querySelector("#profile-drop-down-div")

// Loads the header depending on the state of the login/logout
async function loadHeader() {
    // Only appears if someone is logged in
    const user = await getUserData();
    if (isLoggedIn()) {
        navbar.innerHTML = `
            <a href="index.html">Games</a>
            <a href="account.html">Profile Name</a>
            <a href="dashboard.html">Dashboard</a>
            <a onclick="logOut()">Log Out</a>
        `;
    }
}

function isLoggedIn() {
    return localStorage.getItem('loggedIn') !== null;
}

function logOut() {
    localStorage.removeItem('loggedIn')
    window.location.reload();
}

async function getUserData() {
    return await JSON.parse(localStorage.getItem("loggedIn"));
}

loadHeader();

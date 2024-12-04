// This script manages the state of the header (logged in or not)

const navbar = document.querySelector("nav");

// Loads the header depending on the state of the login/logout
function loadHeader() {
    navbar.innerHTML = `
        <a href="index.html">Games</a>
        <a href="index.html">Profile Name</a>
    <!--    Add Select Thingy here -->
    `;
}
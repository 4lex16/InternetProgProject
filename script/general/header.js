// This script manages the state of the header (logged in or not)

const navbar = document.querySelector("nav");
const ddLink = document.querySelector("#profile-drop-down-link")
const ddMenu = document.querySelector("#profile-drop-down-div")

// Loads the header depending on the state of the login/logout
function loadHeader() {
    // Only appears if someone is logged in
    if (false) {
        navbar.innerHTML = `
            <a href="index.html">Games</a>
            <a href="index.html">Profile Name</a>
            <!--    Add Select Thingy here -->
            <a id="profile-drop-down-link" onclick="openCloseDdMenu()">
                V
                <div id="profile-drop-down-div">
                    <a href="../../dashboard.html">Dashboard</a>
                    <a href="../../account.html">Profile</a>
                </div>
            </a>
        `;
    }
}

loadHeader();

function openCloseDdMenu() {
    if (ddMenu.hidden === false) {
        ddMenu.show();
    } else {
        ddMenu.hide();
    }
}
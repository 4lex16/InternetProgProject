


// Retrieves all the game stats from "json/profiles.json"
function getPlayerStatistics() {

}

// Loads all the player statistics into the container
async function loadPlayerStatistics() {
    const user = await getUserData();
    const games = await getGames();
    $('#profile-name').innerText = user.username;
    let statsHTML = '';
    for (const game of games) {
        statsHTML += `
            <div>
                <a id="game-link" href="gameplayer.html" onclick="setGameCookie(${value.id})">
                    <h1>${game.title}</h1>
                    <img src="https://raw.githubusercontent.com/4lex16/InternetProgProject/refs/heads/main/assets/${value.img}.png">
                </a>
            </div> 
        `;
    }
    $('#stats-div').innerHTML = statsHTML;
}

document.addEventListener('DOMContentLoaded', loadPlayerStatistics);

async function getUserData() {
    return await JSON.parse(localStorage.getItem("loggedIn"));
}

function setGameCookie(id) {
    document.cookie = `currentGame=${id}`;
}

async function getGames() {
    try {
        const res = await fetch('https://raw.githubusercontent.com/4lex16/InternetProgProject/refs/heads/main/json/games.json');
        return await res.json();
    } catch (error) {
        console.error(error);
    }
}

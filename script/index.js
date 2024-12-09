// This script manages all code needed to load playable games for index.html

// All constant's needed
const gamesDiv = document.querySelector('#games-div')
// Retrieves all the Games from "json/games.json" via githubusercontent so it works on pages
async function getGames() {
    try {
        const res = await fetch('https://raw.githubusercontent.com/4lex16/InternetProgProject/refs/heads/main/json/games.json');
        return await res.json();
    } catch (error) {
        console.error(error);
    }
}

// Loads all the Games onto the html page
async function loadGames() {
    const data = await getGames();
    let gamesHtml = "";
    for (const value of data) {
        gamesHtml += `
            <a id="game-link" href="gameplayer.html" onclick="setGameCookie(${value.id})">
            <div id="game-div">
                <img src="https://raw.githubusercontent.com/4lex16/InternetProgProject/refs/heads/main/assets/${value.img}.img">
                <h1>${value.title}</h1>
            </div>
            </a>
        `
   };
    gamesDiv.innerHTML = gamesHtml;
}

function setGameCookie(id) {
    document.cookie = `currentGame=${id}`;
}

document.addEventListener('DOMContentLoaded', loadGames);
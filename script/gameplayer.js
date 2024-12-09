// This script manages all code needed to load the game for gameplayer.js

// All constants needed
const titleH1 = document.querySelector('#title-h1')
const gameDiv = document.querySelector('#game-div');
const descDiv = document.querySelector('#description-div');

// Retrieves the game chosen to be played
async function getGames() {
    try {
        const res = await fetch('./../json/games.json');
        return await res.json();
    } catch (error) {
        console.error(error);
    }
}

async function getSelectedGame() {
    const cookie = document.cookie.split(`currentGame=`);
    const games = await getGames();
    for (let i = 0; i < games.length; i++) {
        if (games[i].id  == cookie[1]) {
            return games[i];
        }
    }
}
// Loads the iframe of the selected game
async function loadSelectedGame() {
    const game = await getSelectedGame()
    const resX = 1920 / 1.5
    const resY = 1080 / 1.5
    titleH1.innerText = `${game.title}`;
    gameDiv.innerHTML = `
        <iframe 
            src="${game.path}.html" 
            width="${resX}"
            height="${resY}" 
            allow="fullscreen"
            loading="lazy"
        ></iframe>
    `;
    descDiv.innerHTML = `
        <p>${game.description.content}</p>
        <p>${game.description.credits}</p>
    `;
}

document.addEventListener('DOMContentLoaded', loadSelectedGame);
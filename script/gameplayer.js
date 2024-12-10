// This script manages all code needed to load the game for gameplayer.js

// All constants needed
const titleH1 = document.querySelector('#title-h1')
const gameDiv = document.querySelector('#game-div');
const descDiv = document.querySelector('#description-div');
const commDiv = document.querySelector('#comments-div')

// Retrieves the game chosen to be played
async function getGames() {
    try {
        const res = await fetch('https://raw.githubusercontent.com/4lex16/InternetProgProject/refs/heads/main/json/games.json');
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

async function getComments() {
    // I tried to use AJAX for this but It would want to work
    const game = await getSelectedGame();
    try {
        const res = await fetch(`https://jsonplaceholder.typicode.com/comments?postId=${game.id}`);
        return await res.json();
    } catch (error) {
        console.error(error);
    }
}

async function loadComments() {
    const comments = await getComments();
    let commHTML = '';
    for (let i = 0; i < comments.length; i++) {
        commHTML += `
            <div class="comment-div">
                <h3 class="comment-header">${comments[i].name}</h3>
                <p class="comment-content">${comments[i].body}</p>
            </div> 
        `;
    }
    commDiv.innerHTML = commHTML;
}

document.addEventListener('DOMContentLoaded', loadComments);
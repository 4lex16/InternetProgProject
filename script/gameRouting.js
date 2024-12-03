

/*
Game Ideas :
- Tetris
- Flappy Bird
- Tower Defence of some kind
- Target Practice
- Dino Game
 */
// This is the array that contains the information for all the games.
const games = [
    {
        title:"Test for Internet Programming",
        img:"https://upload.wikimedia.org/wikipedia/commons/b/b9/Solid_red.png",
        path:"testforinternetprog"
    },
    {
        title:"Tetris",
        img:"https://upload.wikimedia.org/wikipedia/commons/b/b9/Solid_red.png",
        path:"testforinternetprog"
    },
    {
        title:"Tower Defence",
        img:"https://upload.wikimedia.org/wikipedia/commons/b/b9/Solid_red.png",
        path:"testforinternetprog"
    },
    {
        title:"Dino Game",
        img:"https://upload.wikimedia.org/wikipedia/commons/b/b9/Solid_red.png",
        path:"testforinternetprog"
    }
];

renderGames();
/*
 * Renders all the games into the game browser
 * Called when opening the page because it loads the games immediately
 * */
function renderGames() {
    const contentDiv = document.querySelector("#games-browser-div")
    for (const game of games) {
        contentDiv.innerHTML += `
        <div>
        <a class="game-link" href="game/${game.path}">
            <h2>${game.title}</h2>
            <img src="${game.img}" alt="game image">    
        </a>    
        </div>
        `;
    }
    // document.querySelectorAll(".game-link").forEach((event) => {
    //     event.preventDefault();
    //     const url = event.getAttribute("href")
    //     history.pushState(null, '', url);
    //     handleRouting();
    // });
    // TODO: Ask why this isn't calling when I initially open up the site for the first time
}

/*
 * Renders the specified game into the game player
 */
function renderGame(gameName) {
    const contentDiv = document.querySelector("#content");
    const game = games.find(gameName);
    if (game) {
        contentDiv.innerHTML = `<iframe src="../games/${game.path}/${game.path}.html"></iframe>`;
    } else {
        contentDiv.innerHTML = `404 game not found`;
    }
}


function handleRouting() {
    const path = window.location.pathname;
    const parts = path.split('/');
    const gameName = parts[parts.length - 1];
    renderGame(gameName);

}

window.onpopstate = () => {
    renderGames();
}
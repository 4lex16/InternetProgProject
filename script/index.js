
const games = [
    {
        title:"testforinternetprog",
        img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLQItgwynim6KYR76B2pVUnPJk2iJLH7y1Cw&s",
        path:"testforinternetprog"
    },
    {
        title:"hellomyguy",
        img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLQItgwynim6KYR76B2pVUnPJk2iJLH7y1Cw&s",
        path:"hellomyguy"
    }
]


function renderContentDiv() {
    const contentDiv = document.querySelector("#content");
    for (const game of games) {
        console.log(game.title)
        contentDiv.innerHTML += `
        <div>
        <a class="game-link" href="game/${game.path}">
            <h1>${game.title}</h1>
            <img src="${game.img}" alt="game image">    
        </a>    
        </div>
        `;
    }
    document.querySelectorAll(".game-link").forEach((event) => {
        event.preventDefault();
        const url = event.getAttribute("href")
        history.pushState(null, '', url);
        handleRouting();
    })
}

function renderContent(gameName) {
    const contentDiv = document.querySelector("#content");
    const game = games;
    if (game) {
        contentDiv.innerHTML = `<iframe src="../games/${game.title}/${game.title}.html" width="800px" height="500px"></iframe>`;
    } else {
        contentDiv.innerHTML = `<h1>404 game not found</h1>`;
    }
}

function handleRouting() {
    const path = window.location.pathname;
    const parts = path.split('/');
    const gameName = parts[parts.length - 1];

    renderContent(gameName);
}

window.onpopstate = function() {
    handleRouting();
}
renderContentDiv();
//const link = document.querySelector('#content > a');

// link.addEventListener('click', (event) => {
//     event.preventDefault();
//     const url = link.getAttribute("href")
//     history.pushState(null, '', url);
//     handleRouting();
// })
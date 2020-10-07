/***** Deliverable 1 *****/
document.addEventListener("DOMContentLoaded", () => {
    const header = document.querySelector("#header");
    console.log("Here's your header:", header);
  
/***** Deliverable 2 *****/
header.style = "color:red";

/***** Deliverable 3 *****/
let team = PLAYERS[0]

    
        function renderPlayer(playerArray) {
            for (const player of playerArray) {
            const playerDiv = document.createElement('div')
            playerDiv.classList.add("player")
            playerDiv.dataset.number = `${player.number}`
            playerDiv.innerHTML = `
                <h3>${player.name} (<em>${player.nickname}</em>)</h3>
                <img src="${player.photo}" alt="${player.name}">
        `
        
            const playerContainer = document.querySelector(".player-container")
            playerContainer.append(playerDiv)
        }
    }
    renderPlayer(PLAYERS);

/***** Deliverable 4 *****/
document.querySelector("div[data-number='7']").remove();
});
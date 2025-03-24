// Your code here
const characterBar = document.getElementById("character-bar");
const detailedInfo = document.getElementById("detailed-info");
const characterName = document.getElementById("name");
const characterImage = document.getElementById("image");
const characterVotes = document.getElementById("vote-count");
const voteForm = document.getElementById("votes-form");
const resetButton = document.getElementById("reset-btn");
const characterForm = document.getElementById("character-form")

function fetchCharacters() {
    fetch('https://flatter-cuties-vpdp.vercel.app/characters')
        .then(response => response.json())
        .then(data => {
            characters = data;
            renderCharacterBar();
        })
        .catch(error => console.error('Error fetching characters:', error));
}
function addCharacterToBar(character) {
    const span = document.createElement("span"); 
    span.textContent = character.name; 
    span.dataset.id = character.id; 
    span.addEventListener("click", () => displayCharacterDetails(character)); 
    characterBar.appendChild(span); 
  }
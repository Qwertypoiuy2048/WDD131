// properties: name, class, level, health, and image and methods: attacked and levelUp
const characterCard = {
    name: "Aragorn",
    class: "Ranger",
    level: 5,
    baseHealth: 50,
    health: 50,
    image: "https://andejuli.github.io/wdd131/character_card/snortleblat.webp",

    attacked: function () {
        this.health -= 10;
        if (this.health < 0) {
            this.health = 0;
            characterDied(this);
        }
    },
    levelUp: function () {
        this.level += 1;
        this.baseHealth += 10;
        this.health = this.baseHealth;
    }
};

function characterDied(character) {
    console.log(`${character.name} has died.`);
    alert(`${character.name} has died.`);
    character.image = "https://thumbs.dreamstime.com/b/isolated-black-silhouette-tombstone-rip-text-minimalist-design-white-background-memorial-funeral-themes-black-rip-481519917.jpg";
}

function displayCharacterCard(character) {
    const cardContainer = document.getElementById("cards");
    cardContainer.innerHTML = `
    <section class="character-card">
        <img src="${character.image}" alt="${character.name} Image" class="character-image">
        <h1 class="character-name">${character.name}</h1>
        <div class="character-details">
            <p><strong>Class:</strong> ${character.class}</p>
            <p><strong>Level:</strong> ${character.level}</p>
            <p><strong>Health:</strong> ${character.health}/${character.baseHealth}</p>
        </div>
        <div class="buttons">
            <button id="attacked">Attacked</button>
            <button id="level-up">Level Up</button>
        </div>
    </section>`;
    document.querySelector("#attacked").addEventListener("click", function () {
        characterCard.attacked();
        displayCharacterCard(characterCard);
    });
    document.querySelector("#level-up").addEventListener("click", function () {
        characterCard.levelUp();
        displayCharacterCard(characterCard);
    });
}

displayCharacterCard(characterCard);

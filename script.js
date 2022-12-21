const searchButton = document.querySelector('#myButton');


function search(e) {
  e.preventDefault();
  let pokemonName = document.querySelector('#userInput').value;
  let resultsMoves = document.querySelector('#results');
  let pokemonImage = document.querySelector('#pokemon-image');

  // API based on the pokemon searched
  let api = `https://pokeapi.co/api/v2/pokemon/${pokemonName}`;

  // request the data
  fetch(api)
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        let pokeMoves = data["moves"];
        //pokeMoves[0]["move"]["name"] => to get the first move
        let pokeValues = Object.values(pokeMoves);

        let allMoves = [];
        for (const move in pokeMoves) {
            allMoves.push(`<p>${pokeMoves[move]["move"]["name"]}</p>`);
        }
        
       // Get the URL of the default front sprite of the Pokemon
       const spriteUrl = data.sprites.front_default;

       //A Sprite is a small graphic image file from the website
       
       //Assign the URL of the sprite as the value of the src attribute of the pokemonImage element.
       pokemonImage.src = spriteUrl;

        resultsMoves.innerHTML = `<h2>Moves:</h2><ul id="moves-list"><li>${allMoves.join("</li><li>")}</li></ul>`;
        console.log(typeof Object.values(pokeValues));
    })
    .catch((error) => {
        console.log(error);
    });
}

searchButton.addEventListener('click', search);
const searchButton = document.querySelector('#myButton');
searchButton.addEventListener('click', search);

function search(e) {
  e.preventDefault();
  let pokemonName = document.querySelector('#userInput').value;
  let resultsMoves = document.querySelector('#results');
  let pokeImage = document.querySelector('#pokemonImage');

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

        let allMoves = [];

        for (const move in pokeMoves) {
            allMoves.push(`${pokeMoves[move]["move"]["name"]}`);
        }
        pokeImage.innerHTML = `<img src= "https://img.pokemondb.net/artwork/large/${pokemonName}.jpg">`;
        resultsMoves.innerHTML = `Check below the moves: ${allMoves.join(", ")}. `;
        console.log(typeof Object.values(pokeValues));
    })
    .catch((error) => {
        console.log(error);
    });
}
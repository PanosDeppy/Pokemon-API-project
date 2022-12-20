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
        let pokeValues = Object.values(pokeMoves);

        let allMoves = [];
        for (const move in pokeMoves) {
            allMoves.push(`<p>${pokeMoves[move]["move"]["name"]}</p>`);
        }
        pokeImage.innerHTML = `<img src= "https://img.pokemondb.net/artwork/large/${pokemonName}.jpg">`;
        resultsMoves.innerHTML = `<p> Check below the moves: ${allMoves.join(" ")}. </p>`;
        console.log(typeof Object.values(pokeValues));
    })
    .catch((error) => {
        console.log(error);
    });
}
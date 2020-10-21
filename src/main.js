// Api
function callAPI() {
  let pokemons = '';

  dataEndpoint = fetch(`https://pokeapi.co/api/v2/pokemon?limit=100&offset=200`)
    .then((response) => response.json())
    .then((pokeData) => {
      let pokeResults = pokeData.results;
      pokeResults.forEach((element) => {
        //Si quiero independizar la parte de mostrar del resto de la function, como hago?

        pokemons += `
        <div class="col m2 center">
        <h5>${element.name}</h5>
        <span><img src="${element.url}" alt="pokemon"></span>
        </div>
        `;

        // console.log(element.name)
        // console.log(element.url)

        document.getElementById("pokedex").innerHTML = pokemons;
      });
    });
}

callAPI();
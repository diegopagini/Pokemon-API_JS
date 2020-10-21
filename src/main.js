// Api
function callAPI() {
  dataEndpoint = fetch(`https://pokeapi.co/api/v2/pokemon?limit=100&offset=200`)
    .then((response) => response.json())
    .then((pokeData) => {
      let pokeResults = pokeData.results;
      pokeResults.forEach(element => {
        console.log(element.name)
        console.log(element.url)
      });
    });
  }

callAPI()
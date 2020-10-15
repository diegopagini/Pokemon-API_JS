// Api
function callAPI() {
  fetch("https://pokeapi.co/api/v2/pokemon")
    .then((response) => response.json())
    .then((json) => console.log(json));
}
callAPI();
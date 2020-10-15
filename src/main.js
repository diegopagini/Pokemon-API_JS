// Api
let pokemonsList = [];
function callAPI() {
  fetch("https://pokeapi.co/api/v2/pokemon")
    .then((response) => response.json())
    .then((data) => console.log(data.results));
  }
  callAPI();
  //Anda pero no la puedo manipular.



function callAPI2() {
  fetch("https://pokeapi.co/api/v2/pokemon")
    .then((response) => response.json())
    .then((data) => {
      return data.results = pokemonsList
    });
    console.log(pokemonsList)
}
callAPI2();
//No anda, algo estoy haciendo mal



let pokemonArray = [];
function callAPI3() {
  fetch("https://pokeapi.co/api/v2/pokemon")
    .then((response) => response.json())
    .then((data) => {
      pokemonArray = data.results;
    });
    console.log(pokemonArray);
}
callAPI3();
//Pues tampoco...
import { consomePokeAPI } from "./request.js";

async function renderizaPokemons() {
  const ulTag = document.querySelector('ul')

  const listaDePokemons = await consomePokeAPI()

  listaDePokemons.results.forEach(pokemon => {
    const numeroNaPokedex = pokemon.url.slice(34, -1)

    ulTag.insertAdjacentHTML('beforeend', `
            <li>
                <img class="imgPokemon"src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${numeroNaPokedex}.png" alt=${pokemon.name}>
                <h3>${pokemon.name}</h3>
            </li>
        `)
  })
  console.log(listaDePokemons)
}

renderizaPokemons()
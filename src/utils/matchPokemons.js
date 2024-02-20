// import { useState } from "react";
// import downloadPokemons from "./downloadPokemons";

// async function matchPokemons(searchTerm){
//     const DEFAULT_URL="https://pokeapi.co/api/v2/pokemon";
//     const [pokemonListState , setPokemonListState]=useState({
//         pokemonList: [],
//         pokedexUrl: DEFAULT_URL,
//         nextUrl:DEFAULT_URL,
//         prevUrl: DEFAULT_URL
//     })
//     await downloadPokemons(pokemonListState , setPokemonListState,DEFAULT_URL);
//     const pokemonList = pokemonListState.pokemonList;

//     const [pokemonMatch ,setPokemonMatch]=useState();

//     let matches=pokemonList.filter((pokemon)=>{
//         const regex=new RegExp(`${searchTerm}`,"gi");
//         return pokemon.name.match(regex);
//     })
//     setPokemonMatch(matches);
//     console.log(pokemonMatch);

// }
// export default matchPokemons;

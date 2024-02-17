import { useEffect, useState } from "react";
import downloadPokemons from "../utils/downloadPokemons";

//
function usePokemonList(DEFAULT_URL){
    
    // const [pokemonList,setPokemonList]= useState([]);

    // const [pokedexUrl,setPokedexUrl]=useState(DEFAULT_URL);
    // const [nextUrl, setNextUrl]=useState(DEFAULT_URL);
    // const [prevUrl, setPrevUrl]=useState(DEFAULT_URL);

    const [pokemonListState , setPokemonListState]=useState({
        pokemonList: [],
        pokedexUrl: DEFAULT_URL,
        nextUrl:DEFAULT_URL,
        prevUrl: DEFAULT_URL
    })

    
    //useEffect is use for synchronyze you app with other website with help of API.in  that case synchronyze our app with pokeapi.

    //if you use it like this then in every  component(PokemonList)  rerender you use a callback of setEffect function.
    // useEffect(()=>{

    // });
    //if not want to rerender the useEffect fuction on only intial exection we want to execute then pass a dependency array like [] and keep it empty. if you pass any variable to an array than if that variable is change then also setEffect is rerndewr;
    useEffect(()=>{

        downloadPokemons(pokemonListState , setPokemonListState,DEFAULT_URL);
    },[pokemonListState.pokedexUrl]);
    return [pokemonListState,setPokemonListState];
}


export default usePokemonList;

import './PokemonList.css';

import axios from 'axios';
import { useEffect,useState} from 'react';
import Pokemon from '../Pokemon/Pokemon';


function PokemonList(){
    const DEFAULT_URL="https://pokeapi.co/api/v2/pokemon";
    const [pokemonList,setPokemonList]= useState([]);

    const [pokedexUrl,setPokedexUrl]=useState(DEFAULT_URL);
    const [nextUrl, setNextUrl]=useState(DEFAULT_URL);
    const [prevUrl, setPrevUrl]=useState(DEFAULT_URL);

    async function downloadPokemons(){

        const response=await axios.get(pokedexUrl ? pokedexUrl:DEFAULT_URL);
       

        const pokemonResults= response.data.results;

        setNextUrl(response.data.next);
        setPrevUrl(response.data.previous);

        const pokemonPromise=pokemonResults.map((pokemon)=>axios.get(pokemon.url));//jab bhi API ke through baher se call karna hoga to ham axios ka use karenge.

        const pokemonListData=await axios.all(pokemonPromise);

        const pokemonFinalList = pokemonListData.map(pokemonData=>{
            const pokemon=pokemonData.data;
            return{
                id: pokemon.id,
                name:pokemon.name,
                image:pokemon.sprites.other.dream_world.front_default,
                type:pokemon.types
            }
        });
        console.log(pokemonFinalList);
        setPokemonList(pokemonFinalList);
    }
    //useEffect is use for synchronyze you app with other website with help of API.in  that case synchronyze our app with pokeapi.

    //if you use it like this then in every  component(PokemonList)  rerender you use a callback of setEffect function.
    // useEffect(()=>{

    // });
    //if not want to rerender the useEffect fuction on only intial exection we want to execute then pass a dependency array like [] and keep it empty. if you pass any variable to an array than if that variable is change then also setEffect is rerndewr;
    useEffect(()=>{
        downloadPokemons();
    },[pokedexUrl]);

    return(
        <div className='pokemon-list-wrapper'>
            <h1>pokemon list</h1>
            <div className='page-controls'>
                <button onClick={() => setPokedexUrl(prevUrl)}>Prev</button>
                <button onClick={() => setPokedexUrl(nextUrl)}>Next</button>
            </div>
            <div className='pokemon-list'>
                {pokemonList.map(pokemon=> <Pokemon name={pokemon.name} key={pokemon.id} url={pokemon.image} id={pokemon.id}/>)};
            </div>
            
        </div>
    )
    
}
export default PokemonList;
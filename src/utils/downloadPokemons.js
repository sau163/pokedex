import axios from "axios";

async function downloadPokemons(pokemonListState , setPokemonListState,defaultUrl,limit=20){

    const response=await axios.get(pokemonListState.pokedexUrl ? pokemonListState.pokedexUrl:defaultUrl);
   

    let pokemonResults= response.data.results? response.data.results:response.data.pokemon;

    pokemonResults=pokemonResults.slice(0,limit);
    // setNextUrl(response.data.next);
    // setPrevUrl(response.data.previous);
    // setPokemonListState((state)=>({...state, nextUrl: response.data.next,prevUrl: response.data.previous}))

    // const pokemonPromise=pokemonResults.map((pokemon)=>axios.get(pokemon.url));//jab bhi API ke through baher se call karna hoga to ham axios ka use karenge.

    const pokemonPromise=pokemonResults.map((p)=>{
        if(p.url){
            return axios.get(p.url)
        }
        else if(p.pokemon.url){
            return axios.get(p.pokemon.url);
        }
        
    });
    
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
    
    // setPokemonList(pokemonFinalList);
    // setPokemonListState((state)=>({...state, pokemonList:pokemonFinalList}))
    setPokemonListState((state)=>({...state, pokemonList:pokemonFinalList,nextUrl: response.data.next,prevUrl: response.data.previous}))

}
export default downloadPokemons;
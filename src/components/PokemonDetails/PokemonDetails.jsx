
import './PokemonDetails.css'
import { Link } from 'react-router-dom';

import usePokemon from '../../hooks/usePokemon';
import Pokemon from '../Pokemon/Pokemon';

function PokemonDetails({pokemonName}){

    //must take same name as take in URL creation ie. in routing
    
    const [pokemon,pokemonListState]=usePokemon(pokemonName);
return(
    <>
    <h1 className='pokedex-redirect'>
       <Link to='/'>
           pokedex
       </Link>
    </h1>
    {pokemon && <div className='pokemon-details-wrapper'>
    <div className='pokemon-detail-name'>
        {pokemon.name}
    </div>
    <div className='pokemon-image'>
        <img src={pokemon.image}/>
    </div>
    <div className='pokemon-attr'>
    <div>
        height: {pokemon.height}
    </div>
    <div>
       weight: {pokemon.weight}
    </div>    
        
    </div>
    <div className='pokemon-types'>
        <h1>type:</h1> {pokemon.types.map(t => <span  className='type' key={t.type.name}>{t.type.name}</span>)}
    </div>
   </div>}
   <div className='similar-pokemons'>
        <h2>similar pokemons</h2>
        <div className='pokemon-similar-boxes'>
            {pokemonListState.pokemonList.length > 0 &&
                pokemonListState.pokemonList.map(pokemon=> <Pokemon name={pokemon.name} key={pokemon.id} url={pokemon.image} id={pokemon.id}/>)};
        </div>
   </div>
   
    </>
  
)
}

export default PokemonDetails;
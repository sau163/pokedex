// import { useState } from 'react';
// import PokemonList from '../PokemonList/PokemonList';
// import Search from '../Search/Search';
// import './Pokedex.css';
// import PokemonDetails from '../PokemonDetails/PokemonDetails';

// function Pokedex(){

//     const [searchTerm, setSearchTerm]=useState('');
    
//     return(
//         <div className='pokedex-wrapper'>
//             <h1> POKEDEX</h1>
//             <Search updateSearchTerm={setSearchTerm}/>
            
//             {searchTerm ? <PokemonDetails pokemonName={searchTerm}/>:<PokemonList/>}
//         </div>
//     )
// }
// export default Pokedex;
import React, { useState, useEffect } from 'react';
import PokemonList from '../PokemonList/PokemonList';
import Search from '../Search/Search';
import './Pokedex.css';
import PokemonDetails from '../PokemonDetails/PokemonDetails';

function Pokedex() {
    const [searchTerm, setSearchTerm] = useState('');
    const [pokemonList, setPokemonList] = useState([]);

    useEffect(() => {
        fetch("https://pokeapi.co/api/v2/pokemon?limit=150")
            .then(response => response.json())
            .then(data => setPokemonList(data.results));
    }, []);

    return (
        <div className='pokedex-wrapper'>
            <h1>POKEDEX</h1>
            <Search updateSearchTerm={setSearchTerm} pokemonList={pokemonList} />
            {searchTerm ? <PokemonDetails pokemonName={searchTerm} /> : <PokemonList />}
        </div>
    );
}

export default Pokedex;

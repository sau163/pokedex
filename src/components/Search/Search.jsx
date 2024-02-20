// // import useDebounce from '../../hooks/useDebounce';
// // import './Search.css';

// // function Search({updateSearchTerm}){

   
// //     const debounceUpdteSearch=useDebounce((e)=>updateSearchTerm(e.target.value));

// //     return(
// //         <input
// //         id='search-pokemon'
// //          type='text' 
// //          placeholder="which pokemon you're lookinf for ?"
// //          onChange={handleChange} />
         
// //     )
// // }
// // export default Search;

// import React, { useState } from 'react';
// import useDebounce from '../../hooks/useDebounce';
// import './Search.css';

// function Search({ updateSearchTerm, pokemonList }) {
//     const [searchTerm, setSearchTerm] = useState('');
//     const debounceUpdateSearchTerm = useDebounce(updateSearchTerm, 300);

//     const matchPokemon = (text) => {
//         const regex = new RegExp(`^${text}`, "i");
//         return pokemonList.filter(pokemon => pokemon.name.match(regex)).slice(0, 5);
//     };

//     const handleChange = (e) => {
//         const value = e.target.value;
//         setSearchTerm(value);
//         debounceUpdateSearchTerm(value);
//     };

//     const handleSuggestionClick = (name) => {
//         setSearchTerm(name);
//         updateSearchTerm(name);
//     };

//     const filteredPokemon = searchTerm.length < 1 ? [] : matchPokemon(searchTerm);

//     return (
//         <div className="search-container">
//             <input
//                 id='search-pokemon'
//                 type='text'
//                 placeholder="Search for a Pokémon..."
//                 value={searchTerm}
//                 onChange={handleChange}
//             />
//             {filteredPokemon.length > 0 && (
//                 <ul className="autocomplete-list">
//                     {filteredPokemon.map(pokemon => (
//                         <li key={pokemon.id} onClick={() => handleSuggestionClick(pokemon.name)}>
//                             {pokemon.name}
//                         </li>
//                     ))}
//                 </ul>
//             )}
//         </div>
//     );
// }

// export default Search;




import React, { useState } from 'react';
import './Search.css';

function Search({ updateSearchTerm, pokemonList }) {
    const [searchTerm, setSearchTerm] = useState('');
    

    const matchPokemon = (text) => {
        const regex = new RegExp(`^${text}`, "i");
        return pokemonList.filter(pokemon => pokemon.name.match(regex)).slice(0, 10);
    };

    const handleChange = (e) => {
        const value = e.target.value;
        setSearchTerm(value);
    };

    const handleSuggestionClick = (name) => {
        setSearchTerm(name);
        updateSearchTerm(name);
    };

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            updateSearchTerm(searchTerm);
        }
    };

    const filteredPokemon = searchTerm.length < 1 ? [] : matchPokemon(searchTerm);

    return (
        <>
            <div className="search-container">
            <input
                id='search-pokemon'
                type='text'
                placeholder="Search for a Pokémon..."
                value={searchTerm}
                onChange={handleChange}
                onKeyDown={handleKeyDown}
            />
            <div className='autocomplete'>
            {filteredPokemon.length > 0 && (
                <div className="autocomplete-list">
                    {filteredPokemon.map(pokemon => (
                        <li  className='line' type='none' key={pokemon.id} onClick={() => handleSuggestionClick(pokemon.name)}>
                            {pokemon.name}
                        </li>
                    ))}
                </div>
            )}
             </div>
           
        </div>
        </>
        
    );
}

export default Search;


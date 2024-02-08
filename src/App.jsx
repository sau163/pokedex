
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Pokedex from './components/Pokedex/Pokedex'
import Pokemondetails from './components/PokemonDetails/PokemonDetails'

function App() {
 
  return (
    <>
      <Routes>
      <Route path="/" element={<Pokedex/>}/>

      {/* if in URL you need to pass variable (not fix like pokemon just before) then use (:)collan and then name to impliment in URL and it id nessery like http//:5173/pokemon/123df*/}

      <Route path="/pokemon/:id" element={<Pokemondetails/>}/>
      <Route path="*" element={<h1>page not found</h1>}/>

      </Routes>
     
    </>
  )
}

export default App

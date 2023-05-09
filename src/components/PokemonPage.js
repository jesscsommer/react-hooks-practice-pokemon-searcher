import React, { useEffect, useState } from "react";
import PokemonCollection from "./PokemonCollection";
import PokemonForm from "./PokemonForm";
import Search from "./Search";
import { Container } from "semantic-ui-react";

const PokemonPage = () => {

  //! Get pokemons and set initial state 
  const [pokemons, setPokemons] = useState([])

  useEffect(() => {
    fetch('http://localhost:3001/pokemon')
    .then(res => res.json())
    .then(data => setPokemons(data))
  }, [])

  //! Add new pokemons 

  const addPokemon = (newPokemon) => {
    setPokemons(pokemons => [newPokemon, ...pokemons])
  }

  //! Save search value to its own state

  const [searchTerm, setSearchTerm] = useState('')

  const handleSearch = (newSearchTerm) => {
    setSearchTerm(newSearchTerm)
  }

  //! Filter pokemon state by search term 

  const filteredPokemons = pokemons.filter(pokemon => pokemon.name.toLowerCase().includes(searchTerm.toLowerCase()))

  return (
    <Container>
      <h1>Pokemon Searcher</h1>
      <br />
      <PokemonForm addPokemon={addPokemon} />
      <br />
      <Search handleSearch={handleSearch} searchTerm={searchTerm} />
      <br />
      <PokemonCollection pokemons={filteredPokemons} />
    </Container>
  );
}

export default PokemonPage;

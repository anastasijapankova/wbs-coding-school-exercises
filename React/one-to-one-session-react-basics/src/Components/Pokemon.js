import React, { useState, useEffect } from 'react';

function Pokemon() {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon')
      .then((response) => response.json())
      .then((json) => setPokemons(json.results));
    // console.log()
  }, []);

  return (
    <div>
      <ol>
        {pokemons.map((pokemon) => (
          <li key={pokemon.name}>
            <h4>{pokemon.name}</h4>
          </li>
        ))}
      </ol>
    </div>
  );
}

export default Pokemon;

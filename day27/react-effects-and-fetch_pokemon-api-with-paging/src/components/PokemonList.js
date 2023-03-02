import { useEffect, useState } from "react";

export default function PokemonList() {
  const [pokemon, setPokemon] = useState([]);

  const [nextPokemonPage, setNextPokemonPage] = useState(
    "https://pokeapi.co/api/v2/pokemon?offset=0"
  );
  const [tiggerEffectCallback, setTriggerEffectCallback] = useState(true);
  const [prevPage, setPrevPage] = useState(null);

  useEffect(() => {
    async function loadPokemon() {
      try {
        const response = await fetch(nextPokemonPage);
        if (response.ok) {
          const data = await response.json();
          setPokemon(data.results);
          console.log(data);
          setPrevPage(data.previous);
          setNextPokemonPage(data.next);
        } else {
          console.log("response not ok");
        }
      } catch (error) {
        console.log(error);
      }
    }

    loadPokemon();
  }, [tiggerEffectCallback]); //wichtig hier wird loadPokemon getriggert, wenn das arryay sich ändert [dependency array]
  //wenn [] wird nur beim ersten rendern useeffect aufgerufen

  function handleNextClick() {
    setNextPokemonPage(nextPokemonPage);
    setTriggerEffectCallback(!tiggerEffectCallback);
  }
  function handlePrevClick() {
    setNextPokemonPage(prevPage);
    setTriggerEffectCallback(!tiggerEffectCallback);
  }
  return (
    <main>
      <button
        disabled={prevPage ? false : true}
        type="button"
        onClick={() => handlePrevClick()}
      >
        Previous Page
      </button>
      <button type="button" onClick={() => handleNextClick()}>
        Next Page
      </button>
      <ul>
        {pokemon.map(({ name }) => (
          <li key={name}>{name}</li>
        ))}
      </ul>
    </main>
  );
}

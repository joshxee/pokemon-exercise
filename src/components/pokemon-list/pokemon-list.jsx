import { useEffect, useState } from "react";
import { Button, Container, Heading } from "react-bulma-components";
import { getList } from "../../api/pokeapi";
import { Link } from "react-router-dom";
import { sortByPokedexId } from "./pokemon-list.helpers";

export function PokemonList() {
  const [pokemonList, setPokemonList] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    getList().then(
      (result) => {
        setIsLoaded(true);
        const sortedPokemon = result.pokemon_species.sort(sortByPokedexId)
        setPokemonList(sortedPokemon);
      },
      (error) => {
        setIsLoaded(true);
        setError(error);
      }
    );
  }, []);

  if (error) {
    return (
      <Heading size={3} textColor="light">
        Error: {error.message}
      </Heading>
    );
  } else if (!isLoaded) {
    return (
      <Heading size={3} textColor="light">
        Loading...
      </Heading>
    );
  } else {
    return (
      <Container>
        <Button.Group align="center">
          {pokemonList.map((pokemon) => (
            <Link to={`/${pokemon.name}`} key={pokemon.name}>
              <Button textTransform="capitalized">{pokemon.name}</Button>
            </Link>
          ))}
        </Button.Group>
      </Container>
    );
  }
}

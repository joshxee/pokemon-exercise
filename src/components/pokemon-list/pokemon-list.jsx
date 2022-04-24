import { useEffect, useState } from "react";
import { Button, Container, Heading } from "react-bulma-components";
import { getList } from "../../api/pokeapi";
import { Link } from "react-router-dom";

export function PokemonList() {
  const [pokemonList, setPokemonList] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    getList().then(
      (result) => {
        setIsLoaded(true);
        setPokemonList(result.pokemon_species);
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
      <Container alignContent="space-evenly">
        <Button.Group align="center">
          {pokemonList.map((pokemon) => (
            <Link to={`/${pokemon.name}`} key={pokemon.name}>
              <Button textTransform="capitalized">
                {pokemon.name}
              </Button>
            </Link>
          ))}
        </Button.Group>
      </Container>
    );
  }
}

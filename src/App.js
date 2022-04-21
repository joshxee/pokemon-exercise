import React, { useEffect, useState } from "react";
import {
  Button,
  Heading,
  Container,
  Section,
} from "react-bulma-components";
import { getList } from "./api/pokeapi";
import "bulma/css/bulma.min.css";

function App() {
  const [pokemonList, setPokemonList] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    getList().then(
      (result) => {
        setIsLoaded(true);
        setPokemonList(result.pokemon_species);
        console.log(result.pokemon_species);
      },
      (error) => {
        setIsLoaded(true);
        setError(error);
      }
    );
  }, []);

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <Section backgroundColor="dark" style={{ 'min-height': '100vh' }}>
        <Container>
          <Heading textAlign={"center"} textColor="light" size={1}>
            My Pokedex
          </Heading>
          {pokemonList.map((pokemon) => (
            <Button textTransform="capitalized" key={pokemon.name} p={1} m={1}>
              {pokemon.name}
            </Button>
          ))}
        </Container>
      </Section>
    );
  }
}

export default App;

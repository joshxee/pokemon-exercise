import {
  Container,
  Heading,
  Button,
  Card,
  Content,
} from "react-bulma-components";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { getDetails } from "../../api/pokeapi";

export function PokemonDetails() {
  const [pokemon, setPokemon] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState(null);
  let params = useParams();

  useEffect(() => {
    getDetails(params.pokemonName).then(
      (result) => {
        setIsLoaded(true);
        setPokemon(result);
      },
      (error) => {
        setIsLoaded(true);
        setError(error);
      }
    );
  }, [params.pokemonName]);

  if (error) {
    return <Heading size={3} textColor="Danger">Error: {error.message}</Heading>;
  } else if (!isLoaded) {
    return <Heading size={3} textColor="light">Loading...</Heading>;
  } else {
    return (
      <Container p={2} textAlign="center">
        <Card style={{ width: "500px", margin: "auto" }} p={2}>
          <Card.Image src={`https://projectpokemon.org/images/normal-sprite/${params.pokemonName}.gif`} size="16" fullwidth="false" />
          <Heading textTransform="capitalized" textColor="dark" size={4}>
            {params.pokemonName}
          </Heading>
          <Content>
            Types:
            {pokemon?.types?.reduce((typesList, type, index) => {
              if (index === 0) return ` ${type.type.name}`;
              return typesList.concat(`, ${type.type.name}`);
            }, "")}
          </Content>
        </Card>
        <Link to={`/`}>
          <Button m={2}>Home</Button>
        </Link>
      </Container>
    );
  }
}

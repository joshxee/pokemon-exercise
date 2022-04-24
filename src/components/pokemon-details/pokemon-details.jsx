import {
  Container,
  Heading,
  Button,
  Card,
  Content,
  Media,
  Image,
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
    return (
      <Heading size={3} textColor="Danger">
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
      <Container textAlign="center">
        <Card style={{ width: "400px", margin: "auto" }}>
          <Card.Image
            src={pokemon?.sprites?.other["official-artwork"].front_default}
            fallback={pokemon?.sprites?.front_default}
            rounded="true"
          />
          <Card.Content backgroundColor="white-ter">
            <Media>
              <Media.Item renderAs="figure" align="left">
                <Image
                  size={64}
                  alt="64x64"
                  src={`https://projectpokemon.org/images/normal-sprite/${params.pokemonName.replace(
                    /-/g,
                    "_"
                  )}.gif`}
                />
              </Media.Item>
              <Media.Item>
                <Heading textTransform="capitalized" textColor="dark" size={3}>
                  {params.pokemonName}
                </Heading>
                <Content>
                  Types:
                  {pokemon?.types?.reduce((typesList, type, index) => {
                    if (index === 0) return ` ${type.type.name}`;
                    return typesList.concat(`, ${type.type.name}`);
                  }, "")}
                </Content>
              </Media.Item>
            </Media>
          </Card.Content>
        </Card>
        <Link to={`/`}>
          <Button color="text" renderAs="span" w="400px" m={2}>
            Home
          </Button>
        </Link>
      </Container>
    );
  }
}

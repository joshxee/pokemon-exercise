import { getPokedexIdFromUrl } from "./pokemon-list.helpers";

test('should return 1 wehen given valid url', () => {
  const url = "https://pokeapi.co/api/v2/pokemon-species/1/";

  const output = getPokedexIdFromUrl(url);

  expect(output).toBe(1);
});
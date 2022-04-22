import React from "react";
import { setupServer } from "msw/node";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { mockPokeApi } from "../../api/pokeapi.mock";
import { PokemonDetails } from "./pokemon-details";

const server = setupServer(...mockPokeApi);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

test("displays loading", async () => {
  render(<PokemonDetails />);

  expect(screen.getByRole("heading")).toHaveTextContent(/Loading...$/i);
});

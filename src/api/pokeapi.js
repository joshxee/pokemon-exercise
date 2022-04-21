import axios from "axios";

export async function getList() {
  // const res = await fetch('https://pokeapi.co/api/v2/generation/1');
  // return res.json();

  const res = await axios.get("https://pokeapi.co/api/v2/generation/1");
  return res.data;
}

import axios from "axios";

export async function getList() {
  const res = await axios.get("https://pokeapi.co/api/v2/generation/1");
  return res.data;
}

export async function getDetails(name) {
  const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`);
  return res.data;
}
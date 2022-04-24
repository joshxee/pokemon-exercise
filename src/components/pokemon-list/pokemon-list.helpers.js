export function getPokedexIdFromUrl(url) {
  const regex = /\/([0-9]*)\/$/;
  return parseInt(url.match(regex)[1]);
}

export function sortByPokedexId(a, b) {
  const aID = getPokedexIdFromUrl(a.url);
  const bID = getPokedexIdFromUrl(b.url);

  if (aID > bID) return 1;
  else if (aID === bID) return 0;
  return -1;
}

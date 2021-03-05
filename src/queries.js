import axios from "axios";

axios.defaults.headers["app-id"] = "604256dfcf5773974e6beb34";

const getPokemonList = async () => {
  const { data } = await axios.get("https://pokeapi.co/api/v2/pokemon");
  return data;
};

const getMoviesList = async () => {
  const url = `https://dummyapi.io/data/api/user?limit=10`;
  const { data } = await axios.get(url);
  return data;
};

const getPokemonDetail = async (key, { id }) => {
  const { data } = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
  return data;
};

export { getPokemonDetail, getPokemonList, getMoviesList };

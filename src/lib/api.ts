import axios from 'axios';

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_POKEMON_API || 'https://pokeapi.co/api/v2',
});

export default api;

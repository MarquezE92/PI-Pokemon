import {GET_ALL_POKEMONS, FILTER_BY_TYPE, FILTER_BY_ORIGIN, SORT_BY_ALPHABET,
	SORT_BY_ATTACK, CREATE_POKEMON, GET_POKEMON, GET_POKEMON_DETAIL, GET_TYPES,
	DELETE_POKEMON} from './actionTypes';
import axios from 'axios';

const api = axios.create({

  baseURL: 'https://pokemon-app-estefania.herokuapp.com', // Reemplaza con la URL de tu servidor backend
});

// Configurar el interceptor para agregar las cabeceras CORS
api.interceptors.request.use(config => {
  config.headers['Access-Control-Allow-Origin'] = 'https://pi-pokemon-bice.vercel.app'; // Reemplaza con tu dominio frontend en Vercel
  config.headers['Access-Control-Allow-Methods'] = 'GET, POST, OPTIONS, PUT, DELETE';
  config.headers['Access-Control-Allow-Headers'] = 'Content-Type';
  return config;
});


export const getAllPokemons = () => dispatch => {
	return axios.get('/pokemons')
	.then(response=> response.data)
	.then(data=> dispatch({type: GET_ALL_POKEMONS, payload: data}))
};

export const getTypes= ()=> dispatch=> {
	return axios.get('/types')
	.then(response=> response.data)
	.then(data=> dispatch({type: GET_TYPES, payload: data}))
};

export const createPokemon= (infoPokemon)=> dispatch=> {
	axios.post('/pokemons', infoPokemon);
	return {type: CREATE_POKEMON}
};

export const filterByType= (pokemonType)=> {
	return {type: FILTER_BY_TYPE, payload: pokemonType}
};

export const filterByOrigin= (pokemonOrigin)=> {
	return {type: FILTER_BY_ORIGIN, payload: pokemonOrigin}
};

export const sortByAlphabet= (order)=> {
	return {type: SORT_BY_ALPHABET, payload: order}
};

export const sortByAttack= (order)=> {
	return {type: SORT_BY_ATTACK, payload: order}
};

export const getPokemon= (name)=> dispatch=> {
		return axios.get(`/pokemons?name=${name}`)
	.then(response=> response.data)
	.then(data=> dispatch({type: GET_POKEMON, payload: data}))
	.catch(error=> alert("We couldn't find your pokemon")) 
	
};

export const getPokemonDetail= (id)=> dispatch=> {
	return axios.get(`/pokemons/${id}`)
	.then(response=> response.data)
	.then(data=> dispatch({type: GET_POKEMON_DETAIL, payload: data}))
};

export const deletePokemon= (id)=> dispatch=> {
	return axios.delete(`/pokemons/delete/${id}`)
	.then(response=> dispatch({type: DELETE_POKEMON}))
};

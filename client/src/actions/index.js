import {GET_ALL_POKEMONS, FILTER_BY_TYPE, FILTER_BY_ORIGIN, SORT_BY_ALPHABET, SORT_BY_ATTACK, CREATE_POKEMON, GET_POKEMON} from './actionTypes';
import axios from 'axios';

export const getAllPokemons = () => dispatch => {
	return axios.get('http://localhost:3001/pokemons')
	.then(response=> response.data)
	.then(data=> dispatch({type: GET_ALL_POKEMONS, payload: data}))
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
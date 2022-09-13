import {GET_ALL_POKEMONS, FILTER_BY_TYPE, FILTER_BY_ORIGIN, SORT_BY_ALPHABET,
	SORT_BY_ATTACK, CREATE_POKEMON, GET_POKEMON, GET_POKEMON_DETAIL, GET_TYPES} from '../actions/actionTypes'

export const initialState= {
	allPokemons: [],
	pokemons: [],
	types: [],
	pokemonDetail: {}	
};

export default function rootReducer(state= initialState, action) {
	switch(action.type) {
		case GET_ALL_POKEMONS:
		return {
			...state,
			pokemons: action.payload,
			allPokemons: action.payload
		};
		case CREATE_POKEMON:
		return {
			...state
		};
		case GET_TYPES:
		const pokemonTypes = action.payload.map((type)=> type.name);
		return {
			...state,
			types: pokemonTypes
		}
		case FILTER_BY_TYPE:
		const filteredByType = state.allPokemons.filter(pokemon=>{
			for(let type of pokemon.types){
				if (type.name === action.payload)
				return true
				}
			return false;
		});
		
		return {
			...state,
			pokemons: filteredByType
		};
		case FILTER_BY_ORIGIN:
		const filteredByOrigin = (action.payload === 'existing')?
		state.allPokemons.filter(pokemon=> pokemon.ID < 41) :
		state.allPokemons.filter(pokemon=> pokemon.ID > 40)
		return {
			...state,
			pokemons: filteredByOrigin
		};
		case SORT_BY_ALPHABET:
		const sortedByAlphabet = (action.payload === 'A to Z') ?
		state.pokemons.sort((a,b)=> {
			if(a.name > b.name) {
				return 1
			} else if(a.name < b.name) {
				return -1
			} else {
				return 0
			}
		}) :
		state.pokemons.sort((a,b)=> {
			if(a.name < b.name) {
				return 1
			} else if(a.name > b.name) {
				return -1
			} else {
				return 0
			}
		})
		return {
			...state,
			pokemons: sortedByAlphabet
		};
		case SORT_BY_ATTACK:
		const sortedByAttack = (action.payload === 'Highest') ?
		state.pokemons.sort((a,b)=> {
			if(a.attack < b.attack) {
				return 1
			} else if(a.attack > b.attack) {
				return -1
			} else {
				return 0
			}
		}) :
		state.pokemons.sort((a,b)=> {
			if(a.attack > b.attack) {
				return 1
			} else if(a.attack < b.attack) {
				return -1
			} else {
				return 0
			}
		})
		return {
			...state,
			pokemons: sortedByAttack
		};
		case GET_POKEMON:
		return {
			...state,
			pokemons: action.payload,
		};
		case GET_POKEMON_DETAIL:
		const detail = (action.payload.ID)? action.payload : action.payload[0]
		return {
			...state,
			pokemonDetail: detail
		}
		default:
		return {...state}
	};
	
}
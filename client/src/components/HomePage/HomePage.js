import React from 'react';
import {useState, useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {Link} from 'react-router-dom';
import './HomePage.css';
import NavBarSearch from '../NavBarSearch/NavBarSearch';
import PokemonCard from '../PokemonCard/PokemonCard';
import Paginado from '../Paginado/Paginado';
import FilterByType from '../FilterByType/FilterByType';
import FilterByOrigin from '../FilterByOrigin/FilterByOrigin';
import SortBy from '../SortBy/SortBy';
import {backupDB} from '../../Utils/index';

import {getAllPokemons, filterByType, filterByOrigin, sortByAlphabet, sortByAttack} from '../../actions';


export default function HomePage() {
	const dispatch = useDispatch();

/* useEffect(()=>{
		dispatch(getAllPokemons())
	},[]); */

	//const pokemonsApi = useSelector(state=> state.pokemons)
	const allPokemons = backupDB;
	const [order, setOrder] = useState('');
	const [currentPage, setCurrentPage] = useState(1);
	const [pokemonsPerPage, setPokemonsPerPage] = useState(12);
	const lastPokemon = currentPage * pokemonsPerPage;
	const firstPokemon = lastPokemon - pokemonsPerPage;
	const currentPokemons = allPokemons?.slice(firstPokemon, lastPokemon);

	//console.log(pokemonsApi)
	console.log(backupDB)
	console.log(currentPokemons)
	console.log(allPokemons)

	function getAll() {
		dispatch(getAllPokemons())
	};

	function paginado(pageNumber) {
		setCurrentPage(pageNumber)
	};

	function handleFilterByType(e) {
		setCurrentPage(1);
		dispatch(filterByType(e.target.value))
	};

	function handleFilterByOrigin(e) {
		setCurrentPage(1);
		dispatch(filterByOrigin(e.target.value))
	};

	function handleSortByAlphabet(e) {
		dispatch(sortByAlphabet(e.target.value));
		setOrder(e.target.value);
	};

	function handleSortByAttack(e) {
		dispatch(sortByAttack(e.target.value));
		setOrder(e.target.value);
	};

	return(
		<div className="containerHome">
		<NavBarSearch setCurrentPage={setCurrentPage}/>
		<FilterByOrigin handleFilterByOrigin={handleFilterByOrigin} getAll={getAll}/>
		<FilterByType handleFilterByType={handleFilterByType} />
		<SortBy handleSortByAlphabet={handleSortByAlphabet} handleSortByAttack={handleSortByAttack}/>
		<Paginado
		pokemonsPerPage={pokemonsPerPage}
		allPokemons={allPokemons.length}
		paginado={paginado}/>
		<div className="cardsHomeDiv" >
		{
		(currentPokemons.length)? (
						currentPokemons?.map(pokemon=>{
							return(
								
								<Link to={`/home/${pokemon.ID}`} id="linkDetail" key={pokemon?.ID}>
								<PokemonCard name={pokemon.name} image={pokemon.image} types={pokemon.types} key={pokemon.ID} className="pokeCard"/>
								</Link>
								
								)
							})
						) :
						(
						  <div className="loadingDiv" >
						  <img className="loadingImg" src="https://c.tenor.com/BINsHS7Uo-0AAAAi/temple-loader.gif" alt="Loading" />
						  </div>
						)
		}
		</div>
		<Paginado
		pokemonsPerPage={pokemonsPerPage}
		allPokemons={allPokemons.length}
		paginado={paginado}/>
		</div>
		)
}

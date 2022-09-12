import React from 'react';
import {useState, useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {Link} from 'react-router-dom';
import './HomePage.css';
import NavBar from '../NavBar/NavBar.js';
import PokemonCard from '../PokemonCard/PokemonCard';
import Paginado from '../Paginado/Paginado';
import FilterByType from '../FilterByType/FilterByType';
import FilterByOrigin from '../FilterByOrigin/FilterByOrigin';
import SortBy from '../SortBy/SortBy';
import GetPokemon from '../Search/Search';
import {getAllPokemons, filterByType, filterByOrigin, sortByAlphabet, sortByAttack} from '../../actions';


export default function HomePage() {
	const dispatch = useDispatch();

useEffect(()=>{
		dispatch(getAllPokemons())
	},[]);

	const allPokemons = useSelector(state=> state.pokemons);
	const [order, setOrder] = useState('');
	const [currentPage, setCurrentPage] = useState(1);
	const [pokemonsPerPage, setPokemonsPerPage] = useState(12);
	const lastPokemon = currentPage * pokemonsPerPage;
	const firstPokemon = lastPokemon - pokemonsPerPage;
	const currentPokemons = allPokemons.slice(firstPokemon, lastPokemon);

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
		<NavBar/>
		<GetPokemon setCurrentPage={setCurrentPage}/>
		<h1>Aquí va la HomePage</h1>
		<FilterByOrigin handleFilterByOrigin={handleFilterByOrigin} getAll={getAll}/>
		<FilterByType handleFilterByType={handleFilterByType} />
		<SortBy handleSortByAlphabet={handleSortByAlphabet} handleSortByAttack={handleSortByAttack}/>
		<Paginado
		pokemonsPerPage={pokemonsPerPage}
		allPokemons={allPokemons.length}
		paginado={paginado}/>
		{
		(allPokemons.length)? (
						currentPokemons.map(pokemon=>{
							return(
								<>
								<Link to={`/home/${pokemon.ID}`}>
								<PokemonCard name={pokemon.name} image={pokemon.image} types={pokemon.types} key={pokemon.ID}/>
								</Link>
								</>
								)
							})) :
						(<>
						  <div className="loadingDiv" >
						  <img className="loadingImg" src="https://c.tenor.com/BINsHS7Uo-0AAAAi/temple-loader.gif" alt="Loading" />
						  </div>
						</>)
		}
		
		<Paginado
		pokemonsPerPage={pokemonsPerPage}
		allPokemons={allPokemons.length}
		paginado={paginado}/>
		</div>
		)
}

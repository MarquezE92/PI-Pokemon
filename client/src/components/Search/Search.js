import React from 'react';
import './Search.css';
import {useState} from 'react';
import {useDispatch} from 'react-redux';
import {getPokemon} from '../../actions';
import logo from '../../images/lupa.png'

export default function GetPokemon ({setCurrentPage}) {
	
	const dispatch= useDispatch();
	const [pokemon, setPokemon]= useState('');

	function handleSearchInput(e) {
		setPokemon(e.target.value)
	};

	function handleSearchSubmit(e) {
		e.preventDefault();
		if(pokemon) {
				dispatch(getPokemon(pokemon));
				setCurrentPage(1);
				setPokemon('')}
	};

	function handleKeyDown(e) {
		if(e.key === 'Enter') {
			if(pokemon) {
				dispatch(getPokemon(pokemon));
				setCurrentPage(1);
				setPokemon('')}
		}
	}

	return(
		<div id="searchContainer">
		  <input
		  type="text"
		  placeholder="Search a Pokemon by name"
		  value={pokemon}
		  onChange={handleSearchInput}
		  onKeyDown={handleKeyDown}
		  id="searchInput"
		  />
		  <button type="submit" onClick={handleSearchSubmit} id="searchButton">
		  <img src={logo} alt="search" id="searchLogo"/>
		  </button>
		</div>
		)
}
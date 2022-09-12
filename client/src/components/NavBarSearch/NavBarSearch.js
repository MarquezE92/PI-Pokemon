import React from 'react';
import { NavLink } from 'react-router-dom';
import GetPokemon from '../Search/Search';
import './NavBarSearch.css';

export default function NavBarSearch({setCurrentPage}) {
	return(
		<div className="navBarContainer">
				<img src="https://www.freepnglogos.com/uploads/pok-mon-go-logo-png-30.png" alt="pokemon" id="pokeLogo"/>
				<NavLink to="/home" className="navLink">Home</NavLink>
				<NavLink to="/create" className="navLink">Create Pokemon</NavLink>
				<GetPokemon setCurrentPage={setCurrentPage}/>
		</div>
		)
}
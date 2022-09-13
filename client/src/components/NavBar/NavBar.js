import React from 'react';
import { NavLink } from 'react-router-dom';

export default function NavBar() {
	return(
		<>
		<div className="navBarContainer">
			<img src="https://www.freepnglogos.com/uploads/pok-mon-go-logo-png-30.png" alt="pokemon" id="pokeLogo"/>
			<NavLink to="/home" className="navLink">Home</NavLink>
			<NavLink to="/create" className="navLink">Create Pokemon</NavLink>
			<div id="space"></div>
		</div>
		</>
		)
}
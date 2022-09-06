import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import './LandingPage.css';

export default function LandingPage(props) {
return(
	<>
	  
		<div id="pop1">
			<p>{'You can see all first 40, first generation Pokemons!'}</p>
		</div>
		<div id="pop2">
			<p>{'You can search through those Pokemons by name'}</p>
		</div>
		<div id="pop3">
			<p>{'You can order them by name or attack'}</p>
		</div>
		<div id="pop4">
			<p>{'You can filter them by type'}</p>
		</div>
		<div id="pop5">
			<p>{'And you can even create your own Pokemon!!'}</p>
		</div>
		<Link to="/home" id="button">
			<button>Start</button>
		</Link>
	 
	</>
	)
}
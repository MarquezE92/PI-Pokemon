import React from 'react';
//import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import './LandingPage.css';


export default function LandingPage(props) {

return(
	
	  <div className="containerLanding"> 
		<div id="pop1">
			<p>{'Wanna remember some of the first generation pokemons?'}</p>
		</div>
		<div id="pop2">
			<p>{`You'll be able to search them by name`}</p>
		</div>
		<div id="pop3">
			<p>{'Sort them by attack or alphabetically'}</p>
		</div>
		<div id="pop4">
			<p>{'Filter them by type'}</p>
		</div>
		<div id="pop5">
			<p>{'You can even create your own Pokemon!!'}</p>
		</div>
		<Link to="/home" id="button">
			<button id="start">Start</button>
		</Link>
	  </div>
	
	)
}
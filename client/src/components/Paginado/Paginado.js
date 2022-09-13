import React from 'react';
import './Paginado.css';

export default function Paginado({pokemonsPerPage, allPokemons, paginado}){
	const pageNumbers= [];

	for(let i= 0; i<Math.ceil(allPokemons/pokemonsPerPage); i++) {
		pageNumbers.push(i+1)
	};

	return(
	 <nav id="navPaginado">
	   {
	    pageNumbers?.map(number=>(
	    	<button onClick={()=>paginado(number)} key={number} className="numeroPag">{number}</button>
	    	))
	    }
	</nav>
		)
}
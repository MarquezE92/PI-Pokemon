import React from 'react';
import './FilterByType.css';

export default function FilterByType({handleFilterByType}) {
	const types = ['normal', 'fighting', 'flying', 'poison', 'ground', 'rock', 'bug', 'ghost', 'steel', 'fire', 'water', 'grass', 'electric', 'psychic', 'ice', 'dragon', 'dark', 'fairy', 'unknown', 'shadow']

	return(
		<>
		<br/>
		<div id="typeContainer">
		{
		 types.map((type)=>{
			return(
					<button key={types.indexOf(type)} onClick={handleFilterByType} value={type} className={type}>{type}</button>
  				  )
			})
		}
		</div>
		</>
		)
};
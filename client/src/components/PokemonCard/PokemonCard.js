import React from 'react';
import './PokemonCard.css';

export default function PokemonCard({name, image, types}) {
	let cap = name[0].toUpperCase();
	let nameCap = name.split('');
	nameCap.splice(0,1,cap).join('');
	return(
		<div id="pokemonCardContainer">
			<h3 id="pokeName">{nameCap}</h3>
			<img src={image} alt="Pokemon not found" id="poke3D"/>
			<div id="typesContainer">
			{types?.map(type=><h4 key={types.indexOf(type)} id={type.name}>{type.name}</h4>)}
			</div>
		</div>
		)
}
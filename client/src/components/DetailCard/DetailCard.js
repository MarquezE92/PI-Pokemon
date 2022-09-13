import React from 'react';
import './DetailCard.css';

export default function DetailCard({name, image, types, ID, hp, attack, defense, speed, height, weight}) {
	console.log(types)
	return(
	  <div id="cardContainerD">

	  	<h3 id="number">{`n° ${ID}`}</h3>
	  <div id="detailData">
	   <div id="detailDataFirst">
	  	<h1 id="nameP">{name}</h1>
	  	<img src={image} alt="Pokemon not found" id="gifDetail"/>
	  	<div id="divTypesD">
	  	{types?.map(type=><button key={types.indexOf(type)} className={type.name} >{type.name}</button>)}
	  	</div>
	  </div>
	  <div id="detailDataSecond">
	  	<h2>{`HP: ${hp}`}</h2>
	  	<h2>{`ATTACK: ${attack}`}</h2>
	  	<h2>{`DEFENSE: ${defense}`}</h2>
	  	<h2>{`SPEED: ${speed}`}</h2>
	  	<h2>{`HEIGHT: ${height}`}</h2>
	  	<h2>{`WEIGHT: ${weight}`}</h2>
	  	</div>
	   </div>
	  </div>
	)
};
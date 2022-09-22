import React from 'react';
import './DetailCard.css';
import {useDispatch} from 'react-redux';
import {useNavigate} from 'react-router-dom';
import {deletePokemon} from '../../actions';

export default function DetailCard({name, image, types, ID, hp, attack, defense, speed, height, weight}) {
	
	const dispatch = useDispatch();
	const navigate = useNavigate();

	function handleDeleteBtn(e) {
		console.log('entré al handle')
		dispatch(deletePokemon(e.target.value));
		navigate('/home', {replace:true});
	};

	return(

	  <div id="cardContainerD">
	  	<div id="topDivDetail">

	  	{
	  		(ID>40)?
			(<button id="deleteButton" value={ID} onClick={handleDeleteBtn}>x</button>):
			null
		}
		<h3 id="number">{`n° ${ID}`}</h3>
	  	</div>
	  <div id="detailData">
	   <div id="detailDataFirst">
	  	<h1 id="nameP">{name}</h1>
	  	<div id="divGif">
	  	<img src={image} alt="Pokemon not found" id="gifDetail"/>
	  	</div>
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
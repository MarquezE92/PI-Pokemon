import React from 'react';
import { useState, useEffect } from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {useNavigate} from 'react-router-dom';
import './CreatePokemon.css';
import NavBar from '../NavBar/NavBar.js';
import {getTypes, createPokemon} from '../../actions';
import validate from './Validate';


export default function CreatePokemon() {

	const dispatch = useDispatch();
	const navigate = useNavigate();

	useEffect(()=>{
		dispatch(getTypes())
	},[]);

	const types = useSelector(state=> state.types);
	const [input, setInput] = useState({});
	const [error, setError] = useState({'name': '*'});
	
	const handleChange = (e)=>{
		if(e.target.name === 'name' || e.target.name === 'image') {
			setInput((prev)=>({
			...prev,
			[e.target.name]: e.target.value
		}))
		} else {
			setInput((prev)=>({
			...prev,
			[e.target.name]: parseInt(e.target.value)
		}))
		};
		setError(validate({...input, [e.target.name]: e.target.value}));
	};

	const handleCheck = (e)=> {
		if (e.target.checked && input.types){
			setInput((prev)=>({
			...prev,
			types:[...input.types, parseInt(e.target.value)]
		}));
			setError(validate({...input, types: [...input.types, parseInt(e.target.value)]}));
		} else if (e.target.checked){
			setInput((prev)=>({
			...prev,
			types: [parseInt(e.target.value)]
		}))
		} else {
			setInput((prev)=>({
				...prev,
				types: input.types.filter((type)=> type!== parseInt(e.target.value))
			}))
			setError(validate({...input, types: input.types.filter((type)=> type!== parseInt(e.target.value))}))
		}
		
	};

	async function handleSubmit(e){
		e.preventDefault();
		await dispatch(createPokemon(input));
		navigate('/success', {replace:true});
	}

	return (
		<>
		<div id="createPokemonContainer">
		<NavBar/>
		<div id="centerForm">
		<form onSubmit={handleSubmit} id="formContainer">
		<h1 id="formTitle">{"Gotta Create ’Em All!"}</h1>
		<label>Name</label> <h3>{error.name}</h3>
		<input type="text" id="inputName" name="name" className={error.name && "invalid"} value={input.name} maxlength="15" onChange={handleChange} placeholder="--letters only--" required />
		<label>HP</label> <h3>{error.hp}</h3>
		<input name="hp" id="inputHp" value={input.hp} type="number" min="15" max="150" onChange={handleChange} placeholder="--from 15 to 150--"/>
		<label>Attack</label><h3>{error.attack}</h3>
		<input type="number" id="inputAttack" name="attack" value={input.attack} min="10" max="150" onChange={handleChange} placeholder="--from 10 to 150--"/>
		<label>Defense</label><h3>{error.defense}</h3>
		<input type="number" id="inputDefense" name="defense" value={input.defense} min="15" max="150" onChange={handleChange} placeholder="--from 15 to 150--"/>
		<label>Speed</label><h3>{error.speed}</h3>
		<input type="number" id="inputSpeed" name="speed" value={input.speed} min="10" max="150" onChange={handleChange} placeholder="--from 10 to 150--"/>
		<label>Height</label><h3>{error.height}</h3>
		<input type="number" id="inputHeight" name="height" value={input.height} min="1" max="10" onChange={handleChange} placeholder="--from 1 to 10--"/>
		<label>Weight</label><h3>{error.weight}</h3>
		<input type="number" id="inputWeight" name="weight" value={input.weight} min="1" max="1500" onChange={handleChange} placeholder="--from 1 to 1500--"/>
		<label>Image</label><h3>{error.image}</h3>
		<input type="url" id="inputImage" name="image" value={input.image} onChange={handleChange} placeholder="--insert url--"/>
		<label>Type</label><h3>{error.types}</h3>
		<br/>
		{
		 types.map((type, indice)=>{
			return(
				<>
					<input type="checkbox" id={`type${indice + 1}`} name={type} value={indice+1} onChange={handleCheck} className="checkInput"/>
  					<label for={type} id={`label${type}`}>{type}</label>
  				</>
					)
			})
		}
		<div id="buttonSubmitFormContainer">
		{(Object.entries(error).length === 1 && !error.name) ?
		(<input className="submitButtonForm" type="submit" value="Submit new Pokemon" onClick={handleSubmit}/>) :
		(<div id="prevSubmit">{'You are close to creating your own pokemon!'}</div>)
		}
		</div>
		</form>
		</div>
		</div>
		</>
		)
}
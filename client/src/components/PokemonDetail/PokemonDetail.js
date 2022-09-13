import React from 'react';
import {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useParams} from 'react-router-dom';
import {getPokemonDetail} from '../../actions';
import './PokemonDetail.css';
import NavBar from '../NavBar/NavBar.js';
import DetailCard from '../DetailCard/DetailCard';

const PokemonDetail = (props)=> {

	const dispatch = useDispatch();
	const {pokemonId} = useParams();
	
	useEffect(()=>{
		dispatch(getPokemonDetail(pokemonId))
	},[]);

	const pokemonDetail= useSelector(state=> state.pokemonDetail);
	console.log(pokemonDetail)

	return(
	 <div id="detailContainer">
	 	<NavBar/>
	 	{(pokemonDetail)?
		(
			
			<DetailCard
				name={pokemonDetail.name}
				image={pokemonDetail.image}
				types={pokemonDetail.types}
				ID={pokemonDetail.ID}
				hp={pokemonDetail.hp}
				attack={pokemonDetail.attack}
				defense={pokemonDetail.defense}
				speed={pokemonDetail.speed}
				height={pokemonDetail.height}
				weight={pokemonDetail.weight}
				/>
				
				) :
		(<>
			<div className="loadingDiv" >
			  <img src="https://c.tenor.com/BINsHS7Uo-0AAAAi/temple-loader.gif" alt="Loading" />
			</div>
		</>)
	 	}
	 
		
	 </div>
		)
}

export default PokemonDetail
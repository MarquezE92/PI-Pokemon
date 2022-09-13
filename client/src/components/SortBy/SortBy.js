import React from 'react';
import './SortBy.css';

export default function SortBy({handleSortByAlphabet, handleSortByAttack}){
	return(
		<>
		<br/>
		<div id="sortDiv">
		<button id="sortB">{'Sort by:'}</button>
		<div id="sortSelectContainer">
		<select onChange={handleSortByAlphabet} className="sortSelect" id="nameOp">
		<option>Name</option>
		<option value="A to Z">{'A to Z'}</option>
		<option value="Z to A">{'Z to A'}</option>
		</select>
		<select onChange={handleSortByAttack} className="sortSelect" id="attackOp">
		<option>Attack</option>
		<option value="Highest">{'Highest'}</option>
		<option value="Lowest">{'Lowest'}</option>
		</select>
		</div>
		</div>
		</>
		)

};
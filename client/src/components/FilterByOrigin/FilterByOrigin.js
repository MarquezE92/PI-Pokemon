import React from 'react';
import './FilterByOrigin.css';

export default function FilterByOrigin({handleFilterByOrigin, getAll}) {
	return(
		<>
		<div id="filterByOriginContainer">
		<button onClick={getAll} className="filterByOriginButton">All</button>
		<button value= "existing" onClick={handleFilterByOrigin} className="filterByOriginButton">Existing</button>
		<button value= "created" onClick={handleFilterByOrigin} className="filterByOriginButton">Created</button>
		</div>
		</>
		)
};
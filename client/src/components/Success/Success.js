import React from 'react';
import { Link } from 'react-router-dom';
import './Success.css';

export default function Success() {
	return(
		<div id="successPageContainer">
		 <div id="successMessageContainer">
		  <h1 id="successTitle">{`CONGRATS!!`}</h1>
		  <h1 id="successSubtitle">{`You have successfully created a new pokemon`}</h1>
		  
		  <div id="redirectButtonsContainer">
			<Link to="/home" className="removeUnderline">
				<h3 className="submitButtonForm" id="greatBtn">{'Great!'}</h3>
			</Link>
			<Link to="/create" className="removeUnderline">
				<h3 className="submitButtonForm" id="keepCreatingtBtn">{`It wasn't enough, I wanna keep creating!`}</h3>
			</Link>
		  </div>
		 </div>
		</div>
		)
}

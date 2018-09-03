//Higher order componenet is the component that renders another component.
//Reuse code.
//Render hijacking.
//prop manipulation
//Abstract State
import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) => {
	return (
		<div>
			<h1>Info:</h1>
			<p>{props.info}</p>
		</div>
		)
	
}
var app_id   = document.getElementById("app");
ReactDOM.render(<Info info = "There are details" />, app_id);
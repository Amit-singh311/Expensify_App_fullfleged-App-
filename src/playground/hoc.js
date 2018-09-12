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
			<p>The Info Is:{props.info}</p>
		</div>
		)	
}

const withAdminWarning = (WrappedComponent) => {
	return (props) => (
		    <div>
		    	{ props.isAdmin && <p>This is the private info. Please don't share.</p>}
		    	<WrappedComponent {...props}/>
		    </div>
		);

};
const AdminInfo = withAdminWarning(Info);
const requireAuthentication = (WrappedComponent) => {
	return (props) => (
		    <div>
		    {props.isAuthenticated ? <WrappedComponent {...props}/> : "Please login"}		    	
		    </div>
		   
		);
}
const AuthInfo = requireAuthentication(Info);
var app_id   = document.getElementById("app");
/*ReactDOM.render(<AdminInfo isAdmin={true} info = "There are details" />, app_id);*/
ReactDOM.render(<AuthInfo isAuthenticated={true} info = "There are details" />, app_id);
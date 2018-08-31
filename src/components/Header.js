import React from 'react';
import {NavLink} from 'react-router-dom';

const Header = () => (
		<div>
			<h2>Expensify</h2>
			<NavLink to="/" activeClassName="is-active" exact={true}> Home Page </NavLink>
			<NavLink to="/create" activeClassName="is-active">Add Expense Page</NavLink>
		    <NavLink to="/help" activeClassName="is-active">HelpPage</NavLink>
		</div>
	);
export default Header;
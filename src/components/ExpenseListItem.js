import React from 'react';
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';
import { removeExpense } from './../actions/expenses';

const ExpenseListItem = (props, {id, description, amount, createdAt}) => (
	    <div>
	        <Link to={`edit/${id}`}>
	    	<h1>{ description }</h1>
	    	</Link>
	    	<p>{amount}-{createdAt}</p>
	    	<button onClick={(e) => {
	    		props.dispatch(removeExpense({id}))
	    	}}>Remove</button>
	    </div>
	);
const mapStateToProps = (state) => {
	return {
		expenses:state.expenses
	};
};
export default connect(mapStateToProps)(ExpenseListItem);



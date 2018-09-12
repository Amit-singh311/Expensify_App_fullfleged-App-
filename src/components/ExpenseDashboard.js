import React from 'react';
import ExpenseList from './ExpenseList';
import ExpenseListFilters from './ExpenseListFilters';

const ExpenseDasboard = () => (
		<div>
		    <ExpenseListFilters />
			<ExpenseList />
		</div>
	);
export default ExpenseDasboard;	
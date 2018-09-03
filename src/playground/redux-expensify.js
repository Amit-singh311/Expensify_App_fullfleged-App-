import { createStore, combineReducers } from 'redux';
import uuid from 'uuid';

//Add-Expense Generator
const addExpense = ( { description = '', note = '', amount = 0, createdAt = 0 } = {}) => ({
	type: 'ADD_EXPENSE',
	expense: {
		id: uuid(),
		description,
		note,
		amount,
		createdAt

	}
});
//Remove-Expense Generator
const removeExpense = ({id} = {}) => ({
	type: 'REMOVE_EXPENSE',
	id

});
////////////////////////////////////////////////////////////
///expense reducer.
///////////////////////////////////////////////////////////
const defaultReducerState = [];
const expenseReducer = (state = defaultReducerState, action) => {
	switch (action.type) {
		case 'ADD_EXPENSE':
		   return state.concat(action.expense);
		case 'REMOVE_EXPENSE':
		   return state.filter(({id}) => {
		      return id !== action.id;            
		   });   
		default:
		   return state;
	}
}
////////////////////////////////////////////////////////////////////////
///filter reducer.
///////////////////////////////////////////////////////////////////////
const defaultfilterReducerState = {
	text : '',
	sortBy: 'date',
	startDate: undefined,
	endDate: undefined

}
const filterReducer = (state = defaultfilterReducerState, action) => {
    switch (action.type) {
    	default:
    	   return state;
    }
}
/////////////////////////////////////////////////////////////////////
///creating the store for multiple reducers
//////////////////////////////////////////////////////////////////////
const store = createStore(
		combineReducers({
			expenses: expenseReducer,
			filters : filterReducer
		})
	);

store.subscribe(() => {
	console.log(store.getState());
});
const entryOne = store.dispatch(addExpense({ description: 'rent', amount:100}));
const entryTwo = store.dispatch(addExpense({ description: 'coffee', amount:300}));

const removeOne = store.dispatch(removeExpense({ id:entryOne.expense.id}));

const demoState = {
	expenses:[{
		id: 'ammy',
		description: 'january rent',
		note: 'This is the amount of january rent',
		amount:5000,
		createdAt:0
	}],
	filters:{
		text: 'rent',
		sortBy: 'Amount',
		startDate: undefined,
		endDate: undefined
	}
}
const check = {
	name: 'Amit',
	age: 23
}

console.log({
	...check,
	location: 'India',
	age:22
});
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

//Edit-Expense Generator
const editExpense = (id, updates) => ({
	type: 'EDIT_EXPENSE',
	id,
	updates
});

//Filter By Text Generator
const setTextFilter = (text = '') => ({
	type: 'SET_TEXT_FILTER',
	text

});

//Filter By Amount Generator
const sortByAmount = (sortBy = '') => ({
	type: 'SORT_BY_AMOUNT',
	sortBy
});

//Filter By Date Generator
const sortByDate = (sortBy = '') => ({
	type: 'SORT_BY_DATE',
	sortBy
});

//start date generator
const setStartDate = (startDate = undefined) => ({
	type: 'SET_START_DATE',
	startDate
});

const setEndDate = (endDate = undefined) => ({
	type: 'SET_END_DATE',
	endDate
})
////////////////////////////////////////////////////////////
///expense reducer.
///////////////////////////////////////////////////////////
const defaultReducerState = [];
const expenseReducer = (state = defaultReducerState, action) => {
	switch (action.type) {
		case 'ADD_EXPENSE':
		   return [
		       ...state,
		       action.expense
		   ];
		  
		case 'REMOVE_EXPENSE':
		   return state.filter(({id}) => {
		      return id !== action.id;            
		   }); 
		case 'EDIT_EXPENSE':
		   return state.map((expense) => {
		   	    if (expense.id === action.id) {
		   	    	return {
		   	    		...expense,
		   	    		...action.updates
		   	    	};
		   	    } else {
		   	    	return expense;
		   	    }
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
    	case 'SET_TEXT_FILTER':
    	   return {
    	   	   ...state,
    	   	   text:action.text
    	   }
    	case 'SORT_BY_AMOUNT':
    	   return {
    	   	   ...state,
    	   	   sortBy:action.sortBy
    	   }
    	case 'SORT_BY_DATE':
    	   return {
    	   	   ...state,
    	   	   sortBy:action.sortBy
    	   }
    	case 'SET_START_DATE':
    	    return {
    	    	...state,
    	    	startDate:action.startDate
    	    }         
    	default:
    	case 'SET_END_DATE':
    	    return {
    	    	 ...state,
    	    	 endDate:action.endDate
    	    }
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
/*const entryOne = store.dispatch(addExpense({ description: 'rent', amount:100}));
const entryTwo = store.dispatch(addExpense({ description: 'coffee', amount:300}));

const removeOne = store.dispatch(removeExpense({ id:entryOne.expense.id}));
store.dispatch(editExpense(entryTwo.expense.id, {amount:500}));
store.dispatch(setTextFilter('rent'));
store.dispatch(setTextFilter());
store.dispatch(sortByAmount('Amount'));
store.dispatch(sortByDate('Date'));*/
store.dispatch(setStartDate('125'));
store.dispatch(setEndDate('12350'));

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

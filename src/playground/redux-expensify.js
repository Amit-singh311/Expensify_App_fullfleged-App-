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
const sortByAmount = () => ({
	type: 'SORT_BY_AMOUNT',
	
});

//Filter By Date Generator
const sortByDate = () => ({
	type: 'SORT_BY_DATE',
	
});

//start date generator
const setStartDate = (startDate = undefined) => ({
	type: 'SET_START_DATE',
	startDate
});

const setEndDate = (endDate = undefined) => ({
	type: 'SET_END_DATE',
	endDate
});
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
    	   	   sortBy:'amount'
    	   }
    	case 'SORT_BY_DATE':
    	   return {
    	   	   ...state,
    	   	   sortBy:'date'
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

//Get Visible expenses
const getVisibleExpenses = (expenses, {text, sortBy, startDate, endDate}) => {
	return expenses.filter((expense) => {
		const startDateMatch = typeof startdate !== 'number' || expense.createdAt >=startDate;
		const endDateMatch   = typeof enddate   !== 'number' || expense.createdAt <=endDate;
		const textMatch      = expense.description.toLowerCase().includes(text.toLowerCase());

		return startDateMatch && endDateMatch && textMatch;

	}).sort((a, b) => {
		if (sortBy === 'date') {
			return a.createdAt < b.createdAt ? 1 : -1;
		} else if (sortBy === 'amount') {
			return a.amount < b.amount ? 1 : -1;
		}

	});
};
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
	const state = store.getState();
	const VisibleExpenses = getVisibleExpenses(state.expenses, state.filters);
	console.log(VisibleExpenses);
});
const entryOne = store.dispatch(addExpense({ description: 'rent', amount:400, createdAt:-21000}));
const entryTwo = store.dispatch(addExpense({ description: 'coffee', amount:300, createdAt:-1000}));

/*const removeOne = store.dispatch(removeExpense({ id:entryOne.expense.id}));
store.dispatch(editExpense(entryTwo.expense.id, {amount:500}));*/
/*store.dispatch(setTextFilter('ffe'));*/
/*store.dispatch(setTextFilter());*/
store.dispatch(sortByAmount());
/*store.dispatch(sortByDate('Date'));*/
/*store.dispatch(setStartDate('125'));
store.dispatch(setEndDate('200'));*/

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

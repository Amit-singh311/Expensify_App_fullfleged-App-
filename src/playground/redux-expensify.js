import { createStore, combineReducers } from 'redux';
////////////////////////////////////////////////////////////
///expense reducer.
///////////////////////////////////////////////////////////
const defaultReducerState = [];
const expenseReducer = (state = defaultReducerState, action) => {
	switch (action.type) {
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
console.log(store.getState());
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
import React from 'react'
import ReactDOM from 'react-dom';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import { addExpense } from './actions/expenses';
import { setTextFilter } from './actions/filters';
import { Provider } from 'react-redux';
import getVisibleExpenses from './selectors/expenses';
import './styles/styles.css';

const store = configureStore();
console.log(store.getState());
store.subscribe(() => {
	const state = store.getState();
	const VisibleExpenses = getVisibleExpenses(state.expenses, state.filters);
	console.log(VisibleExpenses);
});
store.dispatch(addExpense({ description: 'waterbill', amount:400, createdAt:21000}));
store.dispatch(addExpense({ description: 'foodbill', amount:500, createdAt:21400}));
store.dispatch(addExpense({ description: 'rent', amount:600, createdAt:21500}));

const jsx = (
	    <Provider store = {store}>
	    	<AppRouter />
	    </Provider>
	    
	);
var app_id   = document.getElementById("app");
ReactDOM.render(jsx, app_id);
import { createStore, CombineReducers } from 'redux';

const demoState: {
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
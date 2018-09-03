import { createStore } from 'redux';

///////////////////////////////////////////////////////////////////////
///Action Generators
///I will have to destructure it to make it concise.
///////////////////////////////////////////////////////////////////////
const incrementCount = ( {incrementBy = 1} = {} ) => {
	return {
		type: 'INCREMENT',
		incrementBy 
	}
}

const decrementCount = ( {decrementBy = 1} = {}) => ({
	type: 'DECREMENT',
	decrementBy
})

const resetCount = () => ({
	type: 'RESET'
})

const setCount = ({ count = 101} = {}) => ({
	type: 'SET',
	count
})
/*
* createStore function needs an argument to execute similar to this.setState.
 */
//Reducers are pure functions.
const countReducer = (state = { count: 0 }, action) => {
	
	switch (action.type) {
		case 'INCREMENT':
		 /* const incrementBy = typeof action.incrementBy === 'number' ? action.incrementBy : 1;*/
		    return {
		    	count : state.count + action.incrementBy
		    };
		case 'DECREMENT':
		  /* const decrementBy = typeof action.decrementBy === 'number' ? action.decrementBy : 1;*/
		    return {
		    	count : state.count - action.decrementBy
		    };
		case 'SET':
		    return {
		    	count : action.count
		    };    
		case 'RESET':
		    return {
		    	count: 0
		    };        
		default:
		    return state;    
	}	
}
const store = createStore(countReducer);

const unsubscribe = store.subscribe(() => {
	console.log(store.getState());
});


store.dispatch(incrementCount());

store.dispatch(incrementCount({incrementBy : 5}));

store.dispatch(resetCount());

store.dispatch( decrementCount({ decrementBy : 10 }) );

store.dispatch( decrementCount());

store.dispatch( setCount({ count:25}))


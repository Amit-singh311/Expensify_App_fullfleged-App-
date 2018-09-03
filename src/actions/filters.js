//Filter By Text Generator
export const setTextFilter = (text = '') => ({
	type: 'SET_TEXT_FILTER',
	text

});

//Filter By Amount Generator
export const sortByAmount = () => ({
	type: 'SORT_BY_AMOUNT',
	
});

//Filter By Date Generator
export const sortByDate = () => ({
	type: 'SORT_BY_DATE',
	
});

//start date generator
export const setStartDate = (startDate = undefined) => ({
	type: 'SET_START_DATE',
	startDate
});

export const setEndDate = (endDate = undefined) => ({
	type: 'SET_END_DATE',
	endDate
});
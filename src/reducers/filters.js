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
export default filterReducer;
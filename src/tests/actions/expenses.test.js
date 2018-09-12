import { addExpense, removeExpense, editExpense} from './../../actions/expenses';

test('should generate remove object', () => {
	const remove_data = {
		id: '123abc'
	};
	const result = removeExpense(remove_data);
	expect(result).toEqual({
		type: 'REMOVE_EXPENSE',
		...remove_data
	});
});
test('should edit the object', () => {
	const action = editExpense('1234a',{ note: 'first edit'});
	expect(action).toEqual({
		type: 'EDIT_EXPENSE',
		id: '1234a',
		updates: {note:'first edit'}
	});
});

test('should add the data to add expense', () => {
	const expense_date = {
		description: 'rent',
		note: 'last month rent',
		amount: 12345,
		createdAt: 2356,
	};
	const action = addExpense(expense_date);
	expect(action).toEqual({
		type: 'ADD_EXPENSE',
		expense: {
		...expense_date,
		id: expect.any(String)
	}
	});
});

test('should add the default data to the add expense', () => {
    const action = addExpense();
	expect(action).toEqual({
		type: 'ADD_EXPENSE',
		expense: {
			id: expect.any(String),
		    description: '',
		    note: '',
		    amount: 0,
		    createdAt: 0,			
		}
	});
});
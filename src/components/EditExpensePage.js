import React from 'react';

const EditExpensePage = (props) => {
	console.log(props);
	return (
		    
			<div>
				<p> This is the edit Expense Page of id: {props.match.params.id} </p>
			</div>
		);
}
export default EditExpensePage;
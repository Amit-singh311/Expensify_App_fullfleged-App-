import React from 'react';
import { BrowserRouter, Route, Switch, Link, NavLink} from 'react-router-dom';
import Header from './../components/Header';
import ExpenseDasboard from './../components/ExpenseDashboard';
import AddExpensePage from './../components/AddExpensePage';
import EditExpensepage from './../components/EditExpensepage';
import HelpPage from './../components/HelpPage';
import PageNotFound from './../components/PageNotFound';


const AppRouter = () => (
	    <BrowserRouter>
	        <div>
	        	<Header />
	        	<Switch>
	        	    <Route path="/" component={ExpenseDasboard} exact={true} />
	        	    <Route path='/create' component={AddExpensePage} />
	        	    <Route path="/edit/:id" component={EditExpensepage} />
	        	    <Route path="/help" component={HelpPage} />
	        	    <Route component={PageNotFound}/> 
	        	</Switch>    
	        </div>   

	    </BrowserRouter>
	);
export default AppRouter;

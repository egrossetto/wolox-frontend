import React from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './components/login/login';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import PrivateRoute from './privateRoute';
import List from './components/list/list';
import Landing from './components/landing/landing';

function App() {
	return (
		<Router>
			<div>
				<Route exact path='/login' component={Login} />
        <PrivateRoute exact path='/list' component={List} />
        <PrivateRoute exact path='/' component={Landing} />
			</div>
		</Router>
	);
}

export default App;

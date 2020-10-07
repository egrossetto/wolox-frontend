import React, { useMemo, useState } from 'react';
import './App.css';
import Login from './components/login/login';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import PrivateRoute from './privateRoute';
import List from './components/list/index';
import Landing from './components/landing/index';
import { UserContext } from './context/userContext';

function App() {
	const [user, setUser] = useState('');
	const providerValue = useMemo(() => ({ user, setUser }), [user, setUser]);

	return (
		<Router>
			<UserContext.Provider value={providerValue}>
				<div>
					<Route exact path="/login" component={Login} />
					<PrivateRoute exact path="/list" component={List} />
					<PrivateRoute exact path="/" component={Landing} />
				</div>
			</UserContext.Provider>
		</Router>
	);
}

export default App;

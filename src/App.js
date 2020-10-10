import React, { Suspense, useMemo, useState } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import PrivateRoute from './privateRoute';
import { UserContext } from './context/userContext';
import Spinner from './components/spinner';
import './App.css';

const Login = React.lazy(() => import('./components/login/index'));
const List = React.lazy(() => import('./components/list/index'));
const Landing = React.lazy(() => import('./components/landing/index'));

function App() {
	const [user, setUser] = useState('');
	const providerValue = useMemo(() => ({ user, setUser }), [user, setUser]);

	return (
		<Suspense fallback={<Spinner />}>
			<Router>
				<UserContext.Provider value={providerValue}>
					<div>
						<Route exact path="/login" component={Login} />
						<PrivateRoute exact path="/list" component={List} />
						<PrivateRoute exact path="/" component={Landing} />
					</div>
				</UserContext.Provider>
			</Router>
		</Suspense>
	);
}

export default App;
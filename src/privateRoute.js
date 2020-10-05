import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { UserContext } from './context/userContext';

const PrivateRoute = ({ component: Component, ...rest }) => {
	const {user} = useContext(UserContext);
	let isLoggedIn = localStorage.getItem('token') || user;

	return (
		<Route
			exact
			{...rest}
			render={(props) =>
				isLoggedIn ? <Component {...props} /> : <Redirect to="/login" />
			}
		/>
	);
};
export default PrivateRoute;

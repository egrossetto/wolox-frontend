import React, { useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import { UserContext } from '../../context/userContext';
import LoginService from '../../services/loginService';
import './styles.css';

export default function Login() {
	
	let history = useHistory();
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [rememberMe, setRememberMe] = useState(false);
	const [loginError, setLoginError] = useState('');
	const { setUser } = useContext(UserContext);
	const loginService = new LoginService();

	useEffect(() => {
		if(localStorage.getItem('token')){
			redirect();
		}
		// eslint-disable-next-line
	}, [])

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			let response = await loginService.login(email, password);
			setUser({ email: email });
			if (rememberMe) {
				localStorage.setItem('token', response.token);
			}
			redirect();
		} catch (error) {
			setLoginError(error);
		}
	};

	const redirect = () => {
		history.push('/')
	}

	const disabled = email === '' && password === '';

	return (
		<div className="container">
			<main className="main">
				<h1 className="title">Bienvenidos!</h1>
				<div className="grid">
					<form onSubmit={handleSubmit}>
						<label htmlFor="email" className="label">
							Email
							<input
								className="textfield"
								name="email"
								type="email"
								value={email}
								onChange={(e) => {
									setEmail(e.target.value);
								}}
								maxLength="50"
							/>
						</label>
						<label htmlFor="password" className="label">
							Password
							<input
								className="textfield"
								name="password"
								type="password"
								value={password}
								onChange={(e) => {
									setPassword(e.target.value);
								}}
								maxLength="25"
							/>
						</label>
						<label htmlFor="remember" className="label">
							<input
								type="checkbox"
								name="remember"
								checked={rememberMe}
								onChange={() => {
									setRememberMe(!rememberMe);
								}}
							/>
							Recordarme
						</label>
						<input
							type="submit"
							value="Enviar"
							className="button"
							disabled={disabled ? disabled: ''}
						></input>
						{loginError && (
							<p style={{ color: 'red' }}>{loginError}</p>
						)}
					</form>
				</div>
			</main>
		</div>
	);
}

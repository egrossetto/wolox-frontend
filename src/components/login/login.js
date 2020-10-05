import React, { useState } from 'react';
import './styles.css';

export default function Login() {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [rememberMe, setRememberMe] = useState(false);
	const [loginError, setLoginError] = useState('');

	const handleSubmit = (e) => {
		e.preventDefault();
		fetch(
			'http://private-8e8921-woloxfrontendinverview.apiary-mock.com/login',
			{
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({
					email,
					password,
				}),
			}
		)
			.then((r) => {
				return r.json();
			})
			.then((data) => {
                localStorage.clear();
				if (rememberMe) {
					localStorage.setItem('email', email);
					localStorage.setItem('token', data.token);
				}
			});
	};

	return (
		<div className="container">
			<main className="main">
				<h1 className="title"> Bienvenidos!</h1>

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

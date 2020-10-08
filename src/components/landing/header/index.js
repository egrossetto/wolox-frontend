import React from 'react';
import './styles.css';
import Logo from '../assets/logo_full_color.svg';
import { useHistory } from 'react-router';

export default function Header() {
	let history = useHistory();

	const redirect = () => {
		history.push('/login');
	};

	return (
		<div className="header">
			<span>
				<img src={Logo} alt="Wolox" className="logo" />
			</span>
			<span className="header_buttons">
				<a className="header_titles" href="#welcome">
					Inicio
				</a>
				<a className="header_titles" href="#techs">
					Tecnologias
				</a>
				<a className="header_titles" href="#benefits">
					Beneficios
				</a>
				<a className="header_titles" href="#requirements">
					Requerimientos
				</a>
				{!localStorage.getItem('token') ? (
					<button className="header_button" onClick={redirect}>
						Login
					</button>
				) : null}
			</span>
		</div>
	);
}

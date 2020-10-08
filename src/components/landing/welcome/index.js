import React from 'react';
import './styles.css';
import WelcomeImg from '../assets/Img Hero/Ic_ilustra_Hero.png';

export default function Welcome() {
	return (
		<div className="welcome" id="welcome">
			<div className="title_container">
				<p className="big_text">
					Bienvenido a tu
					<br /> <b>Entrevista Técnica</b> en <br />
					<span className="green_text">Wolox</span>
				</p>
			</div>
			<div className="image_container">
				<img src={WelcomeImg} alt="Welcome" className="welcome_img" />
			</div>
		</div>
	);
}

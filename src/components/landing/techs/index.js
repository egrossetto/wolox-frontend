import React from 'react';
import './styles.css';
import TechImg from '../assets/Ic_Tecnologys.svg';

export default function Techs() {
	return (
		<div className="techs" id="techs">
			<div className="title_techs_container">
				<p className="medium_text">
					Estamos buscando
					<br /> para incorporar gente
					<br /> increíble para estas <br />
					tecnologías:
				</p>
			</div>
			<div className="image_techs_container">
				<img src={TechImg} alt="Techs" className="tech_img" />
			</div>
		</div>
	);
}

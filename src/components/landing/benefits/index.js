import React from 'react';
import './styles.css';
import Hour from '../assets/Ic_Hour.svg';
import HomeOffice from '../assets/Ic_HomeOffice.svg';
import Workshops from '../assets/Ic_Workshops.svg';
import Snacks from '../assets/Ic_DrinkSnacks.svg';
import Laptop from '../assets/Ic_laptop.svg';
import Brain from '../assets/Ic_brain.svg';

export default function Benefits() {
	return (
		<div className="benefits" id="benefits">
			<span className="benefit_title_container">
				<p className="benefit_title">
					Entre los beneficios que ofrecemos se encuentran{' '}
					<span className="blue_text">;)</span>
				</p>
			</span>
			<div className="benefit_list">
				<span className="span_benefit">
					<img src={Hour} alt="Hour" />
					<p>Flexibilidad Horaria</p>
				</span>
				<span className="span_benefit">
					<img src={HomeOffice} alt="Home Office" />
					<p>Home Office</p>
				</span>
				<span className="span_benefit">
					<img src={Workshops} alt="Workshops" />
					<p>
						Capacitaciones <br /> y workshops
					</p>
				</span>
				<span className="span_benefit">
					<img src={Snacks} alt="Snacks!" />
					<p>
						Snacks, frutas <br /> y bebidas gratis
					</p>
				</span>
				<span className="span_benefit">
					<img src={Laptop} alt="Laptop" />
					<p>
						Semana <br /> Remota
					</p>
				</span>
				<span className="span_benefit">
					<img src={Brain} alt="Brain" />
					<p>
						Trabajar <br /> en últimas <br />
						tecnologías
					</p>
				</span>
			</div>
		</div>
	);
}

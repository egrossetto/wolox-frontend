import React from 'react';
import './styles.css';
import BulletOne from '../assets/Ic_Bullet_1.svg';
import BulletTwo from '../assets/Ic_Bullet_2.svg';
import BulletThree from '../assets/Ic_Bullet_3.svg';

export default function Requirements() {
	return (
		<div className="requirements" id="requirements">
			<div className="requirement_title">
				<p className="title_reqs">Requerimientos</p>
			</div>
			<div className="requirement_list">
				<ul className="requirement_ul">
					<li className="requirement_li">
						<img src={BulletOne} alt="One" />
						<p className='text_li'>
							Estudiantes avanzados o recibidos de carreras del
							rubro <br /> informático, sistemas o electrónicos.
						</p>
					</li>
					<li className="requirement_li">
						<img src={BulletTwo} alt="Two" />
						<p className='text_li'>Inglés intermedio o avanzado.</p>
					</li>
					<li className="requirement_li">
						<img src={BulletThree} alt="Three" />
						<p className='text_li'>Conocimiento en metodologías ágiles (deseable)</p>
					</li>
				</ul>
			</div>
		</div>
	);
}

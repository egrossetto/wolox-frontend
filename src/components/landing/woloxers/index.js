import React from 'react';
import './styles.css';
import TwitterLogo from '../assets/twitter-logo.png';

export default function Woloxers() {
	const redirect = () => {
		window.open('https://twitter.com/Wolox');
	};

	return (
		<div className="woloxers">
			<div className="tweet">
				<div className="text_wrapper">
					<div className="align_text">
						<h1 className="green_big_text">350 +</h1>
						<h1 className="blue_big_text"> Woloxers</h1>
					</div>
					<div className="align_text">
						<img
							src={TwitterLogo}
							alt="Twitter"
							className="twitter_logo"
						/>
						<p className="white_text">@Wolox</p>
					</div>
					<button onClick={redirect} className="follow_button">
						Siguenos
					</button>
				</div>
			</div>
			<div className="text">
				<span className="align_text">
					<h1 className='big_text'>
						Trabajamos para
						<br /> <span className="blue_text">
							convertir
						</span>{' '}
						<span className="green_big_text">ideas</span> en
						<br /> productos.
					</h1>
				</span>
			</div>
		</div>
	);
}

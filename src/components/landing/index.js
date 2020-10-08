import React from 'react';
import Header from './header/index';
import Benefits from './benefits/index';
import Footer from './footer/index';
import Requirements from './requirements/index';
import Techs from './techs/index';
import Welcome from './welcome/index';
import Woloxers from './woloxers/index';
import './styles.css';

export default function Landing() {
	return (
		<div className="main_container">
			<div className="header_bkground">
				<Header />
				<Welcome />
			</div>
			<Techs />
			<Woloxers />
			<Benefits />
			<Requirements />
			<Footer />
		</div>
	);
}

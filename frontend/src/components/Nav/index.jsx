import React from 'react';
import s from './index.module.scss';
import logo from '../../UI/Logo/logo.png';
import Socials from '../../UI/Socials';

export default function Nav() {
	return (
		<nav className={s.nav}>
			<div className={['container', s.nav_block].join(' ')}>
				<div>
					<img src={logo} alt="logo" />
				</div>

				<div>
					<Socials placement="header" />
				</div>
			</div>
		</nav>
	);
}

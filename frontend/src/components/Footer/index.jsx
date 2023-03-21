import React from 'react';
import s from './index.module.scss';

export default function Footer() {
	return (
		<footer className={['container', s.footer].join(' ')}>
			<p>© Copyright 2023 / PreJob</p>
			<p>DINAMO</p>
		</footer>
	);
}

import React from 'react';
import HeaderForm from '../HeaderForm';
import s from './index.module.scss';

export default function Header() {
	return (
		<div className={s.header}>
			<h1>Explore any job in short videos</h1>

			<div className={s.feader_form}>
				<HeaderForm />
			</div>
		</div>
	);
}

import React, { useState, useMemo, useEffect } from 'react';
import { categories } from '../../data/categories';
import Input from '../../UI/Input';
import debouce from 'lodash.debounce';
import s from './index.module.scss';

export default function HeaderForm() {
	const [searchTerm, setSearchTerm] = useState('');

	let listToDisplay = categories;

	const handleChange = (el) => {
		setSearchTerm(el.target.value);
	};

	const renderVideoList = () => {
		return listToDisplay.map((category, i) => <p key={i}>{category}</p>);
	};

	if (searchTerm !== '') {
		listToDisplay = categories.filter((category) => {
			return category.includes(searchTerm);
		});
	}

	const debouncedResults = useMemo(() => {
		return debouce(handleChange, 200);
	}, []);

	useEffect(() => {
		return () => {
			debouncedResults.cancel();
		};
	});
	return (
		<form className={s.form}>
			<Input type="text" onChange={debouncedResults} />
			{renderVideoList()}
		</form>
	);
}

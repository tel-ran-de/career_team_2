import React from 'react';
import Header from './components/Header';
import Nav from './components/Nav';
import MainContent from './components/MainContent';
import AbountUs from './components/AbountUs';
import Footer from './components/Footer';
import { Context } from './context';
import { useState } from 'react';

export default function App() {
	const [videoSource, setSource] = useState('');
	const [modal, setModal] = useState(false);

	return (
		<>
			<Context.Provider value={{ videoSource, setSource, modal, setModal }}>
				<Nav />
				<Header />
				<MainContent />
				<AbountUs />
				<Footer />
			</Context.Provider>
		</>
	);
}

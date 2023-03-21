import React from 'react';
import Header from './components/Header';
import Nav from './components/Nav';
import MainContent from './components/MainContent/MainContent';
import AbountUs from './components/AbountUs';
import Footer from './components/Footer';

export default function App() {
	return (
		<div>
			<Nav />
			<Header />
			<MainContent />
			<AbountUs />
			<Footer />
		</div>
	);
}

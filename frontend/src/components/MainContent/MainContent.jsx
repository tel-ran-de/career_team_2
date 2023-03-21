import Modal from '../Modal/Modal';
import VideosContainer from '../VideosContainer/VideosContainer';
import { Context } from '../../context';
import { useState } from 'react';
import MainContentForm from '../MainContentForm';
import s from './index.module.scss';

export default function App() {
	const [videoSource, setSource] = useState('');
	const [modal, setModal] = useState(false);

	return (
		<div className={['container', s.main_content].join(' ')}>
			<div>
				<MainContentForm />
			</div>

			<div>
				<Context.Provider value={{ videoSource, setSource, modal, setModal }}>
					<Modal />
					<VideosContainer />
				</Context.Provider>
			</div>
		</div>
	);
}

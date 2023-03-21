import Modal from '../Modal/Modal';
import VideosContainer from '../VideosContainer';
import MainContentForm from '../MainContentForm';
import s from './index.module.scss';

export default function App() {
	return (
		<div className={['container', s.main_content].join(' ')}>
			<div>
				<MainContentForm />
			</div>

			<div>
				<Modal />
				<VideosContainer />
			</div>
		</div>
	);
}

import Modal from '../Modal';
import VideosContainer from '../VideosContainer';
import MainContentForm from '../MainContentForm';
import { VscRunAll } from 'react-icons/vsc';
import s from './index.module.scss';

export default function MainContent({ menuActive, setMenuActive }) {
	return (
		<div className={['container', s.main_content].join(' ')}>
			<div>
				<div className={[s.nav_menu, menuActive ? s.active : ''].join(' ')}>
					<MainContentForm />
				</div>

				<VscRunAll
					className={s.menu_icon}
					onClick={() => setMenuActive(menuActive ? false : true)}
				/>
			</div>

			<div>
				<Modal />
				<VideosContainer />
			</div>
		</div>
	);
}

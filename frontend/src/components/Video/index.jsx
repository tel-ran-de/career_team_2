import s from './index.module.scss';
import { Context } from '../../context';
import { useContext } from 'react';
import { FaPlay } from 'react-icons/fa';

export default function Video({ source, preview }) {
	const { setSource, setModal } = useContext(Context);

	const openVideo = () => {
		setSource(source);
		setModal(true);
	};

	return (
		<div className={s.video} onClick={openVideo}>
			<div className={s.play_icon}>
				<FaPlay color="red" size={46} />
			</div>
			<img src={preview} alt="video-link" />
		</div>
	);
}

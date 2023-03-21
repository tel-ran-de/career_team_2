import s from './Modal.module.scss';
import { Context } from '../../context';
import { useContext } from 'react';
import ReactPlayer from 'react-player/youtube';
import { AiOutlineCloseCircle } from 'react-icons/ai';

export default function Modal() {
	const { videoSource, setSource, modal, setModal } = useContext(Context);

	document.body.style.overflow = modal ? 'hidden' : 'auto';

	const display = modal ? { display: 'flex' } : { display: 'none' };

	const closeWindow = () => {
		setModal(false);
		setSource('');
	};

	return (
		<div className={s.modal} style={display}>
			<div className={s.modal_content}>
				<ReactPlayer url={videoSource} width={640} />

				<AiOutlineCloseCircle className={s.close_icon} onClick={closeWindow} />
			</div>
		</div>
	);
}

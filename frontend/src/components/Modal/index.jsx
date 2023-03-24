import s from './index.module.scss';
import { Context } from '../../context';
import { useContext, useEffect } from 'react';
import ReactPlayer from 'react-player/youtube';
import { AiOutlineCloseCircle } from 'react-icons/ai';

export default function Modal() {
	const { videoSource, setSource, modal, setModal } = useContext(Context);

	useEffect(() => {
		document.body.style.overflow = modal ? 'hidden' : 'auto';
		return () => {
			document.body.style.overflow = modal ? 'hidden' : 'auto';
		};
	}, [modal]);

	const display = modal ? { display: 'flex' } : { display: 'none' };

	const closeWindow = () => {
		setModal(false);
		setSource('');
	};

	const videoWidth = window.innerWidth >= 640 ? 680 : window.innerWidth;
	const videoHeight = window.innerWidth > 480 ? 380 : 270;

	return (
		<div className={s.modal} style={display}>
			<div className={s.modal_content}>
				<ReactPlayer
					url={`https://www.youtube.com/watch?v=${videoSource}`}
					width={videoWidth}
					height={videoHeight}
					allowFullScreen
					controls
				/>
				<AiOutlineCloseCircle className={s.close_icon} onClick={closeWindow} />
			</div>
		</div>
	);
}

import s from './VideosContainer.module.scss';
import Video from '../Video/Video';
import { useState, useEffect } from 'react';
import { initial_req } from '../../requests/initial';
import Button from '../../UI/Button';

export default function VideosContainer() {
	const [sliceCnt, setSliceCnt] = useState(6);
	const [data, setData] = useState([]);

	useEffect(() => {
		initial_req(setData);
	}, []);

	const show_more = () => setSliceCnt((prev) => prev + 3);

	return (
		<div className={s.videos_container}>
			<div className={s.wrapper}>
				{data.slice(0, sliceCnt).map((e) => (
					<Video key={e.id} {...e} />
				))}
			</div>

			<div className={s.button}>
				{sliceCnt < data.length && (
					<Button onClick={show_more}>Show more</Button>
				)}
			</div>
		</div>
	);
}

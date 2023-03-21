import s from './index.module.scss';
import Video from '../Video';
import { useState, useEffect } from 'react';
import { initialReq } from '../../requests/initial';
import Button from '../../UI/Button';

export default function VideosContainer() {
	const [sliceCnt, setSliceCnt] = useState(6);
	const [data, setData] = useState([]);

	useEffect(() => {
		initialReq(setData);
	}, []);

	const showMore = () => setSliceCnt((prev) => prev + 3);

	return (
		<div className={s.videos_container}>
			<div className={s.wrapper}>
				{data.slice(0, sliceCnt).map((e) => (
					<Video key={e.id} {...e} />
				))}
			</div>

			<div className={s.button}>
				{sliceCnt < data.length && (
					<Button onClick={showMore}>Show more</Button>
				)}
			</div>
		</div>
	);
}

import React from 'react';
import { SiLinkedin, SiTelegram, SiReddit } from 'react-icons/si';
import s from './style.module.scss';

export default function Socials({ placement }) {
	return (
		<div className={s.icons_block}>
			<base target="_blank" />
			<a href="https://t.me/+QLDLvXyOn0VkZjM6">
				<SiTelegram
					className={placement === 'header' ? s.header_icons : s.footer_icons}
				/>
			</a>
			<a href="https://www.reddit.com/user/Pre_job_2991">
				<SiReddit
					className={placement === 'header' ? s.header_icons : s.footer_icons}
				/>
			</a>
			<a href="https://www.linkedin.com/company/prejob-video/about/?viewAsMember=true">
				<SiLinkedin
					className={placement === 'header' ? s.header_icons : s.footer_icons}
				/>
			</a>
		</div>
	);
}

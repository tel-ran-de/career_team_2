import Button from '../../UI/Button';
import s from './index.module.scss';
import logo from '../../UI/Logo/logo.png';
import qr from '../../UI/QrCode/qr.png';
import Socials from '../../UI/Socials';

export default function AbountUs() {
	return (
		<div className={s.abount_us}>
			<div className={['container', s.abount_us_block].join(' ')}>
				<h1>Join us on Telegram and leave your feedback</h1>

				<div className={s.abount_us_container}>
					<div className={s.abount_us_info}>
						<div className={s.logo}>
							<img src={logo} alt="logo" />
						</div>

						<Socials />

						<Button>
							<a href="https://telegram.com">Join us on Telegram</a>
						</Button>
					</div>

					<div className={s.QRcode}>
						<img src={qr} alt="QrCode" />
					</div>
				</div>
			</div>
		</div>
	);
}

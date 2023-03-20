import s from "./QRcode.module.scss";

export default function QRcode() {
  return (
    <div className={s.QRcode}>
      <div className={s.wrapper}>
        <h3>Join us on Telegram and leave your feedback</h3>
        <div>
          <img src="qr.png" alt="" />
        </div>
        <button>
          <a href="https://telegram.com">Join us on Telegram</a>
        </button>
      </div>
    </div>
  );
}

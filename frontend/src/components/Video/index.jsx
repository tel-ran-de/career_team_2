import s from "./index.module.scss";
import { Context } from "../../context";
import { useContext, useCallback } from "react";
import { FaPlay } from "react-icons/fa";

export default function Video({ source }) {
  const { setSource, setModal } = useContext(Context);

  const openVideo = useCallback(() => {
    setSource(source);
    setModal(true);
  }, [setModal, setSource, source]);

  return (
    <div className={s.video} onClick={openVideo} data-qa-id="open-video-link">
      <div className={s.play_icon}>
        <FaPlay color="red" size={46} />
      </div>
      <img
        src={`https://img.youtube.com/vi/${source}/0.jpg`}
        alt="video-link"
      />
    </div>
  );
}

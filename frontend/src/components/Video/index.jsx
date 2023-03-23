import s from "./index.module.scss";
import { Context } from "../../context";
import { useContext, useCallback } from "react";
import { FaPlay } from "react-icons/fa";

export default function Video({ videoURL, name, categories, professions }) {
  const { setSource, setModal } = useContext(Context);

  const openVideo = useCallback(() => {
    setSource(videoURL);
    setModal(true);
  }, [setModal, setSource, videoURL]);

  const youtubeID = videoURL.replace("https://youtu.be/", "");

  return (
    <div className={s.video} onClick={openVideo} data-qa-id="open-video-link">
      <div className={s.play_icon}>
        <FaPlay color="red" size={46} />
      </div>
      <p
        className={s.categories}
      >{`${categories[0]?.name} / ${categories[1]?.name} / ${categories[2]?.name} `}</p>

      <p className={s.professions}>{`${professions[0]?.name}`}</p>

      <img
        src={`https://img.youtube.com/vi/${youtubeID}/0.jpg`}
        alt="video-link"
      />

      <h4 className={s.title}>{name}</h4>
    </div>
  );
}

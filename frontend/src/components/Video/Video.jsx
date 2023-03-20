import s from "./Video.module.scss";
import { Context } from "../../context";
import { useContext } from "react";
import { FaPlay } from "react-icons/fa";

export default function Video({ source, preview }) {
  const { setSource, setModal } = useContext(Context);

  const open_video = () => {
    setSource(source);
    setModal(true);
  };

  return (
    <div className={s.video} onClick={open_video}>
      <div className={s.play_icon}>
        <FaPlay color="red" size={46} />
      </div>
      <img src={preview} alt="video-link" />
    </div>
  );
}

// <iframe
// width='100%'
// height='360'
// src='https://www.youtube.com/embed/MeCWAFMu_XE'
// title='YouTube video player'
// // frameborder="0"
// allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
// // allowfullscreen
// ></iframe>

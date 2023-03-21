import s from "./index.module.scss";
import { Context } from "../../context";
import { useContext, useEffect } from "react";
import ReactPlayer from "react-player/youtube";
import { AiOutlineCloseCircle } from "react-icons/ai";

export default function Modal() {
  const { videoSource, setSource, modal, setModal } = useContext(Context);

  useEffect(() => {
    document.body.style.overflow = modal ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = modal ? "hidden" : "auto";
    };
  }, [modal]);

  const display = modal ? { display: "flex" } : { display: "none" };

  const close_window = () => {
    setModal(false);
    setSource("");
  };

  const videoWidth = window.innerWidth >= 640 ? 640 : window.innerWidth;

  return (
    <div className={s.modal} style={display}>
      <div className={s.modal_content}>
        <ReactPlayer
          url={`https://www.youtube.com/watch?v=${videoSource}`}
          width={videoWidth}
          allowFullScreen
          controls
        />
        {/* <iframe
          width={videoWidth}
          height="480"
          src={`https://www.youtube.com/embed/${videoSource}`}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title="Embedded youtube"
        /> */}
        <AiOutlineCloseCircle className={s.close_icon} onClick={close_window} />
      </div>
    </div>
  );
}

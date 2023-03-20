import s from "./Modal.module.scss";
import { Context } from "../../context";
import { useContext } from "react";
import ReactPlayer from "react-player/youtube";

export default function Modal() {
  const { videoSource, setSource, modal, setModal } = useContext(Context);

  const display = modal ? { display: "flex" } : { display: "none" };

  const close_window = () => {
    setModal(false);
    setSource("");
  };

  return (
    <div className={s.modal} style={display}>
      <div className={s.modal_content}>
        <ReactPlayer url={videoSource} width={640} />
        <button className={s.close_icon} onClick={close_window}>
          X
        </button>
      </div>
    </div>
  );
}

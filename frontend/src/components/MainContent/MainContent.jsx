import { useState } from "react";
import Modal from "../Modal/Modal";
import VideosContainer from "../VideosContainer/VideosContainer";
import { Context } from "../../context";
import QRcode from "../QRcode/QRcode";

export default function App() {
  const [videoSource, setSource] = useState("");
  const [modal, setModal] = useState(false);

  return (
    <div>
      <Context.Provider value={{ videoSource, setSource, modal, setModal }}>
        <Modal />
        <VideosContainer />
      </Context.Provider>
      <QRcode />
    </div>
  );
}

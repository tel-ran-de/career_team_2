import Modal from "../Modal";
import VideosContainer from "../VideosContainer";
import MainContentForm from "../MainContentForm";
import s from "./index.module.scss";

export default function MainContent() {
  return (
    <div className={["container", s.main_content].join(" ")}>
      <div>
        <MainContentForm />
      </div>

      <div>
        <Modal />
        <VideosContainer />
      </div>
    </div>
  );
}

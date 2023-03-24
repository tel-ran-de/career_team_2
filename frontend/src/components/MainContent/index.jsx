import Modal from "../Modal";
import { useEffect } from "react";
import VideosContainer from "../VideosContainer";
import MainContentForm from "../FilterMenu";
import { TfiAngleRight } from "react-icons/tfi";
import s from "./index.module.scss";

export default function MainContent({ menuActive, setMenuActive }) {
	
  useEffect(() => {
    document.body.style.overflow = menuActive ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = menuActive ? "hidden" : "auto";
    };
  }, [menuActive]);

  return (
    <div className={["container", s.main_content].join(" ")}>
      <div className={[s.menu, menuActive ? s.active : ""].join(" ")}>
        <TfiAngleRight
          className={s.menu_btn}
          onClick={() => setMenuActive(menuActive ? false : true)}
        />

        <div className={s.menu_list}>
          <MainContentForm />
        </div>
      </div>
      <div>
        <Modal />
        <VideosContainer />
      </div>
    </div>
  );
}

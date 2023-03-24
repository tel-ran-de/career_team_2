import s from "./index.module.scss";
import Video from "../Video";
import { Context } from "../../context";
import { useState, useContext } from "react";
import Button from "../../UI/Button";
import { Link } from "react-scroll";

export default function VideosContainer() {
  const [sliceCnt, setSliceCnt] = useState(6);
  const { videos, searchTitle } = useContext(Context);

  const showMore = () => setSliceCnt((prev) => prev + 3);
  const showLess = () => {
    setSliceCnt(6);
  };

  return (
    <div className={s.videos_container} id="videos_container">
      {videos.length > 0 && <h2>{searchTitle ? searchTitle : "All roles"}</h2>}
      <div className={s.wrapper}>
        {videos.slice(0, sliceCnt).map((e) => (
          <Video key={e.videoId} {...e} />
        ))}
      </div>
      <div className={s.button}>
        {sliceCnt < videos.length && (
          <Button onClick={showMore}>Show more</Button>
        )}
        {sliceCnt > 6 && (
          <Link
            to="videos_container"
            spy={true}
            smooth={true}
            offset={-50}
            duration={600}
          >
            <Button onClick={showLess}>Show less</Button>
          </Link>
        )}
      </div>
      {videos.length === 0 && (
        <div>
          <h2>no videos found &nbsp;&#128532; &nbsp;</h2>
          <h2>try one more time &#128373;</h2>
        </div>
      )}
    </div>
  );
}

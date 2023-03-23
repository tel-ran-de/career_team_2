import s from "./index.module.scss";
import Video from "../Video";
import { Context } from "../../context";
import { useState, useContext } from "react";
import Button from "../../UI/Button";

export default function VideosContainer() {
  const [sliceCnt, setSliceCnt] = useState(6);
  const { videos } = useContext(Context);

  const showMore = () => setSliceCnt((prev) => prev + 3);
  const showLess = () => setSliceCnt(6);

  return (
    <div className={s.videos_container}>
      <div className={s.wrapper}>
        {videos.slice(0, sliceCnt).map((e) => (
          <Video key={e.videoId} {...e} />
        ))}
      </div>

      <div className={s.button}>
        {sliceCnt < videos.length && (
          <Button onClick={showMore}>Show more</Button>
        )}
        {sliceCnt > 6 && <Button onClick={showLess}>Show less</Button>}
      </div>
    </div>
  );
}

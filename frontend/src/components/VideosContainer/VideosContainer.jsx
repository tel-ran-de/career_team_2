import s from "./VideosContainer.module.scss";
import { data } from "../../data/data";
import Video from "../Video/Video";
import { useState } from "react";

export default function VideosContainer() {
  const [sliceCnt, setSliceCnt] = useState(6);

  const show_more = () => setSliceCnt((prev) => prev + 3);

  return (
    <div className={s.videos_container}>
      <div className={s.wrapper}>
        {data.slice(0, sliceCnt).map((e) => (
          <Video key={e.id} {...e} />
        ))}
      </div>
      <button onClick={show_more}>Show more</button>
    </div>
  );
}

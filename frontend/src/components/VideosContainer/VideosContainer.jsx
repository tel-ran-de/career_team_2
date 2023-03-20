import s from "./VideosContainer.module.scss";
import Video from "../Video/Video";
import { useState, useEffect } from "react";
import { initial_req } from "../../requests/initial";

export default function VideosContainer() {
  const [sliceCnt, setSliceCnt] = useState(6);
  const [data, setData] = useState([]);

  useEffect(() => {
    initial_req(setData);
  }, []);

  const show_more = () => setSliceCnt((prev) => prev + 3);

  return (
    <div className={s.videos_container}>
      <div className={s.wrapper}>
        {data.slice(0, sliceCnt).map((e) => (
          <Video key={e.id} {...e} />
        ))}
      </div>
      {sliceCnt < data.length && <button onClick={show_more}>Show more</button>}
    </div>
  );
}

import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import "./video.css"

function Video() {
  const [video, setVideo] = useState("");
  const videoNewkey = JSON.parse(sessionStorage.getItem("mealidd"));

  const { data } = useQuery({
    queryKey: ["videos"],
    queryFn: async () => {
      const res = await axios.get(
        `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${videoNewkey}`
      );

      return res.data.meals
    },
  });

  function displayvideo(obj) {
    return obj.strYoutube.split("v=").pop();
  }

  useEffect(() => {
    if (data) {
      const res = data[0];
      const gottenvideo = displayvideo(res);
      setVideo(gottenvideo);
    }
  }, [data]);

  return (
    <>

      <div className="backgr">
        <iframe
          src={`https://www.youtube.com/embed/${video}`}
          width="100%"
          height="280"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        id="videoframe"></iframe>
      </div>

      <div className="prep">
        <div className="time">
          <p id="prep">Prep-Time</p>
          <h6 id="time">15</h6>
        </div>
        <div className="time">
          <p id="prep">Prep-Time</p>
          <h6 id="time">15</h6>
        </div>
        <div className="time">
          <p id="prep">Servings</p>
          <h6 id="time">15</h6>
        </div>
      </div>
    </>
  );
}

export default Video;

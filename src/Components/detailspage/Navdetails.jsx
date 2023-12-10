import Favorites from "../Favorites/Iconfavorites";
import Instruction from "../Instructions/Instructions";
import Video from "../Video/Video";
function Navdetails() {
  return (
    <>
    <div className="overlay">
      <div className="top-page">
        <div className="tastebite">
          <img src="src/assets/images/Logo 2.png" id="bit" />
        </div>
      </div>
      <Favorites />
      <Video />
      <Instruction />
      </div>
    </>
  );
}

export default Navdetails;

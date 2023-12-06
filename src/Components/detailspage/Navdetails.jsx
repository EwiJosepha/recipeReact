import Favorites from "../Favorites/Iconfavorites";
import Instruction from "../Instructions/Instructions";
import Video from "../Video/Video";
function Navdetails() {
  return (
    <>
      <div className="top-page">
        <div className="tastebite">
          <img src="src/assets/images/Logo 2.png" id="bit" />
        </div>

        <div className="home">
          <span id="spann">Home</span>
          <span id="spann">RecipePage</span>
          <span id="spann">Pages</span>
          <span id="spann">Buy</span>
        </div>

        <img src="src/assets/images/media.png" id="med" />
      </div>
      <Favorites />
      <Video />
      <Instruction />
    </>
  );
}

export default Navdetails;

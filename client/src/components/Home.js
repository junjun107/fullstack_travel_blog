import { Link } from "react-router-dom";
import PlaceIcon from "@mui/icons-material/Place";

const Home = () => {
  return (
    <div className="home">
      <img
        src="https://images.unsplash.com/photo-1418854982207-12f710b74003?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
        alt="landing page image"
        className="home_img"
      />
      <div className="home_text">
        <div className="title_with_marker">
        <h1>Traveler's Map</h1>
         <PlaceIcon
                style={{
                  fontSize: "60px",
                  color: "#DC3535",
                  cursor: "pointer",
                }}
              />
        </div>
     
        <h4>Make memories all over the world.</h4>
        <Link to="/map" className="home_btn">
          Enter
        </Link>
      </div>
    </div>
  );
};

export default Home;

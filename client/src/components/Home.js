import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div className="home">
      <img
        src="https://images.unsplash.com/photo-1524661135-423995f22d0b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2074&q=80"
        alt=""
        className="home_img"
      />
      <div className="home_text">
        <h1>I want to make memories all over the world.</h1>
        <Link to="/map" className="home_btn">
          Enter
        </Link>
      </div>
    </div>
  );
};

export default Home;

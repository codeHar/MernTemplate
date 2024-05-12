import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      Home
      <Link to={"/about"}>About page</Link>
    </div>
  );
};

export default Home;

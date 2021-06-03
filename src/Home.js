import { Link } from "react-router-dom";

const Home = () => (
  <div className="page">
    <p>Home page</p>
    <Link to="/login">Login</Link>
  </div>
);

export default Home;

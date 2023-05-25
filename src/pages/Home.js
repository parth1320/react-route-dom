import { Link } from "react-router-dom";

const Homepage = () => {
  return (
    <>
      <h2>The Home Page</h2>
      <p>
        Go to <Link to="/products">the list of products</Link>.
      </p>
    </>
  );
};

export default Homepage;

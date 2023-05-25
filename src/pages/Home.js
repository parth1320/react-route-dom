import { Link, useNavigate } from "react-router-dom";

const Homepage = () => {
  const navigate = useNavigate();

  const navigateHandler = () => {
    navigate("/products");
  };

  return (
    <>
      <h2>The Home Page</h2>
      <p>
        Go to <Link to="products">the list of products</Link>.
      </p>
      <p>
        <button onClick={navigateHandler}>Navigate</button>
      </p>
    </>
  );
};

export default Homepage;

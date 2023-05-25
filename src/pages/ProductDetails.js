import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const ProductDetailsPage = () => {
  const params = useParams();

  return (
    <>
      <h2>Product Details!</h2>
      <p>{params.pId}</p>
      <p>
        <Link to=".." relative="path">
          Back
        </Link>
      </p>
    </>
  );
};

export default ProductDetailsPage;

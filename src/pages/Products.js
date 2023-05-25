import { Link } from "react-router-dom";

const PRODUCTS = [
  { id: "p1", title: "Product 1" },
  { id: "p2", title: "Product 2" },
  { id: "p3", title: "Product 3" },
];
const ProductsPage = () => {
  return (
    <>
      <h2>The Products Page</h2>
      <ul>
        {PRODUCTS.map((prod) => (
          <li>
            <Link to={prod.id}>{prod.title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default ProductsPage;

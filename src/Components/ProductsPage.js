import { useEffect } from "react";
import Product from "./Product";
import "./product-page.css";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { getProducts } from "../redux/actions";

const ProductsPage = () => {
  const products = useSelector((state) => state.rootReducer.products);
  const dispatch = useDispatch();

  const fetchProducts = async () => {
    // fetch products
    const response = await axios
      .get("https://fakestoreapi.com/products")
      .catch((error) => console.log("Error", error));
    // dispatch action to push response.data into products array
    dispatch(getProducts(response.data));
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="products-collection">
      <h2>Top Products</h2>

      <section className="products-wrapper">
        {products.map((product) => {
          return <Product key={product.id} {...product} />;
        })}
      </section>
    </div>
  );
};

export default ProductsPage;

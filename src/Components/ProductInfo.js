import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { selectProduct, removeSelectedProduct } from "../redux/actions";
import "./product-info.css";
// import image from "./image.jpg";

const ProductInfo = () => {
  const product = useSelector((state) => state.product);
  const { image, price, title, description, category } = product;
  const { productId } = useParams();
  const dispatch = useDispatch();

  const fetchSelectedProduct = async () => {
    const response = await axios
      .get(`https://fakestoreapi.com/products/${productId}`)
      .catch((error) => console.log("Error", error));
    dispatch(selectProduct(response.data));
  };

  useEffect(() => {
    if (productId && productId !== "") fetchSelectedProduct();
    return () => {
      dispatch(removeSelectedProduct());
    };
  }, [productId]);

  return (
    <article className="product-info">
      {Object.keys(product).length === 0 ? (
        <div className="loading">Loading...</div>
      ) : (
        <>
          <div className="image">
            <img src={image} alt="product information" />
            <span className="product-info__price">${price}</span>
          </div>
          <div className="product-info__details">
            <h5 className="product-info__title">{title}</h5>
            <span className="product-info__category">{category}</span>
            <p className="product-info__description">{description}</p>
          </div>
        </>
      )}
    </article>
  );
};

export default ProductInfo;

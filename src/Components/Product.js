import React from "react";
import "./product.css";
// import image from "./image.jpg";

const Product = ({ title, price, category, image }) => {
  return (
    <article className="each-product">
      <img src={image} alt="product" className="each-product__image" />
      <div className="view-cta">
        <button className="cta" onClick={() => alert("PRODUCT CLICKED")}>
          View
        </button>
      </div>
      <div className="product-description">
        <h6 className="product-name">
          {title.length > 52 ? `${title.substring(0, 52)}...` : title}
        </h6>
        <div className="product__sub-category">
          <p className="product-price">${price}</p>
          <p className="product-group">{category}</p>
        </div>
      </div>
    </article>
  );
};

export default Product;

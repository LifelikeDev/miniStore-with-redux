import React from "react";
import "./product.css";
import image from "./image.jpg";

const Product = () => {
  return (
    <article className="each-product">
      <img src={image} alt="product" className="each-product__image" />
      <div className="view-cta">
        <button className="cta" onClick={() => alert("PRODUCT CLICKED")}>
          View
        </button>
      </div>
      <div className="product-description">
        <h6 className="product-name">Product Name</h6>
        <div className="product__sub-category">
          <p className="product-price">Product Price</p>
          <p className="product-group">Category</p>
        </div>
      </div>
    </article>
  );
};

export default Product;

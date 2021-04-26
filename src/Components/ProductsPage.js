import React from "react";
import Product from "./Product";
import "./product-page.css";

const ProductsPage = () => {
  return (
    <div className="products-collection">
      <h2>Top Products</h2>

      <section className="products-wrapper">
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
      </section>
    </div>
  );
};

export default ProductsPage;

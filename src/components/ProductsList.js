import React from "react";
import ProductSingles from "./ProductSingles";
import "./productlist.css";
const ProductsList = ({ products }) => {
  return (
    <div className="product-list">
      {products?.map((product) => {
        return (
          <div key={product.title + product.id}>
            <ProductSingles product={product} />
          </div>
        );
      })}
    </div>
  );
};

export default ProductsList;

import React from "react";
import "./productsingles.css";
import * as Icons from "react-bootstrap-icons";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
const ProductSingles = ({ product }) => {
  const { id, title, price, images } = product;
  const navigate = useNavigate();
  return (
    <Link className="productlink" to={`/product?id=${id}`}>
      <div className="product">
        <img src={images[0]} alt={title} className="product-image" />
        <h3 className="product-name">{title}</h3>
        <p className="product-price">
          <span className="span-align">
            <Icons.CurrencyRupee />
            {price}
          </span>
        </p>
        {/* <p className="product-rating">
        <span className="span-align">
          <Icons.StarFill color="gold" /> {rating.rate}
        </span>
        ({rating.count})
      </p> */}

        {/* <p className="product-description">{description}</p> */}
      </div>
    </Link>
  );
};

export default ProductSingles;

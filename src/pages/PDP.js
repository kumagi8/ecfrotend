import React, { useEffect, useState } from "react";
import Loader from "../components/Loader";
import * as Icons from "react-bootstrap-icons";
import { useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addItem } from "../Redux/cartSlice";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./pdp.css";
function useQuery() {
  return new URLSearchParams(useLocation().search);
}
const PDP = () => {
  const cart = useSelector((store) => store.cart);

  const dispatch = useDispatch();
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(false);
  const query = useQuery();
  const id = query.get("id");
  console.log(cart.items);
  const [addtocart, setAddtocart] = useState(false);

  useEffect(() => {
    async function getProduct() {
      setLoading(true);
      const productdetail = await fetch(
        `https://api.escuelajs.co/api/v1/products/${id}`
      ).then((res) => res.json());
      setProduct(productdetail);
      for (const item of cart.items) {
        if (item?.id === productdetail?.id) {
          setAddtocart(true);
          break;
        }
        console.log(item);
      }
      //   console.log(dispatch(itemExists(productdetail.id)));
      setLoading(false);
    }
    getProduct();
  }, [id]);
  function handleAddToCart() {
    setAddtocart(true);
    dispatch(
      addItem({
        id: product.id,
        title: product.title,
        price: product.price,
        quantity: 1,
        totalPrice: product.price,
      })
    );
  }

  const { name, description, price, images } = product;
  return (
    <div className="pdp">
      {loading ? (
        <Loader />
      ) : (
        <div className="product-detail">
          <div className="product-images">
            {images?.map((imag, index) => (
              <img key={index} src={imag} alt={`${name} imag ${index + 1}`} />
            ))}
          </div>
          <div className="product-info">
            <h1>{name}</h1>
            <p>{description}</p>
            <h2>
              <Icons.CurrencyRupee />
              {price?.toFixed(2)}
            </h2>
            {!addtocart ? (
              <button className="atc atcbtn" onClick={handleAddToCart}>
                Add to cart
              </button>
            ) : (
              <button className="adtc atcbtn">
                <Link to="/cart">Go to cart</Link>
              </button>
            )}
            {/* <button
              onClick={handleAddToCart}
              className={addtocart ? "adtc atcbtn" : "atc atcbtn"}
            >
              {addtocart ? <Link to="/cart">Go to cart</Link> : "Add to cart"}
            </button> */}
          </div>
        </div>
      )}
    </div>
  );
};

export default PDP;

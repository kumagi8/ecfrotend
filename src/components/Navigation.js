import React from "react";
import "./navigation.css";
import Logo from "./Logo";
import { useState } from "react";
import * as Icons from "react-bootstrap-icons";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
const Navigation = () => {
  const cart = useSelector((store) => store.cart.items);
  const [toggleMenu, setToggleMenu] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  async function handleSearch(e) {
    try {
      setSearchQuery(e.target.value);
      let searchresponse = await fetch(
        `https://api.escuelajs.co/api/v1/products/?title=${e.target.value}`
      ).then((res) => res.json());
      setSearchResult(searchresponse.slice(0, 6));
    } catch (err) {
      console.log(err);
    }
  }
  function handleToggle() {
    setToggleMenu(!toggleMenu);
  }
  const fontsizee = 26;
  console.log(searchResult);
  return (
    <div className="navigationstyle">
      <nav>
        {/* <div className="hamburger" onClick={handleToggle}>
          ☰
        </div> */}
        <Link className="logospace" to="/">
          <Logo fontsizee={fontsizee} />
        </Link>
        <Link className="home" to="/">
          <Icons.House color="black" size={24} />
        </Link>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <div id="search-bar">
            <input value={searchQuery} onChange={handleSearch} />

            <Icons.Search type="submit" />
          </div>
          <div>
            {searchQuery !== "" && (
              <ul className="search-result">
                {searchResult.slice(0, 7).map((sr) => (
                  <li key={sr.id} style={{ margin: "none" }}>
                    {sr.title}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
        <ul
          id="nav-links"
          className={`nav-links ${!toggleMenu ? "hidden" : ""}`}
        >
          {/* <li>
            <Link to="/login">
              <Icons.PersonCircle size={20} />
              Login
            </Link>
          </li> */}
          <li id="cart">
            <Link to="/cart">
              <Icons.Cart size={20} />
              <p>{cart.length}</p>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navigation;

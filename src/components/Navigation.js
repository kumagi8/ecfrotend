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
  function handleToggle() {
    setToggleMenu(!toggleMenu);
  }
  const fontsizee = 26;
  return (
    <div className="navigationstyle">
      <nav>
        {/* <div className="hamburger" onClick={handleToggle}>
          ☰
        </div> */}
        <Link className="logospace" to="/">
          <Logo fontsizee={fontsizee} />
        </Link>
        <div id="search-bar">
          <input
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <Icons.Search />
        </div>

        <ul
          id="nav-links"
          className={`nav-links ${!toggleMenu ? "hidden" : ""}`}
        >
          <li>
            <Link to="/login">
              <Icons.PersonCircle size={20} />
              Login
            </Link>
          </li>
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

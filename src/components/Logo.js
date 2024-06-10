import React from "react";
import "./logo.css";
import { Link } from "react-router-dom";
const Logo = ({ fontsizee }) => {
  return (
    <Link className="logo" to="/" style={{ fontSize: `${fontsizee}px` }}>
      <span className="b">b</span>uddy<span className="k">K</span>art
    </Link>
  );
};

export default Logo;

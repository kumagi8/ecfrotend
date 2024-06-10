import React from "react";
import { useState, useEffect } from "react";
import Navigation from "./components/Navigation";
import Home from "./pages/Home";
import { Outlet } from "react-router-dom";
import "./layout.css";

import Categories from "./components/Categories";
import Login from "./pages/Login";
const Layout = () => {
  const [categories, setCategories] = useState(null);

  useEffect(() => {
    try {
      async function getData() {
        const catData = await fetch(
          "https://api.escuelajs.co/api/v1/categories"
        ).then((res) => res.json());

        setCategories(catData);
      }
      getData();
    } catch (err) {
      console.log(err);
    }
  }, []);
  return (
    <div className="layout">
      <Navigation />
      <Categories categories={categories?.slice(0, 5)} />
      <Outlet />
    </div>
  );
};

export default Layout;

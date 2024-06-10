import React from "react";
import "./categories.css";
import { Link } from "react-router-dom";
const Categories = ({ categories }) => {
  return (
    <div className="catList">
      {categories?.map((ctg) => {
        return (
          <Link className="category" key={ctg.name} to={`/category/${ctg.id}`}>
            {ctg.name}
          </Link>
        );
      })}
    </div>
  );
};

export default Categories;

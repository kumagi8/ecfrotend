import React, { useState, useEffect } from "react";
import ProductsList from "../components/ProductsList";
import { useParams } from "react-router-dom";
import Loader from "../components/Loader";
import Noproductfound from "../components/Noproductfound";
import Pagination from "../components/Pagination";
const ProductCategory = () => {
  const { category } = useParams();

  const [products, setProducts] = useState(null);
  const [loading, setLoading] = useState(false);
  const [prodperpage, setProdPerPage] = useState(10);
  const [pageNo, setPageNo] = useState(1);
  useEffect(() => {
    try {
      async function getData() {
        setLoading(true);
        const productsData = await fetch(
          `https://api.escuelajs.co/api/v1/categories/${category}/products`
        ).then((res) => res.json());

        setProducts(productsData);
        setLoading(false);
      }
      getData();
    } catch (err) {
      console.log(err);
    }
  }, [category]);
  let upperBound = prodperpage * pageNo;
  let lowerBound = prodperpage * (pageNo - 1);

  let prodslice = products?.slice(lowerBound, upperBound);
  const noOfPages = Math.ceil(products?.length / prodperpage);

  return (
    // <></>
    <div>
      {loading ? (
        <Loader />
      ) : !products ? (
        <Noproductfound />
      ) : (
        <>
          <ProductsList products={prodslice} />
          <Pagination
            pageNo={pageNo}
            setPageNo={setPageNo}
            noOfPages={noOfPages}
          />
        </>
      )}
    </div>
  );
};

export default ProductCategory;

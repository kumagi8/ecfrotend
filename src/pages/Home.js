import React, { useEffect, useState } from "react";
import HeroSection from "../components/HeroSection";

import ProductsList from "../components/ProductsList";
import Pagination from "../components/Pagination";
import Loader from "../components/Loader";

const Home = () => {
  const [herosection, setHeroSection] = useState(null);
  const [products, setProducts] = useState(null);
  const [loading, setLoading] = useState(false);
  const [prodperpage, setProdPerPage] = useState(10);
  const [pageNo, setPageNo] = useState(1);
  useEffect(() => {
    try {
      async function getData() {
        setLoading(true);
        const productsData = await fetch(
          "https://api.escuelajs.co/api/v1/products"
        ).then((res) => res.json());

        setProducts(productsData);
        setLoading(false);
      }
      getData();
    } catch (err) {
      console.log(err);
    }
  }, []);
  let upperBound = prodperpage * pageNo;
  let lowerBound = prodperpage * (pageNo - 1);

  let prodslice = products?.slice(lowerBound, upperBound);
  const noOfPages = Math.ceil(products?.length / prodperpage);
  return loading ? (
    <Loader />
  ) : (
    <div style={{ display: "flex", flexDirection: "column" }}>
      {/* <Categories categories={categories?.slice(0, 5)} /> */}
      <Pagination pageNo={pageNo} setPageNo={setPageNo} noOfPages={noOfPages} />

      {/* <HeroSection /> */}
      <ProductsList products={prodslice} />
      <Pagination pageNo={pageNo} setPageNo={setPageNo} noOfPages={noOfPages} />
    </div>
  );
};

export default Home;

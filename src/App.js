import "./App.css";
import Layout from "./Layout";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import ProductCategory from "./pages/ProductCategory";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import PDP from "./pages/PDP";
import Orders from "./pages/Orders";
function App() {
  return (
    <BrowserRouter>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />

            <Route path="/cart" element={<Cart />} />
            <Route path="/product" element={<PDP />} />
            <Route path="/orders" element={<Orders />} />

            <Route path="/category/:category" element={<ProductCategory />} />
          </Route>
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

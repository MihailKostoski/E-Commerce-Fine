import { useState } from "react";
import "./App.css";
import Collections from "./pages/Collections/Collections";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import ProductDetails from "./pages/ProductDetails/ProductDetails";
import Cart from "./pages/Cart/Cart";
import Login from "./pages/Login/Login";
import SuccessOrder from "./pages/Success/SuccesOrder";
import Cancel from "./pages/Success/Cancel";

const Home = lazy(() => import("./pages/Home/Home"));
function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <Home />
            </Suspense>
          }
        />
        <Route path="/collections/:filter" element={<Collections />} />
        <Route path="/products/:id" element={<ProductDetails />} />

        <Route path="/sucess" element={<SuccessOrder />} />
        <Route path="/cancel" element={<Cancel />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;

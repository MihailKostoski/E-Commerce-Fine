import { useState } from "react";
import "./App.css";
import Collections from "./pages/Collections/Collections";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import ProductDetails from "./pages/ProductDetails/ProductDetails";
import Cart from "./pages/Cart/Cart";
import Login from "./pages/Login/Login";
import SuccessOrder from "./pages/Success/SuccessOrder";
import Cancel from "./pages/Success/Cancel";
import About from "./pages/About/About";
import Favorite from "./pages/Favorite/Favorite";
import LoginSuccess from "./pages/Login/LoginSuccess";
import Register from "./pages/Register/Register";
import SuccessRegister from "./pages/Register/SuccessRegister";
import { useSelector } from "react-redux";
import PageNotFound from "./pages/PageNotFound/PageNotFound";
const Home = lazy(() => import("./pages/Home/Home"));
function App() {
  const user = useSelector((state) => state.user.currentUser);

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
        <Route path="/favorite" element={<Favorite />} />

        <Route path="/about" element={<About />} />
        <Route path="/success" element={<SuccessOrder />} />
        <Route path="/cancel" element={<Cancel />} />
        <Route path="/cart" element={<Cart />} />

        <Route path="/register" element={<Register />} />
        <Route path="/register-success" element={<SuccessRegister />} />
        <Route path="/login" element={<Login />} />
        {user !== null ? (
          <Route path="/login-success" element={<LoginSuccess />} />
        ) : (
          <Route path="/login-success" element={<PageNotFound />} />
        )}
      </Routes>
    </Router>
  );
}

export default App;

import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Discount from "../components/DiscountSection/Discount";
import Main from "../components/Main/Main";
import Footer from "../components/Footer/Footer";

function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <Discount />
      <Main />

      <Footer />
    </div>
  );
}

export default Home;

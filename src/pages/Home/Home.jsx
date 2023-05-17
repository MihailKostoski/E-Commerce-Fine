import React from "react";
import { lazy, Suspense } from "react";
import Navbar from "../../components/Navbar/Navbar";
import Discount from "../../components/DiscountSection/Discount";
import Footer from "../../components/Footer/Footer";
const Main = lazy(() => import("../../components/Main/Main"));
function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <Discount />
      <Suspense fallback={<div>Loading...</div>}>
        <Main />
      </Suspense>

      <Footer />
    </div>
  );
}

export default Home;

import React from "react";
import { products } from "../../../product";
import { useEffect, useState } from "react";
import { productS } from "../../../productS";
import { BiCartAdd } from "react-icons/bi";
import Product from "./Product";

import axios from "axios";

function MainGrid() {
  const [productDataTommy, setProductDataTommy] = useState();
  const [productDataCalvin, setProductDataCalvin] = useState();
  useEffect(() => {
    axios
      .get(`http://localhost:5000/fine/products?name=${"Tommy Hilfiger"}`)
      .then((response) => {
        setProductDataTommy(response.data);
      });
    axios
      .get(`http://localhost:5000/fine/products?name=${"Calvin Klein"}`)
      .then((response) => {
        setProductDataCalvin(response.data);
      });
  }, []);

  console.log(productDataTommy, "product data");

  console.log(productDataCalvin, "product data");
  return (
    <div className="flex flex-col items-center mt-10">
      <section className="grid grid-rows-auto px-5 gap-5 items-center justify-center sm:grid-cols-2 sm:justify-between md:grid-cols-3 lg:pl-14 ">
        <span className="col-span-full lg:col-start-1 lg:col-end-4">
          Tommy Hilfiger
        </span>
        {productDataTommy?.slice(0, 6).map((product) => (
          <Product key={product._id} product={product} />
        ))}
        <span className="col-span-full lg:col-start-1 lg:col-end-4">
          Calvin Klein
        </span>
        {productDataCalvin?.slice(0, 6).map((product) => (
          <Product key={product._id} product={product} />
        ))}
      </section>
    </div>
  );
}

export default MainGrid;

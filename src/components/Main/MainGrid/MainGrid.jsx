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
        <div className="col-span-full flex flex-row justify-between  px-1 lg:col-start-1 lg:col-end-4">
          <span className="bg-gray-100 px-2 text-[14px] cursor-pointer font-semibold">
            {" "}
            Tommy Hilfiger
          </span>
          <span className="bg-gray-200 px-3  cursor-pointer rounded-t-full ">
            View All
          </span>
        </div>
        {productDataTommy?.slice(0, 6).map((product) => (
          <Product key={product._id} product={product} />
        ))}
        <div className="col-span-full flex  flex-row justify-between px-1 lg:col-start-1 lg:col-end-4">
          <span className="bg-gray-100 px-2 text-[14px] cursor-pointer font-semibold">
            Calvin Klein
          </span>
          <span className="bg-gray-200 px-3 cursor-pointer  rounded-t-full ">
            View All
          </span>
        </div>
        {productDataCalvin?.slice(0, 6).map((product) => (
          <Product key={product._id} product={product} />
        ))}
      </section>
    </div>
  );
}

export default MainGrid;

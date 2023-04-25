import React from "react";
import { products } from "../../../product";
import { productS } from "../../../productS";

import spinner from "../../../assets/Images/spinner.gif";
import { BiCartAdd } from "react-icons/bi";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Link } from "react-router-dom";
import Product from "./product";

function MainGrid() {
  return (
    <>
      <div className="w-fit mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center justify-center gap-y-4 gap-x-14 mt-10 mb-5">
        <div className="w-full rounded-xl col-span-3 flex flex-row  justify-between ">
          <span className="rounded-xl bg-gray-200 w-[20%] px-2 self-center">
            Brand
          </span>
          <button className="rounded-xl self-center bg-gray-700 py-0.5 text-sm contrast-125  px-2 text-white">
            View all
          </button>
        </div>
        {products.products.slice(0, 12).map((product) => (
          <div key={product?.id}>
            <Product product={product} />
          </div>
        ))}
        <div className="w-full rounded-xl col-span-3 flex flex-row  justify-between ">
          <span className="rounded-xl bg-gray-200 w-[20%] px-2 self-center">
            Brand
          </span>
          <button className="rounded-xl self-center bg-gray-700 py-0.5 text-sm contrast-125  px-2 text-white">
            View all
          </button>
        </div>
        {productS.data.map((product) => (
          <div key={product.id}>
            <Product product={product} />
          </div>
        ))}
      </div>
    </>
  );
}

export default MainGrid;

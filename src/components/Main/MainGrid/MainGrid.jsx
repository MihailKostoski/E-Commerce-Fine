import React from "react";
import { products } from "../../../product";
import { productS } from "../../../productS";
import { BiCartAdd } from "react-icons/bi";
import Product from "./Product";

{
  /* {products.products?.slice(0, 12).map((product) => (
          <div key={product?.id}>
            <Product product={product} />
          </div>
        ))} */
}
//   <button className="rounded-xl self-center bg-gray-700 py-0.5 text-sm contrast-125  px-2 text-white">
//   View all
// </button>
function MainGrid() {
  return (
    <div className="flex flex-col items-center mt-10">
      <section className="grid grid-rows-auto px-5 gap-5 items-center justify-center sm:grid-cols-2 sm:justify-between md:grid-cols-3 lg:pl-14 ">
        {products.products?.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </section>
    </div>
  );
}

export default MainGrid;

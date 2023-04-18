import React from "react";
import { products } from "../../product";

import { BiCartAdd } from "react-icons/bi";
function MainGrid() {
  return (
    <>
      <div className="w-fit mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14 mt-10 mb-5">
        {products.products.slice(0, 12).map((product) => (
          <>
            <div
              key={product.id}
              className="w-64 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl"
            >
              <a href="#">
                <img
                  src={product.image}
                  alt="Product"
                  className="h-80 w-full object-cover rounded-t-xl"
                />
                <div className="px-4 py-3 w-full">
                  <span className="text-gray-400 mr-3 uppercase text-xs">
                    Brand
                  </span>
                  <p className="text-lg font-bold text-black truncate block capitalize">
                    {product.name}
                  </p>
                  <div className="flex items-center">
                    <p className="text-lg font-semibold text-black cursor-auto my-3">
                      $149
                    </p>
                    <del>
                      <p className="text-sm text-gray-600 cursor-auto ml-2">
                        {product.price}
                      </p>
                    </del>
                    <div className="ml-auto">
                      <BiCartAdd />
                    </div>
                  </div>
                </div>
              </a>
            </div>
          </>
        ))}
      </div>
    </>
  );
}

export default MainGrid;

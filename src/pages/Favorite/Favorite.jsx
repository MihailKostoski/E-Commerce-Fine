import React, { useState } from "react";
import { AiOutlineHeart } from "react-icons/ai";
import { useSelector } from "react-redux";
import { RiDeleteBin6Line } from "react-icons/ri";
import { Link } from "react-router-dom";
import { BsFillHeartFill } from "react-icons/bs";
import { addFavorite } from "../../redux/cartSlice";
import { useDispatch } from "react-redux";
function Favorite() {
  const favoriteProducts = useSelector((state) => state.cart.favorite);

  const dispatch = useDispatch();
  const handleFavorite = (heart, click) => {
    dispatch(addFavorite({ heart, click }));
  };

  console.log(favoriteProducts, "favor");
  return (
    <>
      {favoriteProducts?.length > 0 ? (
        <div>
          <div className="h-screen bg-gray-100 pt-20">
            <h1 className="mb-10 text-center text-2xl font-bold">
              Favorite Items
            </h1>
            <div className="mx-auto max-w-5xl justify-center px-6 md:flex md:space-x-6 xl:px-0">
              <div className="rounded-lg md:w-2/3">
                {favoriteProducts?.map((productFavorite) => (
                  <div
                    key={productFavorite._id}
                    className="justify-between  mb-6 rounded-lg bg-white p-6 shadow-md sm:flex sm:justify-start"
                  >
                    <img
                      src={productFavorite.img}
                      alt="product-image"
                      className="w-[200px] h-[220px] rounded-lg sm:w-40"
                    />

                    <div className="sm:ml-4 sm:flex sm:w-full sm:justify-between">
                      <div className="mt-5 sm:mt-0">
                        <h2 className="text-lg font-bold text-gray-900">
                          {productFavorite.title}
                        </h2>

                        <p>{productFavorite.description}</p>
                        <div className="flex flex-col mt-2 gap-4 md:flex-row">
                          <div className="flex flex-row justify-start gap-2  items-center">
                            <div className="text-sm font-bold">
                              ${productFavorite.price.toFixed(2)}
                            </div>
                          </div>
                        </div>
                        <div className="flex gap-2 flex-row">
                          <button className="flex ml-auto text-white bg-red-500 border-0 py-1 px-5 focus:outline-none hover:bg-red-600 rounded">
                            <Link to={`/products/${productFavorite._id}`}>
                              View Product
                            </Link>
                          </button>
                          <button
                            onClick={() =>
                              handleFavorite(productFavorite, "remove")
                            }
                            className="flex flex-col justify-center items-center text-white bg-red-500 border-0 py-1 px-4 focus:outline-none hover:bg-red-600 rounded"
                          >
                            <RiDeleteBin6Line className="text-md" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex flex-col relative h-screen w-screen gap-2 items-center justify-center">
          <div className="flex flex-row items-center justify-center gap-2">
            <span className="font-bold text-gray-500">
              Your favorite cart is empty
            </span>
            <button className="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-1">
              <BsFillHeartFill className="text-red-500" />
            </button>
          </div>
          <button className="bg-green-300 text-gray-500 font-semibold text-[12px] p-1 rounded-full">
            <Link to="/">RETURN TO SHOP</Link>
          </button>
        </div>
      )}
    </>
  );
}

export default Favorite;

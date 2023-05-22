import React from "react";
import { AiOutlineDown } from "react-icons/ai";
import { Link } from "react-router-dom";

function AccessoriesList({ openAcessories }) {
  return (
    <>
      <div className="relative h-full flex items-center">
        <button
          className="hover:text-gray-200 flex flex-row
           text-center place-items-center transition delay-350 duration-300 ease-in-out"
        >
          <span className="mr-1">Accessories</span>
          <AiOutlineDown className="text-sm" />
        </button>

        <div
          className={`absolute right-0 left-[-30px]
           top-[72px] w-56 h-[280px]  bg-gray-700 py-2 mt-2 rounded-lg shadow-xl ${
             openAcessories ? "flex flex-row gap-1 justify-center" : "hidden"
           }`}
        >
          <ul className="flex flex-col justify-start">
            <hr className="my-2" />
            <h3
              className="flex w-full items-center 
                         text-sm font-bold "
            >
              <Link
                className="h-full w-full text-center  py-2"
                to="/collections/women&accessories"
              >
                Women
              </Link>
            </h3>
            <hr className="my-2" />

            <li
              className="flex w-full items-center 
    text-base hover:bg-gray-900"
            >
              <Link
                className="px-3 py-2  h-full w-full"
                to="/collections/bags&women&accessories"
              >
                Bags
              </Link>
            </li>

            <li
              className="flex w-full items-center 
    text-base hover:bg-gray-900"
            >
              <Link
                className="px-3 py-2  h-full w-full"
                to="/collections/sunglasses&women&accessories"
              >
                Sunglasses
              </Link>
            </li>
          </ul>
          <div
            className="border-left border-solid 
                      border-[0.5px] border-black h-[94%] self-center"
          ></div>
          <ul>
            <hr className="my-2" />
            <h3
              className="flex w-full items-center 
                         text-sm font-bold "
            >
              <Link
                className="h-full w-full text-center py-2"
                to="/collections/men&accessories"
              >
                Men
              </Link>
            </h3>
            <hr className="my-2" />
            <li
              className="flex w-full items-center 
    text-base hover:bg-gray-900"
            >
              <Link
                className="px-3 py-2  h-full w-full"
                to="/collections/watches&men&accessories"
              >
                Watches
              </Link>
            </li>

            <li
              className="flex w-full items-center 
    text-base hover:bg-gray-900"
            >
              <Link
                className="px-3 py-2  h-full w-full"
                to="/collections/sunglasses&men&accessories"
              >
                Sunglasses
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export const MemoizedAccessoriesList = React.memo(AccessoriesList);

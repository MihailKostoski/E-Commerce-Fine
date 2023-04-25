import React from "react";
import { AiOutlineDown } from "react-icons/ai";
import womenDropDown from "../../../assets/Images/womenDropDown.jpg";
import menDropDown from "../../../assets/Images/menDropDown.jpg";
import { Link } from "react-router-dom";
function ShopNavList({ openShop, setOpenShop }) {
  console.log("hi shopnavlist here");
  return (
    <>
      <div className="relative h-full flex items-center">
        <button
          className="hover:text-gray-200
                       flex flex-row text-center place-items-center"
        >
          <span className="mr-1">Shop</span>
          <AiOutlineDown className="text-base" />
        </button>

        <div
          className={`absolute  left-[-100px]  top-[72px]
                       w-[840px]  h-[400px] bg-gray-700  transition-opacity duration-300   mt-2 rounded-lg shadow-xl  ${
                         openShop
                           ? "flex flex-row gap-5 justify-center duration-1000 "
                           : "hidden"
                       }`}
        >
          {/* /////////// Women */}
          <ul className="mt-2">
            <h3 className="flex flex-row justify-center">
              <Link className="py-2 w-[88%]  h-full " to="/collections/women">
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
                to="/collections/tops-tees"
              >
                Tops & Tees
              </Link>
            </li>

            <li
              className="flex w-full items-center 
                        text-base hover:bg-gray-900"
            >
              <Link
                className="px-3 py-2  h-full w-full"
                to="/collections/activewear"
              >
                Activewear
              </Link>
            </li>

            <li
              className="flex w-full items-center 
                        text-base hover:bg-gray-900"
            >
              <Link
                className="px-3 py-2  h-full w-full"
                to="/collections/dresses-skirts"
              >
                Dresses & Skirts
              </Link>
            </li>

            <li
              className="flex w-full items-center 
                        text-base hover:bg-gray-900"
            >
              <Link
                className="px-3 py-2  h-full w-full"
                to="/collections/hoodies-sweaters"
              >
                Hoodies & Sweaters
              </Link>
            </li>
          </ul>
          {/* Vertical Line */}
          <div
            className="border-left border-solid 
                      border-[1px] border-black h-[96%] self-center"
          ></div>
          {/* ///////////// Men */}
          <ul className="mt-2">
            <h3 className="flex flex-row justify-center">
              <Link className=" py-2 w-[88%]  h-full " to="/collections/men">
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
                to="/collections/men-jackets"
              >
                Jackets
              </Link>
            </li>

            <li
              className="flex w-full items-center 
                        text-base hover:bg-gray-900"
            >
              <Link
                className="px-3 py-2  h-full w-full"
                to="/collections/men-hoodies-sweaters"
              >
                Hoodies & Sweaters
              </Link>
            </li>

            <li
              className="flex w-full items-center 
                        text-base hover:bg-gray-900"
            >
              <Link
                className="px-3 py-2  h-full w-full"
                to="/collections/men-joggers-sweatpants"
              >
                Joggers & Sweatpants
              </Link>
            </li>

            <li
              className="flex w-full items-center 
                        text-base hover:bg-gray-900"
            >
              <Link
                className="px-3 py-2  h-full w-full"
                to="/collections/men-pants"
              >
                Pants
              </Link>
            </li>

            <li
              className="flex w-full items-center 
                        text-base hover:bg-gray-900"
            >
              <Link
                className="px-3 py-2  h-full w-full"
                to="/collections/men-tops-tees"
              >
                Tops & Tees
              </Link>
            </li>
          </ul>
          {/* img women */}
          <div className="h-[60%] self-start mt-3">
            <img
              className="h-full w-full"
              src={womenDropDown}
              alt="womenDropDown"
            />
          </div>
          {/* img men */}
          <div className="h-[60%] self-start mt-3">
            <img
              className="h-full w-full"
              src={menDropDown}
              alt="menDropDown"
            />
          </div>
        </div>
      </div>
    </>
  );
}
export const MemoizedShopNavList = React.memo(ShopNavList);

import React from "react";
import { AiOutlineDown } from "react-icons/ai";
import womenDropDown from "../../../assets/Images/womenDropDown.jpg";
import menDropDown from "../../../assets/Images/menDropDown.jpg";
function ShopNavList({ openShop, setOpenShop }) {
  return (
    <>
      <div
        onMouseLeave={() => setOpenShop(false)}
        className="relative h-full flex items-center"
      >
        <button
          onMouseOver={() => setOpenShop(true)}
          className="hover:text-gray-200
                       flex flex-row text-center place-items-center transition delay-700 duration-500 ease-in-out"
        >
          <span className="mr-1">Shop</span>
          <AiOutlineDown className="text-base" />
        </button>

        <div
          className={`absolute  left-[-100px]  top-[72px]
                       w-[840px]  h-[400px] bg-gray-700  mt-2 rounded-lg shadow-xl ${
                         openShop
                           ? "flex flex-row gap-5 justify-center "
                           : "hidden"
                       }`}
        >
          {/* /////////// Women */}
          <ul className="mt-2">
            <h3 className="flex flex-row justify-center">Women</h3>
            <hr className="my-2" />
            <li
              className="flex w-full items-center 
                        px-3 py-2 text-base hover:bg-gray-900"
            >
              Tops & Tees
            </li>
            <li
              className="flex w-full items-center 
                        px-3 py-2 text-base hover:bg-gray-900"
            >
              Activewear
            </li>
            <li
              className="flex w-full items-center
                         px-3 py-2 text-base hover:bg-gray-900"
            >
              Dresses & Skirts
            </li>
            <li
              className="flex w-full items-center
                         px-3 py-2 text-base hover:bg-gray-900"
            >
              Hoodies & Sweaters
            </li>
          </ul>
          {/* Vertical Line */}
          <div
            className="border-left border-solid 
                      border-[1px] border-black h-[96%] self-center"
          ></div>
          {/* ///////////// Men */}
          <ul className="mt-2">
            <h3 className="flex flex-row justify-center">Men</h3>
            <hr className="my-2" />
            <li
              className="flex w-full items-center
                         px-3 py-2 text-base hover:bg-gray-900"
            >
              Jackets
            </li>
            <li
              className="flex w-full items-center 
                        px-3 py-2 text-base hover:bg-gray-900"
            >
              Hoodies & Sweaters
            </li>
            <li
              className="flex w-full items-center 
                        px-3 py-2 text-base hover:bg-gray-900"
            >
              Joggers & Sweatpants
            </li>
            <li
              className="flex w-full items-center 
                        px-3 py-2 text-base hover:bg-gray-900"
            >
              Pants
            </li>
            <li
              className="flex w-full items-center 
                        px-3 py-2 text-base hover:bg-gray-900"
            >
              Tops & Tees
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

export default ShopNavList;

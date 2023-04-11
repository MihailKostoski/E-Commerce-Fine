import React from "react";
import { AiOutlineDown } from "react-icons/ai";
function BrandsList({ openBrands, setOpenBrands }) {
  return (
    <>
      <div onMouseLeave={() => setOpenBrands(false)} className="relative">
        <button
          onMouseOver={() => setOpenBrands(true)}
          className="hover:text-gray-200 flex flex-row text-center place-items-center transition delay-150 duration-300 ease-in-out"
        >
          <span className="mr-1">Brands</span>
          <AiOutlineDown className="text-sm" />
        </button>

        <div
          className={`absolute right-0 left-0 top-11 w-56 h-[280px] bg-gray-800 py-2 mt-2 rounded-lg shadow-xl ${
            openBrands ? "flex flex-row justify-start" : "hidden"
          }`}
        >
          <ul>
            <li className="flex w-full items-center px-3 py-2 text-sm hover:bg-gray-100">
              Tommy Hilfiger
            </li>
            <li className="flex w-full items-center px-3 py-2 text-sm hover:bg-gray-100">
              Calvin Klein
            </li>
            <li className="flex w-full items-center px-3 py-2 text-sm hover:bg-gray-100">
              Emporio Armani
            </li>
            <li className="flex w-full items-center px-3 py-2 text-sm hover:bg-gray-100">
              Guess
            </li>
            <li className="flex w-full items-center px-3 py-2 text-sm hover:bg-gray-100">
              Michael Kors
            </li>
            <li className="flex w-full items-center px-3 py-2 text-sm hover:bg-gray-100">
              Hugo
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default BrandsList;

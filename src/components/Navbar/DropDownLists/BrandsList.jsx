import React from "react";
import { AiOutlineDown } from "react-icons/ai";
function BrandsList({ openBrands, setOpenBrands }) {
  return (
    <>
      <div
        onMouseLeave={() => setOpenBrands(false)}
        className="relative h-full flex items-center"
      >
        <button
          onMouseOver={() => setOpenBrands(true)}
          className="hover:text-gray-200 flex flex-row text-center place-items-center transition delay-150 duration-300 ease-in-out"
        >
          <span className="mr-1">Brands</span>
          <AiOutlineDown className="text-base" />
        </button>

        <div
          className={`absolute right-0 left-[-30px] top-[72px] w-56 h-[280px] bg-gray-700 py-2 mt-2 rounded-lg shadow-xl ${
            openBrands ? "flex flex-row justify-start" : "hidden"
          }`}
        >
          <ul>
            <li className="flex w-full items-center px-3 py-2 text-base hover:bg-gray-900">
              Tommy Hilfiger
            </li>
            <li className="flex w-full items-center px-3 py-2 text-base hover:bg-gray-900">
              Calvin Klein
            </li>
            <li className="flex w-full items-center px-3 py-2 text-base hover:bg-gray-900">
              Emporio Armani
            </li>
            <li className="flex w-full items-center px-3 py-2 text-base hover:bg-gray-900">
              Guess
            </li>
            <li className="flex w-full items-center px-3 py-2 text-base hover:bg-gray-900">
              Michael Kors
            </li>
            <li className="flex w-full items-center px-3 py-2 text-base hover:bg-gray-900">
              Hugo
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default BrandsList;

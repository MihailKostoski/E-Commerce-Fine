import React from "react";
import { AiOutlineDown } from "react-icons/ai";
import { Link } from "react-router-dom";
function BrandsList({ openBrands, setOpenBrands }) {
  console.log("hi brands here");
  return (
    <>
      <div className="relative h-full flex items-center">
        <button className="hover:text-gray-200 flex flex-row text-center place-items-center transition delay-150 duration-300 ease-in-out">
          <span className="mr-1">Brands</span>
          <AiOutlineDown className="text-base" />
        </button>

        <div
          className={`absolute right-0 left-[-30px] top-[72px] transiton-all delay-75 w-56 h-[280px] bg-gray-700 py-2 mt-2 rounded-lg shadow-xl ${
            openBrands ? "flex flex-row justify-start" : "hidden"
          }`}
        >
          <ul>
            <li className="flex w-full items-center  text-base hover:bg-gray-900">
              <Link
                className="px-3 py-2  h-full w-full"
                to="/collections/brands-tommy-hilfiger"
              >
                Tommy Hilfiger
              </Link>
            </li>

            <li className="flex w-full items-center  text-base hover:bg-gray-900">
              <Link
                className="px-3 py-2  h-full w-full"
                to="/collections/brands-calvin-klein"
              >
                Calvin Klein
              </Link>
            </li>

            <li className="flex w-full items-center  text-base hover:bg-gray-900">
              <Link
                className="px-3 py-2  h-full w-full"
                to="/collections/brands-emporio-armani"
              >
                Emporio Armani
              </Link>
            </li>

            <li className="flex w-full items-center  text-base hover:bg-gray-900">
              <Link
                className="px-3 py-2  h-full w-full"
                to="/collections/brands-guess"
              >
                Guess
              </Link>
            </li>

            <li className="flex w-full items-center  text-base hover:bg-gray-900">
              <Link
                className="px-3 py-2   h-full w-full"
                to="/collections/brands-michael-kors"
              >
                Michael Kors
              </Link>
            </li>

            <li className="flex w-full items-center  text-base hover:bg-gray-900">
              <Link
                className="px-3 py-2 h-full w-full"
                to="/collections/brands-hugo-boss"
              >
                Hugo Boss
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
export const MemoizedBrandsList = React.memo(BrandsList);

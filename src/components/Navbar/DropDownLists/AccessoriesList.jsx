import React from "react";
import { AiOutlineDown } from "react-icons/ai";
import { Link } from "react-router-dom";

function AccessoriesList({ openAcessories, setOpenAcessories }) {
  console.log("hi acessories here");
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
             openAcessories ? "flex flex-row   justify-start" : "hidden"
           }`}
        >
          <ul>
            <li
              className="flex w-full items-center 
    text-base hover:bg-gray-900"
            >
              <Link
                className="px-3 py-2  h-full w-full"
                to="/collections/accessories-jewelry"
              >
                Jewelry
              </Link>
            </li>

            <li
              className="flex w-full items-center 
    text-base hover:bg-gray-900"
            >
              <Link
                className="px-3 py-2  h-full w-full"
                to="/collections/accessories-scarves"
              >
                Scarves
              </Link>
            </li>

            <li
              className="flex w-full items-center 
    text-base hover:bg-gray-900"
            >
              <Link
                className="px-3 py-2  h-full w-full"
                to="/collections/accessories-sunglasses"
              >
                Sunglasses
              </Link>
            </li>

            <li
              className="flex w-full items-center 
    text-base hover:bg-gray-900"
            >
              <Link
                className="px-3 py-2  h-full w-full"
                to="/collections/accessories-hats-belts"
              >
                Hats & Belts
              </Link>
            </li>

            <li
              className="flex w-full items-center 
    text-base hover:bg-gray-900"
            >
              <Link
                className="px-3 py-2  h-full w-full"
                to="/collections/accessories-bags"
              >
                Bags
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export const MemoizedAccessoriesList = React.memo(AccessoriesList);

import React from "react";
import { AiOutlineDown } from "react-icons/ai";
function AccessoriesList({ openAcessories, setOpenAcessories }) {
  return (
    <>
      <div onMouseLeave={() => setOpenAcessories(false)} className="relative">
        <button
          onMouseOver={() => setOpenAcessories(true)}
          className="hover:text-gray-200 flex flex-row
           text-center place-items-center transition delay-350 duration-300 ease-in-out"
        >
          <span className="mr-1">Accessories</span>
          <AiOutlineDown className="text-sm" />
        </button>

        <div
          className={`absolute right-0 left-0
           top-11 w-56 h-[280px] bg-gray-800 py-2 mt-2 rounded-lg shadow-xl ${
             openAcessories ? "flex flex-row justify-start" : "hidden"
           }`}
        >
          <ul>
            <li
              className="flex w-full items-center 
          px-3 py-2 text-sm hover:bg-gray-100"
            >
              Jewelry
            </li>
            <li
              className="flex w-full items-center 
          px-3 py-2 text-sm hover:bg-gray-100"
            >
              Scarves
            </li>
            <li
              className="flex w-full items-center
           px-3 py-2 text-sm hover:bg-gray-100"
            >
              Sunglasses
            </li>
            <li
              className="flex w-full items-center
           px-3 py-2 text-sm hover:bg-gray-100"
            >
              Hats & Belts
            </li>
            <li
              className="flex w-full items-center
           px-3 py-2 text-sm hover:bg-gray-100"
            >
              Bags
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default AccessoriesList;

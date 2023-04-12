import React from "react";
import { AiOutlineDown } from "react-icons/ai";
function AboutFineList({ openAboutUs, setOpenAboutUs }) {
  return (
    <>
      <div
        onMouseLeave={() => setOpenAboutUs(false)}
        className="relative h-full flex items-center"
      >
        <button
          onMouseOver={() => setOpenAboutUs(true)}
          className="hover:text-gray-200 flex flex-row text-center place-items-center transition delay-700 duration-500 ease-in-out"
        >
          <span className="mr-1">About Fine</span>
          <AiOutlineDown className="text-sm" />
        </button>

        <div
          className={`absolute right-0 left-[-30px] top-[72px] w-56 h-[90px] bg-gray-700 py-2 mt-2 rounded-lg shadow-xl ${
            openAboutUs ? "flex flex-row justify-start" : "hidden"
          }`}
        >
          <ul>
            <li className="flex w-full items-center px-3 py-2 text-base hover:bg-gray-900">
              About
            </li>
            <li className="flex w-full items-center px-3 py-2 text-base hover:bg-gray-900">
              FAQ
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default AboutFineList;

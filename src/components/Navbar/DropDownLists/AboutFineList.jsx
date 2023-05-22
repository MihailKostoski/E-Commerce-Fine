import React from "react";

import { AiOutlineDown } from "react-icons/ai";
import { Link } from "react-router-dom";
function AboutFineList({ openAboutUs }) {
  return (
    <>
      <div className="relative h-full flex items-center">
        <button className="hover:text-gray-200 flex flex-row text-center place-items-center transition delay-700 duration-500 ease-in-out">
          <span className="mr-1">About Fine</span>
          <AiOutlineDown className="text-sm" />
        </button>

        <div
          className={`absolute right-0 left-[-30px] top-[72px] transiton-all delay-75  w-56 h-[90px] bg-gray-700 py-2 mt-2 rounded-lg shadow-xl ${
            openAboutUs ? "flex flex-row justify-start" : "hidden"
          }`}
        >
          <ul>
            <li className="flex w-full items-center px-3 py-2 text-base hover:bg-gray-900">
              <Link to="/about"> About</Link>
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

export const MemoizedAboutFineList = React.memo(AboutFineList);

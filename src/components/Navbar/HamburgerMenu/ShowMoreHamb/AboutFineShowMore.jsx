import React from "react";
import { AiOutlineDown } from "react-icons/ai";
import { Link } from "react-router-dom";
function AboutFineShowMore({ showMoreAbFi, setShowMoreAbFi }) {
  const handleToggle = () => {
    setShowMoreAbFi((current) => !current);
  };

  return (
    <>
      <button
        onClick={handleToggle}
        className="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
      >
        <span className="flex-1 ml-3 text-left whitespace-nowrap">
          About Fine
        </span>
        <div
          className={`flex items-center cursor-pointer  transiton-all duration-300  delay-75 justify-center w-6 h-4 rounded-full bg-blue-500 text-white 
                  ${showMoreAbFi ? " rotate-180" : "rotate-0"} `}
        >
          <AiOutlineDown />
        </div>
      </button>
      <ul
        className={`py-2 space-y-2 ${
          showMoreAbFi ? "flex flex-col" : "hidden"
        }`}
      >
        <li>
          <Link
            to="/about"
            className="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
          >
            About
          </Link>
        </li>
        <li>
          <Link className="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">
            FAQ
          </Link>
        </li>
      </ul>
    </>
  );
}

export const MemoizedAboutFineShowMore = React.memo(AboutFineShowMore);

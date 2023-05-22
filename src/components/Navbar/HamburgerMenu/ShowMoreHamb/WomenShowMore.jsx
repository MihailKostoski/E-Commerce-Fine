import React from "react";
import { AiOutlineDown } from "react-icons/ai";
import { Link } from "react-router-dom";
function WomenShowMore({ showMoreWom, setShowMoreWom }) {
  const handleToggle = () => {
    setShowMoreWom((current) => !current);
  };

  return (
    <>
      <button
        onClick={handleToggle}
        className="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
      >
        <span className="flex-1 ml-3 text-left whitespace-nowrap">Women</span>
        <div
          className={`flex items-center cursor-pointer  transiton-all duration-300  delay-75 justify-center w-6 h-4 rounded-full bg-blue-500 text-white 
                  ${showMoreWom ? " rotate-180" : "rotate-0"} `}
        >
          <AiOutlineDown />
        </div>
      </button>
      <ul
        className={`py-2 space-y-2 ${showMoreWom ? "flex flex-col" : "hidden"}`}
      >
        <li>
          <Link
            to="/collections/women&t-shirt"
            className="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
          >
            T-Shirts
          </Link>
        </li>

        <li>
          <Link
            to="/collections/women&dresses-skirts"
            className="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
          >
            Dresses & Skirts
          </Link>
        </li>
        <li>
          <Link
            to="/collections/women&hoodies-sweaters"
            className="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
          >
            Hoodies & Sweaters
          </Link>
        </li>
      </ul>
    </>
  );
}

export const MemoizedWomenShowMore = React.memo(WomenShowMore);

import React from "react";
import { AiOutlineDown } from "react-icons/ai";
import { Link } from "react-router-dom";

function AccessoriesShowMore({ showMoreAccs, setShowMoreAccs }) {
  const handleToggle = () => {
    setShowMoreAccs((current) => !current);
  };

  return (
    <>
      <button
        onClick={handleToggle}
        className="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
      >
        <span className="flex-1 ml-3 text-left whitespace-nowrap">
          Accessories
        </span>
        <div
          className={`flex items-center cursor-pointer  transiton-all duration-300  delay-75 justify-center w-6 h-4 rounded-full bg-blue-500 text-white 
                  ${showMoreAccs ? " rotate-180" : "rotate-0"} `}
        >
          <AiOutlineDown />
        </div>
      </button>
      <ul
        className={`py-2 space-y-2 ${
          showMoreAccs ? "flex flex-col" : "hidden"
        }`}
      >
        <hr className="" />
        <h3
          className="flex flex-row w-full text-black items-center
                         text-sm font-bold "
        >
          <Link
            className="h-full w-full pl-11  py-2"
            to="/collections/women&accessories"
          >
            Women
          </Link>
        </h3>
        <hr className="my-2" />

        <li>
          <Link
            to="/collections/women&accessories&bags"
            className="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
          >
            Bags
          </Link>
        </li>

        <li>
          <Link
            to="/collections/women&accessories&sunglasses"
            className="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
          >
            Sunglasses
          </Link>
        </li>
        <hr className="" />
        <h3
          className="flex flex-row w-full text-black items-center
                         text-sm font-bold "
        >
          <Link
            className="h-full w-full pl-11  py-2"
            to="/collections/men&accessories"
          >
            Men
          </Link>
        </h3>
        <hr className="my-2" />
        <li>
          <Link
            to="/collections/men&accessories&watches"
            className="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
          >
            Watches
          </Link>
        </li>
        <li>
          <Link
            to="/collections/men&accessories&sunglasses"
            className="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
          >
            Sunglasses
          </Link>
        </li>
      </ul>
    </>
  );
}
export const MemoizedAccessoriesShowMore = React.memo(AccessoriesShowMore);

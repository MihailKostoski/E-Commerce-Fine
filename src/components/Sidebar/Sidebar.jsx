import React from "react";
import { Link } from "react-router-dom";
function Sidebar() {
  return (
    <div>
      <div className="hidden w-64 h-full  cursor-pointer  p-4 text-gray-900  bg-white dark:bg-gray-800 lg:flex">
        <div className="py-4 overflow-y-auto">
          <ul className="space-y-2 font-medium">
            <li>
              <ul className="mt-2">
                <hr className="my-2" />
                <h3
                  className="flex w-full items-center 
                         text-lg font-bold "
                >
                  <Link
                    className="h-full w-full px-3 py-2"
                    to="/collections/women"
                  >
                    Women
                  </Link>
                </h3>

                <hr className="my-2" />

                <li
                  className="flex w-full items-center 
 text-base hover:bg-gray-200"
                >
                  <Link
                    className="h-full w-full px-3 py-2"
                    to="/collections/women&t-shirt"
                  >
                    T-Shirts
                  </Link>
                </li>

                <li
                  className="flex w-full items-center 
                   text-base hover:bg-gray-200"
                >
                  <Link
                    className="h-full w-full px-3 py-2"
                    to="/collections/women&dresses-skirts"
                  >
                    Dresses & Skirts
                  </Link>
                </li>

                <li
                  className="flex w-full items-center 
                         text-base hover:bg-gray-200"
                >
                  <Link
                    className="h-full w-full px-3 py-2"
                    to="/collections/women&hoodies-sweaters"
                  >
                    Hoodies & Sweaters
                  </Link>
                </li>
                <h3
                  className="flex w-full items-center 
                         text-md font-bold"
                >
                  <Link
                    className="h-full w-full px-3 py-2"
                    to="/collections/women&accessories"
                  >
                    Accessories
                  </Link>
                </h3>

                <li
                  className="flex w-full items-center 
           text-base hover:bg-gray-200"
                >
                  <Link
                    className="h-full w-full px-3 py-2"
                    to="/collections/bags&women&accessories"
                  >
                    Bags
                  </Link>
                </li>

                <li
                  className="flex w-full items-center 
           text-base hover:bg-gray-200"
                >
                  <Link
                    className="h-full w-full px-3 py-2"
                    to="/collections/sunglasses&women&accessories"
                  >
                    Sunglasses
                  </Link>
                </li>
              </ul>

              <hr className="my-2" />
            </li>
            <li>
              <ul className="mt-2">
                <h3
                  className="flex w-full items-center 
                         text-lg font-bold"
                >
                  <Link
                    className="h-full w-full px-3 py-2"
                    to="/collections/men"
                  >
                    Men
                  </Link>
                </h3>

                <hr className="my-2" />

                <li
                  className="flex w-full items-center 
                         text-base hover:bg-gray-200"
                >
                  <Link
                    className="h-full w-full px-3 py-2"
                    to="/collections/men&jackets"
                  >
                    Jackets
                  </Link>
                </li>

                <li
                  className="flex w-full items-center 
                         text-base hover:bg-gray-200"
                >
                  <Link
                    className="h-full w-full px-3 py-2"
                    to="/collections/men&hoodies-sweaters"
                  >
                    Hoodies & Sweaters
                  </Link>
                </li>

                <li
                  className="flex w-full items-center 
                         text-base hover:bg-gray-200"
                >
                  <Link
                    className="h-full w-full px-3 py-2"
                    to="/collections/men&t-shirt"
                  >
                    T-Shirts
                  </Link>
                </li>
                <h3
                  className="flex w-full items-center 
                         text-md font-bold"
                >
                  <Link
                    className="h-full w-full px-3 py-2"
                    to="/collections/men&accessories"
                  >
                    Accessories
                  </Link>
                </h3>

                <li
                  className="flex w-full items-center 
           text-base hover:bg-gray-200"
                >
                  <Link
                    className="h-full w-full px-3 py-2"
                    to="/collections/watches&men&accessories"
                  >
                    Watches
                  </Link>
                </li>

                <li
                  className="flex w-full items-center 
           text-base hover:bg-gray-200"
                >
                  <Link
                    className="h-full w-full px-3 py-2"
                    to="/collections/sunglasses&men&accessories"
                  >
                    Sunglasses
                  </Link>
                </li>
              </ul>
              <hr className="my-2" />
            </li>
            <li></li>
            <li>
              <ul>
                <h3
                  className="cursor-pointer flex w-full items-center 
                         text-lg font-bold "
                >
                  <Link className="h-full w-full px-3 py-2" to="/">
                    Brands
                  </Link>
                </h3>

                <hr className="my-2" />
                <li className="flex w-full items-center  text-base hover:bg-gray-200">
                  <Link
                    className="h-full w-full px-3 py-2"
                    to="/collections/Tommy Hilfiger"
                  >
                    Tommy Hilfiger
                  </Link>
                </li>

                <li className="flex w-full items-center  text-base hover:bg-gray-200">
                  <Link
                    className="h-full w-full px-3 py-2"
                    to="/collections/Calvin Klein"
                  >
                    Calvin Klein
                  </Link>
                </li>

                <li className="flex w-full items-center  text-base hover:bg-gray-200">
                  <Link
                    className="h-full w-full px-3 py-2"
                    to="/collections/Michael Kors"
                  >
                    Michael Kors
                  </Link>
                </li>

                <li className="flex w-full items-center  text-base hover:bg-gray-200">
                  <Link
                    className="h-full w-full px-3 py-2"
                    to="/collections/Hugo Boss"
                  >
                    Hugo Boss
                  </Link>
                </li>
                <li className="flex w-full items-center  text-base hover:bg-gray-200">
                  <Link
                    className="h-full w-full px-3 py-2"
                    to="/collections/Guess"
                  >
                    Guess
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;

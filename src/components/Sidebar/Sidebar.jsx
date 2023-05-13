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
                    to="/collections/woman&activewear"
                  >
                    Activewear
                  </Link>
                </li>

                <li
                  className="flex w-full items-center 
                   text-base hover:bg-gray-200"
                >
                  <Link
                    className="h-full w-full px-3 py-2"
                    to="/collections/dresses-skirts"
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
                    to="/collections/hoodies-sweaters"
                  >
                    Hoodies & Sweaters
                  </Link>
                </li>
              </ul>
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
                    to="/collections/men-hoodies-sweaters"
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
                    to="/collections/men-joggers-sweatpants"
                  >
                    Joggers & Sweatpants
                  </Link>
                </li>

                <li
                  className="flex w-full items-center 
                         text-base hover:bg-gray-200"
                >
                  <Link
                    className="h-full w-full px-3 py-2"
                    to="/collections/men-pants"
                  >
                    Pants
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
              </ul>
            </li>
            <li>
              <ul>
                <h3
                  className="flex w-full items-center 
                         text-lg font-bold"
                >
                  <Link
                    className="h-full w-full px-3 py-2"
                    to="/collections/accessories"
                  >
                    Accessories
                  </Link>
                </h3>

                <hr className="my-2" />

                <li
                  className="flex w-full items-center 
           text-base hover:bg-gray-200"
                >
                  <Link
                    className="h-full w-full px-3 py-2"
                    to="/collections/accessories-jewelry"
                  >
                    Jewelry
                  </Link>
                </li>

                <li
                  className="flex w-full items-center 
           text-base hover:bg-gray-200"
                >
                  <Link
                    className="h-full w-full px-3 py-2"
                    to="/collections/accessories-scarves"
                  >
                    Scarves
                  </Link>
                </li>

                <li
                  className="flex w-full items-center 
           text-base hover:bg-gray-200"
                >
                  <Link
                    className="h-full w-full px-3 py-2"
                    to="/collections/accessories-sunglasses"
                  >
                    Sunglasses
                  </Link>
                </li>

                <li
                  className="flex w-full items-center 
           text-base hover:bg-gray-200"
                >
                  <Link
                    className="h-full w-full px-3 py-2"
                    to="/collections/accessories-hats-belts"
                  >
                    Hats & Belts
                  </Link>
                </li>

                <li
                  className="flex w-full items-center 
           text-base hover:bg-gray-200"
                >
                  <Link
                    className="h-full w-full px-3 py-2"
                    to="/collections/accessories-bags"
                  >
                    Bags
                  </Link>
                </li>
              </ul>
            </li>
            <li>
              <ul>
                <h3
                  className="cursor-pointer flex w-full items-center 
                         text-lg font-bold "
                >
                  <Link
                    className="h-full w-full px-3 py-2"
                    to="/collections/brands"
                  >
                    Brands
                  </Link>
                </h3>

                <hr className="my-2" />
                <li className="flex w-full items-center  text-base hover:bg-gray-200">
                  <Link
                    className="h-full w-full px-3 py-2"
                    to="/collections/brands-tommy-hilfiger"
                  >
                    Tommy Hilfiger
                  </Link>
                </li>

                <li className="flex w-full items-center  text-base hover:bg-gray-200">
                  <Link
                    className="h-full w-full px-3 py-2"
                    to="/collections/brands-calvin-klein"
                  >
                    Calvin Klein
                  </Link>
                </li>

                <li className="flex w-full items-center  text-base hover:bg-gray-200">
                  <Link
                    className="h-full w-full  px-3 py-2"
                    to="/collections/brands-emporio-armani"
                  >
                    Emporio Armani
                  </Link>
                </li>

                <li className="flex w-full items-center  text-base hover:bg-gray-200">
                  <Link
                    className="h-full w-full px-3 py-2"
                    to="/collections/brands-guess"
                  >
                    Guess
                  </Link>
                </li>

                <li className="flex w-full items-center  text-base hover:bg-gray-200">
                  <Link
                    className="h-full w-full px-3 py-2"
                    to="/collections/brands-michael-kors"
                  >
                    Michael Kors
                  </Link>
                </li>

                <li className="flex w-full items-center  text-base hover:bg-gray-200">
                  <Link
                    className="h-full w-full px-3 py-2"
                    to="/collections/brands-hugo-boss"
                  >
                    Hugo Boss
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

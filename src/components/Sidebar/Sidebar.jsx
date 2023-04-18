import React from "react";

function Sidebar() {
  return (
    <div>
      <div className="hidden w-64 h-full  cursor-pointer  p-4 text-gray-900  bg-white dark:bg-gray-800 lg:flex">
        <div className="py-4 overflow-y-auto">
          <ul className="space-y-2 font-medium">
            <li>
              {" "}
              <ul className="mt-2">
                <h3
                  className="flex w-full items-center 
                        px-3 py-2 text-lg font-bold "
                >
                  Women
                </h3>
                <hr className="my-2" />
                <li
                  className="flex w-full items-center 
                        px-3 py-2 text-base hover:bg-gray-200"
                >
                  Tops & Tees
                </li>
                <li
                  className="flex w-full items-center 
                        px-3 py-2 text-base hover:bg-gray-200"
                >
                  Activewear
                </li>
                <li
                  className="flex w-full items-center
                         px-3 py-2 text-base hover:bg-gray-200"
                >
                  Dresses & Skirts
                </li>
                <li
                  className="flex w-full items-center
                         px-3 py-2 text-base hover:bg-gray-200"
                >
                  Hoodies & Sweaters
                </li>
              </ul>
            </li>
            <li>
              <ul className="mt-2">
                <h3
                  className="flex w-full items-center 
                        px-3 py-2 text-lg font-bold"
                >
                  Men
                </h3>
                <hr className="my-2" />
                <li
                  className="flex w-full items-center
                         px-3 py-2 text-base hover:bg-gray-200"
                >
                  Jackets
                </li>
                <li
                  className="flex w-full items-center 
                        px-3 py-2 text-base hover:bg-gray-200"
                >
                  Hoodies & Sweaters
                </li>
                <li
                  className="flex w-full items-center 
                        px-3 py-2 text-base hover:bg-gray-200"
                >
                  Joggers & Sweatpants
                </li>
                <li
                  className="flex w-full items-center 
                        px-3 py-2 text-base hover:bg-gray-200"
                >
                  Pants
                </li>
                <li
                  className="flex w-full items-center 
                        px-3 py-2 text-base hover:bg-gray-200"
                >
                  Tops & Tees
                </li>
              </ul>
            </li>
            <li>
              {" "}
              <ul>
                <h3
                  className="flex w-full items-center 
                        px-3 py-2 text-lg font-bold"
                >
                  Accessories
                </h3>
                <hr className="my-2" />
                <li
                  className="flex w-full items-center 
          px-3 py-2 text-base hover:bg-gray-200"
                >
                  Jewelry
                </li>
                <li
                  className="flex w-full items-center 
          px-3 py-2 text-base hover:bg-gray-200"
                >
                  Scarves
                </li>
                <li
                  className="flex w-full items-center
           px-3 py-2 text-base hover:bg-gray-200"
                >
                  Sunglasses
                </li>
                <li
                  className="flex w-full items-center
           px-3 py-2 text-base hover:bg-gray-200"
                >
                  Hats & Belts
                </li>
                <li
                  className="flex w-full items-center
           px-3 py-2 text-base hover:bg-gray-200"
                >
                  Bags
                </li>
              </ul>
            </li>
            <li>
              {" "}
              <ul>
                <h3
                  className="cursor-pointer flex w-full items-center 
                        px-3 py-2 text-lg font-bold "
                >
                  Brands
                </h3>
                <hr className="my-2" />
                <li className="flex w-full items-center px-3 py-2 text-base hover:bg-gray-200">
                  Tommy Hilfiger
                </li>
                <li className="flex w-full items-center px-3 py-2 text-base hover:bg-gray-200">
                  Calvin Klein
                </li>
                <li className="flex w-full items-center px-3 py-2 text-base hover:bg-gray-200">
                  Emporio Armani
                </li>
                <li className="flex w-full items-center px-3 py-2 text-base hover:bg-gray-200">
                  Guess
                </li>
                <li className="flex w-full items-center px-3 py-2 text-base hover:bg-gray-200">
                  Michael Kors
                </li>
                <li className="flex w-full items-center px-3 py-2 text-base hover:bg-gray-200">
                  Hugo
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

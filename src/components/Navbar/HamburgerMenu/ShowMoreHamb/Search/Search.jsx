import React, { useState } from "react";
import { AiOutlineSearch, AiOutlineClose } from "react-icons/ai";

function Search({ searchOpen, setSearchOpen }) {
  const handleCloseSearchMenu = () => {
    setSearchOpen((current) => !current);
  };
  console.log("searchh");
  return (
    <>
      <div
        className={`fixed top-0 right-0 z-40 w-64 h-screen  overflow-y-auto  bg-white dark:bg-gray-800 ${
          searchOpen ? "flex" : "hidden"
        }`}
      >
        <div className="flex flex-col w-full items-center gap-10">
          <div className="bg-gray-900 w-full inline-flex justify-between p-4 items-start  text-md h-12">
            <span className="h-full flex flex-row items-center">Search</span>
            <AiOutlineClose
              onClick={handleCloseSearchMenu}
              className="float-right text-base  rounded  hover:text-lg hover:bg-gray-700"
            />
            <span className="sr-only">Close search menu</span>
          </div>
          <div className="relative w-[91%]">
            <input
              className="w-full text-start justify-center outline-0 h-9 border-solid  pl-2 border-[1.4px] border-gray-900 bg-gray-100 placeholder-gray-900"
              type="text"
              placeholder="Search for products"
            />
            <AiOutlineSearch className="absolute bottom-[9px] right-5  text-base hove:text-lg text-gray-900 " />
          </div>
        </div>
      </div>
    </>
  );
}

export const MemoizedSearch = React.memo(Search);

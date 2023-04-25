import React from "react";
import { useState, useRef } from "react";
import {
  AiOutlineClose,
  AiOutlineDown,
  AiOutlineSearch,
  AiOutlineUp,
} from "react-icons/ai";
import { MemoizedWomenShowMore } from "./ShowMoreHamb/WomenShowMore";
import { MemoizedMenShowMore } from "./ShowMoreHamb/MenShowMore";
import { MemoizedAccessoriesShowMore } from "./ShowMoreHamb/AccessoriesShowMore";
import { MemoizedBrandsShowMore } from "./ShowMoreHamb/BrandsShowMore";
import { MemoizedAboutFineShowMore } from "./ShowMoreHamb/AboutFineShowMore";

function HamburgerMenu({ hambMenuOpen, setHambMenuOpen, setSearchOpen }) {
  const [showMoreWom, setShowMoreWom] = useState(false);
  const [showMoreMen, setShowMoreMen] = useState(false);
  const [showMoreAccs, setShowMoreAccs] = useState(false);
  const [showMoreBd, setShowMoreBd] = useState(false);
  const [showMoreAbFi, setShowMoreAbFi] = useState(false);

  const handleSearchOpen = () => {
    if (hambMenuOpen) {
      setHambMenuOpen(false);
      setSearchOpen(true);
    }
  };
  console.log("hamb menu");
  return (
    <div>
      <div
        className={`fixed top-0 left-0 z-40 w-64 h-screen p-4 overflow-y-auto  bg-white dark:bg-gray-800 ${
          hambMenuOpen ? "fixed" : "hidden"
        }`}
      >
        <h5 className="text-base font-semibold text-gray-500 uppercase dark:text-gray-400">
          Menu
        </h5>
        <button
          onClick={() => setHambMenuOpen(false)}
          className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 hover:text-base rounded-lg text-sm p-1.5 absolute top-2.5 right-2.5 inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
        >
          <AiOutlineClose />
          <span className="sr-only">Close menu</span>
        </button>
        <div className="py-4 overflow-y-auto">
          <ul className="space-y-2 font-medium">
            <li>
              <div
                onClick={handleSearchOpen}
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                <span className="flex-1 ml-3 whitespace-nowrap">Search</span>
                <div className="text-lg hover:text-xl">
                  <AiOutlineSearch />
                </div>
              </div>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                {/* <svg
                  aria-hidden="true"
                  className="w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path>
                  <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path>
                </svg> */}
                <span className="ml-3">Home</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                {/* <svg
                  aria-hidden="true"
                  className="w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path>
                  <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path>
                </svg> */}
                <span className="ml-3">Shop</span>
              </a>
            </li>
            <li>
              <MemoizedWomenShowMore
                showMoreWom={showMoreWom}
                setShowMoreWom={setShowMoreWom}
              />
            </li>
            <li>
              <MemoizedMenShowMore
                showMoreMen={showMoreMen}
                setShowMoreMen={setShowMoreMen}
              />
            </li>
            <li>
              <MemoizedAccessoriesShowMore
                showMoreAccs={showMoreAccs}
                setShowMoreAccs={setShowMoreAccs}
              />
            </li>
            <li>
              <MemoizedBrandsShowMore
                showMoreBd={showMoreBd}
                setShowMoreBd={setShowMoreBd}
              />
            </li>
            <li>
              <MemoizedAboutFineShowMore
                showMoreAbFi={showMoreAbFi}
                setShowMoreAbFi={setShowMoreAbFi}
              />
            </li>

            <li>
              <a
                href="#"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                {/* <svg aria-hidden="true" className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5 4a3 3 0 00-3 3v6a3 3 0 003 3h10a3 3 0 003-3V7a3 3 0 00-3-3H5zm-1 9v-1h5v2H5a1 1 0 01-1-1zm7 1h4a1 1 0 001-1v-1h-5v2zm0-4h5V8h-5v2zM9 8H4v2h5V8z" clip-rule="evenodd"></path></svg> */}
                <span className="flex-1 ml-3 whitespace-nowrap">Sign Up</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export const MemoizedHamburgerMenu = React.memo(HamburgerMenu);

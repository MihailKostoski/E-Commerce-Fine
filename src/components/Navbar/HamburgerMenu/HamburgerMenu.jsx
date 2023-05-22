import React from "react";
import { useState } from "react";
import { AiOutlineClose, AiOutlineSearch } from "react-icons/ai";
import { MemoizedWomenShowMore } from "./ShowMoreHamb/WomenShowMore";
import { MemoizedMenShowMore } from "./ShowMoreHamb/MenShowMore";
import { MemoizedAccessoriesShowMore } from "./ShowMoreHamb/AccessoriesShowMore";
import { MemoizedBrandsShowMore } from "./ShowMoreHamb/BrandsShowMore";
import { MemoizedAboutFineShowMore } from "./ShowMoreHamb/AboutFineShowMore";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
function HamburgerMenu({ hambMenuOpen, setHambMenuOpen, setSearchOpen }) {
  const [showMoreWom, setShowMoreWom] = useState(false);
  const [showMoreMen, setShowMoreMen] = useState(false);
  const [showMoreAccs, setShowMoreAccs] = useState(false);
  const [showMoreBd, setShowMoreBd] = useState(false);
  const [showMoreAbFi, setShowMoreAbFi] = useState(false);
  const user = useSelector((state) => state.user.currentUser);

  const handleSearchOpen = () => {
    if (hambMenuOpen) {
      setHambMenuOpen(false);
      setSearchOpen(true);
    }
  };

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
              <Link
                to="/"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                <span className="ml-3">Home</span>
              </Link>
            </li>
            <li></li>
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
              <Link
                to={user !== null ? "/login-success" : "/login"}
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                <span className="flex-1 ml-3 whitespace-nowrap">Sign Up</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export const MemoizedHamburgerMenu = React.memo(HamburgerMenu);

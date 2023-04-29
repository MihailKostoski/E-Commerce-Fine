import React, { useState } from "react";
import { CiMenuBurger } from "react-icons/ci";
import { AiOutlineHeart, AiOutlineSearch, AiOutlineDown } from "react-icons/ai";
import { MdPersonOutline } from "react-icons/md";
import { SlBasket } from "react-icons/sl";
import { MemoizedShopNavList } from "./DropDownLists/ShopList";
import { MemoizedAccessoriesList } from "./DropDownLists/AccessoriesList";
import { MemoizedBrandsList } from "./DropDownLists/BrandsList";
import { MemoizedAboutFineList } from "./DropDownLists/AboutFineList";
import { MemoizedHamburgerMenu } from "./HamburgerMenu/HamburgerMenu";
import { MemoizedSearch } from "./HamburgerMenu/ShowMoreHamb/Search/Search";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function Navbar() {
  const [openShop, setOpenShop] = useState(false);
  const [openAcessories, setOpenAcessories] = useState(false);
  const [openBrands, setOpenBrands] = useState(false);
  const [openAboutUs, setOpenAboutUs] = useState(false);
  const [hambMenuOpen, setHambMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const cart = useSelector((state) => state.cart);

  console.log(cart, "hi navbar here");

  return (
    <>
      <div className="flex sticky top-0 z-50 flex-wrap place-items-center h-[80px]">
        <section className="relative mx-auto h-full">
          {/* <!-- navbar --> */}
          <nav className="flex justify-between bg-gray-900 text-white h-full w-screen">
            <div className="px-5  xl:px-12 flex h-full  w-full items-center">
              <Link to="/" className="text-3xl font-bold font-heading" href="#">
                Fine
              </Link>
              {/* <!-- Nav Links --> */}
              <ul className="hidden lg:flex px-4  mx-auto h-full items-center font-semibold font-heading space-x-3">
                <li
                  onMouseLeave={() => setOpenShop(false)}
                  onMouseOver={() => setOpenShop(true)}
                  className="h-full px-8 self-center"
                >
                  <MemoizedShopNavList
                    openShop={openShop}
                    setOpenShop={setOpenShop}
                  />
                </li>
                {/* /////////////// */}
                <li
                  onMouseLeave={() => setOpenAcessories(false)}
                  onMouseOver={() => setOpenAcessories(true)}
                  className="h-full px-8 self-center"
                >
                  <MemoizedAccessoriesList
                    openAcessories={openAcessories}
                    setOpenAcessories={setOpenAcessories}
                  />
                </li>
                {/* /////////////// */}
                <li
                  onMouseLeave={() => setOpenBrands(false)}
                  onMouseOver={() => setOpenBrands(true)}
                  className="h-full px-8 self-center"
                >
                  <MemoizedBrandsList
                    openBrands={openBrands}
                    setOpenBrands={setOpenBrands}
                  />
                </li>
                {/* /////////////////// */}
                <li
                  onMouseLeave={() => setOpenAboutUs(false)}
                  onMouseOver={() => setOpenAboutUs(true)}
                  className="h-full px-8 self-center"
                >
                  <MemoizedAboutFineList
                    openAboutUs={openAboutUs}
                    setOpenAboutUs={setOpenAboutUs}
                  />
                </li>
              </ul>
              {/* <!-- Header Icons --> */}

              <div className="hidden md:flex items-center space-x-5 items-center">
                <a className="hover:text-gray-200 text-xl" href="#">
                  <AiOutlineSearch />
                </a>
                <a className="hover:text-gray-200 text-xl" href="#">
                  <AiOutlineHeart />
                </a>
                <Link
                  to="/cart"
                  className="flex items-center hover:text-gray-200 text-xl"
                >
                  <SlBasket />
                  <span className="flex absolute -mt-5 ml-4">
                    <span className="animate-ping absolute inline-flex h-3 w-3 rounded-full bg-pink-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-pink-500"></span>
                  </span>
                </Link>
                {/* <!-- Sign In / Register      --> */}
                <Link
                  to="/login"
                  className="flex items-center hover:text-gray-200 text-xl"
                  href="#"
                >
                  <MdPersonOutline />
                </Link>
              </div>
            </div>
            {/* <!-- Responsive navbar --> */}
            <Link
              to="/cart"
              className="xl:hidden flex mr-6 items-center  text-xl"
            >
              <SlBasket />
              <span className="flex absolute -mt-5 ml-4">
                <span className="animate-ping absolute inline-flex h-3 w-3 rounded-full bg-pink-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-pink-500"></span>
              </span>
            </Link>
            <button
              className="navbar-burger self-center mr-12 text-xl lg:hidden hover:text-2xl"
              href="#"
              onClick={() => setHambMenuOpen(true)}
            >
              <CiMenuBurger />
            </button>

            <MemoizedHamburgerMenu
              hambMenuOpen={hambMenuOpen}
              setHambMenuOpen={setHambMenuOpen}
              setSearchOpen={setSearchOpen}
            />
            <MemoizedSearch
              searchOpen={searchOpen}
              setSearchOpen={setSearchOpen}
            />
            <div
              onClick={() => setHambMenuOpen(false) || setSearchOpen(false)}
              className={`fixed top-0 left-0 w-screen h-screen bg-black bg-opacity-50 z-10 transition-opacity duration-500
    ${
      hambMenuOpen || searchOpen
        ? "opacity-100 pointer-events-auto"
        : "opacity-0 pointer-events-none"
    }`}
            ></div>
          </nav>
        </section>
      </div>
    </>
  );
}

export default Navbar;

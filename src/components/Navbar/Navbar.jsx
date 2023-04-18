import React, { useState } from "react";
import { CiMenuBurger } from "react-icons/ci";
import { AiOutlineHeart, AiOutlineSearch, AiOutlineDown } from "react-icons/ai";
import { MdPersonOutline } from "react-icons/md";
import { SlBasket } from "react-icons/sl";
import ShopNavList from "./DropDownLists/ShopList";
import AccessoriesList from "./DropDownLists/AccessoriesList";
import BrandsList from "./DropDownLists/BrandsList";
import AboutFineList from "./DropDownLists/AboutFineList";
import HamburgerMenu from "./HamburgerMenu/HamburgerMenu";
import Search from "./HamburgerMenu/ShowMoreHamb/Search/Search";

function Navbar() {
  const [openShop, setOpenShop] = useState(false);
  const [openAcessories, setOpenAcessories] = useState(false);
  const [openBrands, setOpenBrands] = useState(false);
  const [openAboutUs, setOpenAboutUs] = useState(false);
  const [hambMenuOpen, setHambMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  return (
    <>
      <div className="flex sticky top-0 z-50 flex-wrap place-items-center h-[80px]">
        <section className="relative mx-auto h-full">
          {/* <!-- navbar --> */}
          <nav className="flex justify-between bg-gray-900 text-white h-full w-screen">
            <div className="px-5  xl:px-12 flex h-full  w-full items-center">
              <a className="text-3xl font-bold font-heading" href="#">
                Fine
              </a>
              {/* <!-- Nav Links --> */}
              <ul className="hidden lg:flex px-4  mx-auto h-full items-center font-semibold font-heading space-x-14">
                <li className="h-full self-center">
                  <ShopNavList openShop={openShop} setOpenShop={setOpenShop} />
                </li>
                <li className="h-full self-center">
                  <AccessoriesList
                    openAcessories={openAcessories}
                    setOpenAcessories={setOpenAcessories}
                  />
                </li>
                <li className="h-full self-center">
                  <BrandsList
                    openBrands={openBrands}
                    setOpenBrands={setOpenBrands}
                  />
                </li>
                <li className="h-full self-center">
                  <AboutFineList
                    openAboutUs={openAboutUs}
                    setOpenAboutUs={setOpenAboutUs}
                  />
                </li>
              </ul>
              {/* <!-- Header Icons --> */}

              <div className="hidden xl:flex items-center space-x-5 items-center">
                <a className="hover:text-gray-200 text-xl" href="#">
                  <AiOutlineSearch />
                </a>
                <a className="hover:text-gray-200 text-xl" href="#">
                  <AiOutlineHeart />
                </a>
                <a
                  className="flex items-center hover:text-gray-200 text-xl"
                  href="#"
                >
                  <SlBasket />
                  <span className="flex absolute -mt-5 ml-4">
                    <span className="animate-ping absolute inline-flex h-3 w-3 rounded-full bg-pink-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-pink-500"></span>
                  </span>
                </a>
                {/* <!-- Sign In / Register      --> */}
                <a
                  className="flex items-center hover:text-gray-200 text-xl"
                  href="#"
                >
                  <MdPersonOutline />
                </a>
              </div>
            </div>
            {/* <!-- Responsive navbar --> */}
            <a className="xl:hidden flex mr-6 items-center  text-xl" href="#">
              <SlBasket />
              <span className="flex absolute -mt-5 ml-4">
                <span className="animate-ping absolute inline-flex h-3 w-3 rounded-full bg-pink-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-pink-500"></span>
              </span>
            </a>
            <button
              className="navbar-burger self-center mr-12 text-xl lg:hidden hover:text-2xl"
              href="#"
              onClick={() => setHambMenuOpen(true)}
            >
              <CiMenuBurger />
            </button>

            <HamburgerMenu
              hambMenuOpen={hambMenuOpen}
              setHambMenuOpen={setHambMenuOpen}
              setSearchOpen={setSearchOpen}
            />
            <Search searchOpen={searchOpen} setSearchOpen={setSearchOpen} />
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

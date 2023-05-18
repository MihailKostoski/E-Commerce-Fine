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
  const quantity = useSelector((state) => state.cart.quantity);
  const user = useSelector((state) => state.user.currentUser);
  const quantityFav = useSelector((state) => state.favorite.quantityFav);
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

              <div className="hidden lg:flex items-center space-x-5 items-center">
                <div
                  onClick={() => setSearchOpen(true)}
                  className="hover:text-gray-200 text-xl"
                  href="#"
                >
                  <AiOutlineSearch />
                </div>
                <Link
                  to="/favorite"
                  className="flex items-center hover:text-gray-200 text-xl"
                >
                  <AiOutlineHeart className="text-[22px]" />
                  <span className="flex absolute -mt-5 ml-[14px]">
                    <span className="animate-ping absolute inline-flex h-[14px] w-[14px] rounded-full bg-pink-400 opacity-75"></span>
                    <span className="relative items-center justify-center inline-flex rounded-full h-[14px] w-[14px] bg-pink-500  text-white z-40 text-[9px] font-semibold">
                      {quantityFav === 0 ? null : quantityFav}
                    </span>
                  </span>
                </Link>
                <Link
                  to="/cart"
                  className="flex items-center hover:text-gray-200 text-xl"
                >
                  <SlBasket />
                  <span className="flex absolute -mt-5 ml-4">
                    <span className="animate-ping absolute inline-flex h-[14px] w-[14px] rounded-full bg-pink-400 opacity-75"></span>
                    <span className="relative items-center justify-center inline-flex rounded-full h-[14px] w-[14px] bg-pink-500  text-white z-40 text-[9px] font-semibold">
                      {quantity === 0 ? null : quantity}
                    </span>
                  </span>
                </Link>
                {/* <!-- Sign In / Register      --> */}
                <Link
                  to={user !== null ? "/login-success" : "/login"}
                  className="flex items-center hover:text-gray-200 text-xl"
                  href="#"
                >
                  {user !== null ? (
                    <span className="text-xs font-semibold">
                      {" "}
                      {user.username}{" "}
                    </span>
                  ) : (
                    <MdPersonOutline />
                  )}
                </Link>
              </div>
            </div>
            {/* <!-- Responsive navbar --> */}
            <div className="flex flex-row gap-3 items-center">
              <Link
                to="/cart"
                className="lg:hidden flex  items-center  text-xl"
              >
                <SlBasket />
                <span className="flex absolute -mt-5 ml-4">
                  <span className="animate-ping absolute inline-flex h-[14px] w-[14px] rounded-full bg-pink-400 opacity-75"></span>
                  <span className="relative items-center justify-center inline-flex rounded-full h-[14px] w-[14px] bg-pink-500  text-white z-40 text-[9px] font-semibold">
                    {quantity === 0 ? null : quantity}
                  </span>
                </span>
              </Link>
              <Link
                to="/favorite"
                className="lg:hidden hover:text-gray-200 text-xl relative"
                href="#"
              >
                <AiOutlineHeart className="realtive text-[22px] " />
                <span className=" absolute bottom-2 left-[6.9px] top-[6.3px] inline-flex h-[8px] w-[8px] rounded-full opacity-75">
                  <span className="relative text-[9px] items-center justify-center text-pink-400 inline-flex rounded-full h-full w-full  text-white z-40 text-[9px] font-semibold">
                    {quantityFav === 0 ? null : quantityFav}
                  </span>
                </span>
              </Link>
              <button
                className="navbar-burger self-center mr-12 text-xl lg:hidden hover:text-2xl"
                href="#"
                onClick={() => setHambMenuOpen(true)}
              >
                <CiMenuBurger />
              </button>
            </div>
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

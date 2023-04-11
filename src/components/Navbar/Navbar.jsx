import React, { useState } from "react";
import { CiMenuBurger } from "react-icons/ci";
import { AiOutlineHeart, AiOutlineSearch, AiOutlineDown } from "react-icons/ai";
import { MdPersonOutline } from "react-icons/md";
import { SlBasket } from "react-icons/sl";
import ShopNavList from "./DropDownLists/ShopList";
import AccessoriesList from "./DropDownLists/AccessoriesList";
import BrandsList from "./DropDownLists/BrandsList";
import AboutFineList from "./DropDownLists/AboutFineList";

function Navbar() {
  const [openShop, setOpenShop] = useState(false);
  const [openAcessories, setOpenAcessories] = useState(false);
  const [openBrands, setOpenBrands] = useState(false);
  const [openAboutUs, setOpenAboutUs] = useState(false);

  return (
    <>
      <div className="flex flex-wrap place-items-center h-[80px]">
        <section className="relative mx-auto h-full">
          {/* <!-- navbar --> */}
          <nav className="flex justify-between bg-gray-900 text-white h-full w-screen">
            <div className="px-5 xl:px-12 py-6 flex w-full items-center">
              <a className="text-3xl font-bold font-heading" href="#">
                Fine
              </a>
              {/* <!-- Nav Links --> */}
              <ul className="hidden lg:flex px-4 mx-auto font-semibold font-heading space-x-12">
                <li>
                  <ShopNavList openShop={openShop} setOpenShop={setOpenShop} />
                </li>
                <li>
                  <AccessoriesList
                    openAcessories={openAcessories}
                    setOpenAcessories={setOpenAcessories}
                  />
                </li>
                <li>
                  <BrandsList
                    openBrands={openBrands}
                    setOpenBrands={setOpenBrands}
                  />
                </li>
                <li>
                  <AboutFineList
                    openAboutUs={openAboutUs}
                    setOpenAboutUs={setOpenAboutUs}
                  />
                </li>
              </ul>
              {/* <!-- Header Icons --> */}

              <div className="hidden xl:flex items-center space-x-5 items-center">
                <a className="hover:text-gray-200" href="#">
                  <AiOutlineSearch />
                </a>
                <a className="hover:text-gray-200" href="#">
                  <AiOutlineHeart />
                </a>
                <a className="flex items-center hover:text-gray-200" href="#">
                  <SlBasket />
                  <span className="flex absolute -mt-5 ml-4">
                    <span className="animate-ping absolute inline-flex h-3 w-3 rounded-full bg-pink-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-pink-500"></span>
                  </span>
                </a>
                {/* <!-- Sign In / Register      --> */}
                <a className="flex items-center hover:text-gray-200" href="#">
                  <MdPersonOutline />
                </a>
              </div>
            </div>
            {/* <!-- Responsive navbar --> */}
            <a className="xl:hidden flex mr-6 items-center" href="#">
              <SlBasket />
              <span className="flex absolute -mt-5 ml-4">
                <span className="animate-ping absolute inline-flex h-3 w-3 rounded-full bg-pink-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-pink-500"></span>
              </span>
            </a>
            <a className="navbar-burger self-center mr-12 xl:hidden" href="#">
              <CiMenuBurger />
            </a>
          </nav>
        </section>
      </div>
    </>
  );
}

export default Navbar;

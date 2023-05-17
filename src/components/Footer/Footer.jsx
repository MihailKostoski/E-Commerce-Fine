import React from "react";
import { BsTelephone } from "react-icons/bs";
import { MdOutlineMail } from "react-icons/md";
import { Link } from "react-router-dom";
import logo from "../../assets/Images/logo.png";
function Footer() {
  return (
    <>
      <footer className="bg-gray-600 dark:bg-gray-900 mt-10">
        <div className="mx-auto   w-full max-w-screen-xl p-4 py-6 lg:py-8">
          <div className="flex flex-col gap-5 sm:flex-row pr-10 justify-between">
            <div className="self-start text-xs md:mb-0 sm:text-md">
              <Link to="/" className="flex items-center">
                <img src={logo} className="h-8 mr-3" alt="Fine Logo" />
                <span className="text-2xl text-blue-200 font-semibold whitespace-nowrap dark:text-white">
                  Fine
                </span>
              </Link>
              <ul className="text-white mt-3 dark:text-gray-400 font-medium">
                <li className="flex flex-row gap-2 items-center mr-2">
                  <MdOutlineMail />
                  <Link to="#" className="hover:underline">
                    info@Fineshop.com
                  </Link>
                </li>
                <li className="flex flex-row gap-2 items-center">
                  <BsTelephone />
                  <Link to="#" className="hover:underline">
                    416-321-7652
                  </Link>
                </li>
              </ul>
            </div>
            <div className="grid grid-cols-3 gap-3s text-sm sm:grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3 sm:text-md">
              <div>
                <h2 className="mb-4 text-sm font-semibold text-white uppercase dark:text-white">
                  INFORMATION
                </h2>
                <ul className="text-white dark:text-gray-400 ">
                  <li>
                    <Link className="hover:underline">Privacy Policy</Link>
                  </li>
                  <li>
                    <Link className="hover:underline">Terms of Service</Link>
                  </li>
                  <li>
                    <Link className="hover:underline">Shipping</Link>
                  </li>
                </ul>
              </div>
              <div>
                <h2 className="mb-4 text-sm font-semibold text-white uppercase dark:text-white">
                  MY ACCOUNT
                </h2>
                <ul className="text-white dark:text-gray-400 font-medium">
                  <li className="mb-4">
                    <Link className="hover:underline ">Track Your Order</Link>
                  </li>

                  <li>
                    <Link to="/login" className="hover:underline">
                      Sign In/ Sign up
                    </Link>
                  </li>
                  <li>
                    <Link to="/cart" className="hover:underline">
                      Cart
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h2 className="mb-4 self-start text-sm font-semibold text-white uppercase dark:text-white">
                  QUICK LINKS
                </h2>
                <ul className="text-white dark:text-gray-400 font-medium">
                  <li className="mb-4">
                    <Link to="/about" className="hover:underline">
                      About
                    </Link>
                  </li>
                  <li>
                    <Link className="hover:underline">FAQ</Link>
                  </li>

                  <li>
                    <Link className="hover:underline">Contact</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
          <div className="sm:flex sm:items-center sm:justify-between">
            <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
              © 2023{" "}
              <Link to="/" className="hover:underline">
                Fine™
              </Link>
              . All Rights Reserved.
            </span>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;

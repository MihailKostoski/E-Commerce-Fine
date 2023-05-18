import React from "react";
import { Link } from "react-router-dom";

function Cancel() {
  return (
    <div>
      <div className="bg-gray-100 h-screen">
        <div className="bg-white p-6  md:mx-auto">
          <svg
            viewBox="0 0 24 24"
            className="text-red-600 w-16 h-16 mx-auto my-6"
          >
            <path
              fill="currentColor"
              d="M19.707,18.293l-6-6,6-6a1,1,0,0,0-1.414-1.414l-6,6-6-6a1,1,0,0,0-1.414,1.414l6,6-6,6a1,1,0,0,0,1.414,1.414l6-6,6,6A1,1,0,0,0,19.707,18.293Z"
            ></path>
          </svg>

          <div className="text-center">
            <h3 className="md:text-2xl text-base text-gray-900 font-semibold text-center">
              Oops! Your payment has been cancelled
            </h3>
            <p>
              We appreciate your business! If you have any questions, please
              email us at <a href="3">fineorders@example.com</a>.
            </p>

            <div className="py-10 text-center">
              <Link
                to="/"
                className="px-12 bg-gray-600 hover:bg-gray-900 text-white font-semibold py-3"
              >
                GO TO HOME PAGE
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cancel;

import React from "react";
import discountImg from "../../assets/Images/discountImg.jpg";
import discountImgSecond from "../../assets/Images/discountImgSecond.jpg";

function Discount() {
  const scrollToPosition = (position) => {
    window.scrollTo({
      top: position,
      left: 0,
      behavior: "smooth",
    });
  };

  const handleViewCollection = () => {
    scrollToPosition(360);
  };

  return (
    <>
      <div className="w-screen h-[360px] bg-gradient-to-r from-yellow-600  via-gray-300 to-yellow-600 flex flex-row  gap-10 justify-center">
        <img
          className="w-[50%] sm:w-[50%] md:w-[30%] h-full"
          src={discountImg}
          alt="discount image"
        />
        <div className="flex flex-col items-center justify-center pr-6  text-lg whitespace-wrap w-[50%] sm:whitespace-nowrap sm:w-[50%] sm:pr-10 md:w-[30%] md:px-16 md:text-base lg:text-lg">
          <h1>Shop Exclusive Brands in-store and online</h1>

          <button
            onClick={() => handleViewCollection()}
            className="border bg-gray-800 text-xs rounded-full text-gray-200 hover:text-gray-800 hover:bg-gray-200 py-2 px-3 mt-2 sm:text-sm"
          >
            View Collection
          </button>
        </div>
        <img
          className="hidden w-[30%] h-full md:flex"
          src={discountImgSecond}
          alt="discount imageSecond"
        />
      </div>
    </>
  );
}

export default Discount;

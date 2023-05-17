import React from "react";
import spinner from "../../../assets/Images/spinner.gif";
import { BiCartAdd } from "react-icons/bi";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Link } from "react-router-dom";
import { useState, useRef } from "react";
import { AiOutlineMinus, AiOutlinePlus, AiOutlineDown } from "react-icons/ai";
function Product({ product }) {
  const [showModal, setShowModal] = useState(false);

  const handleAddToCart = () => {
    setShowModal(true);
    console.log("clicked");
  };

  const handle = (e, click) => {
    e.preventDefault();
    if (click === "first") {
      console.log("first");
      setShowModal(false);
    } else if (click === "second") {
      e.stopPropagation();
      console.log("second");
    } else if (click === "third") {
      e.stopPropagation();
      console.log("third");
    }
  };

  return (
    <>
      <Link to={`/products/${product._id}`}>
        <div className="flex flex-col justify-center w-72 h-80 p-2 rounded-md bg-gray-100 md:w-60">
          <img
            src={product.img}
            className="w-full object-cover rounded-md h-[75%]"
            alt=""
          />
          <div className="h-[15%] pl-[0.5px]">{product.title}</div>
          <div className="flex flex-row font-bold justify-between px-[0.5px] h-[10%]">
            <div>{product.price}$</div>

            <button
              className=" hover:bg-gray-200 p-1 rounded-xl flex flex-col items-center justify-center "
              onClick={(e) => handleAddToCart(e.preventDefault())}
            >
              <BiCartAdd />
            </button>
            {showModal ? (
              <>
                <div
                  onClick={(e) => handle(e, "first")}
                  className="justify-center w-screen z-50  px-5 h-screen items-center flex overflow-x-hidden overflow-y-auto scrollbar-hide fixed inset-0  outline-none focus:outline-none"
                >
                  <div
                    onClick={(e) => handle(e, "second")}
                    className={`relative w-auto    h-full  my-6   max-w-sm`}
                  >
                    {/*content*/}
                    <div
                      onClick={(e) => handle(e, "third")}
                      className="border-0  rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none"
                    >
                      {/*header*/}
                      <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                        <h3 className="text-lg font-semibold">
                          {product.title}
                        </h3>
                        {/* <button
                          className="p-1 ml-auto bg-gray-200 border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                          onClick={() => setShowModal(false)}
                        >
                          <span className="bg-gray-4000 text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                            ×
                          </span>
                        </button> */}
                      </div>
                      {/*body*/}

                      <div className="relative p-6 flex-auto">
                        <LazyLoadImage
                          className="w-full h-72"
                          src={product.img}
                          alt={product.title}
                        />
                      </div>

                      <div className="flex flex-col items-center justify-center gap-2">
                        <div className="flex ml-6 items-center">
                          <span className="mr-3">Size</span>
                          <div className="relative">
                            <select
                              // onChange={(event) => handleSizeClick(event.target.value)}
                              className="rounded border appearance-none border-gray-400 py-2 focus:outline-none focus:border-red-500 text-base pl-3 pr-10"
                            >
                              <option value="S">S</option>
                              <option value="M">M</option>
                              <option value="L">L</option>
                              <option value="XL">XL</option>
                            </select>
                            <span className="absolute right-0 top-0 h-full w-10 text-center text-gray-600 pointer-events-none flex items-center justify-center">
                              <AiOutlineDown />
                            </span>
                          </div>
                        </div>
                        <span className="mr-3 ">Color:</span>
                        <div className="flex">
                          <button
                            // onClick={() => handleColorClick("BLUE")}
                            className="border-2 border-gray-300 bg-blue-200 rounded-full w-6 h-6 focus:outline-none"
                          ></button>
                          <button
                            // onClick={() => handleColorClick("GRAY")}
                            className="border-2 border-gray-300 ml-1 bg-gray-700 rounded-full w-6 h-6 focus:outline-none"
                          ></button>
                          <button
                            // onClick={() => handleColorClick("RED")}
                            className="border-2 border-gray-300 ml-1 bg-red-500 rounded-full w-6 h-6 focus:outline-none"
                          ></button>
                        </div>
                        <div className="border-solid ml-2 px-2 h-[38px] rounded-full border-[1px] border-gray-500 w-32 flex flex-row justify-center items-center gap-2 ">
                          <button className=" w-[30%] h-full font-bold flex flex-row items-center justify-center ">
                            <AiOutlinePlus />
                          </button>

                          <div className="h-full font-bold w-[40%] inline-flex justify-center items-center text-[20px]">
                            {/* {quantity} */}
                          </div>

                          <button className="font-bold w-[30%] h-full flex flex-row items-center justify-center">
                            <AiOutlineMinus />
                          </button>
                        </div>
                      </div>
                      {/*footer*/}
                      <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                        <button
                          className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                          type="button"
                          onClick={() => setShowModal(false)}
                        >
                          Close
                        </button>
                        <button
                          className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                          type="button"
                          onClick={() => setShowModal(false)}
                        >
                          Save Changes
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
              </>
            ) : null}
          </div>
        </div>
      </Link>
    </>
  );
}

export default Product;

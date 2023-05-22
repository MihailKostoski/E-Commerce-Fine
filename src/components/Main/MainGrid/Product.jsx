import React from "react";
import { BiCartAdd } from "react-icons/bi";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Link } from "react-router-dom";
import { useState, useMemo } from "react";
import { AiOutlineMinus, AiOutlinePlus, AiOutlineDown } from "react-icons/ai";
import { BsFillHeartFill } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { addProduct } from "../../../redux/cartSlice";
import { addFavorite } from "../../../redux/favoriteSlice";
function Product({ product }) {
  const [showModal, setShowModal] = useState(false);
  const [size, setSize] = useState();
  const [color, setColor] = useState();
  const [quantity, setQuantity] = useState(1);
  const [toggleFavorite, setToggleFavorite] = useState(false);
  const [price, setPrice] = useState();
  const dispatch = useDispatch();

  const handleOpen = () => {
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

  const handleFavorite = (heart, click) => {
    dispatch(addFavorite({ heart, click }));
    if (click === "add") {
      setToggleFavorite(true);
    }
    if (click === "remove") {
      setToggleFavorite(false);
    }
  };

  const handleAddToCart = (product) => {
    if (color === undefined || price === undefined || size === undefined) {
      setColor(product?.color);
      setPrice(product?.price);
      setSize(product?.size);
    }

    dispatch(
      addProduct({
        ...product,
        quantity,
        color: color || product?.color,
        price: price || product?.price,
        size: size || product?.size,
      })
    );
    setColor(product?.color);
    setPrice(product?.price);
    setSize(product?.size);
    setQuantity(1);
  };

  const handleProductQuantiy = (click) => {
    const currentTotalPrice = product.price * quantity;
    if (click === "PLUS") {
      setQuantity(quantity + 1);
      setPrice(currentTotalPrice + product.price);
    } else if (quantity > 1 && click === "MINUS") {
      setQuantity(quantity - 1);
      setPrice(currentTotalPrice - product.price);
    }
  };
  const handleSizeClick = useMemo(
    () => (size) => {
      setSize(size);
    },
    [size]
  );
  const handleColorClick = useMemo(
    () => (color) => {
      setColor(color);
    },
    [color]
  );

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
            <div>{product.price.toFixed(2)}$</div>

            <button
              className=" hover:bg-gray-200 p-1 rounded-xl flex flex-col items-center justify-center "
              onClick={(e) => handleOpen(e.preventDefault())}
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
                    <div
                      onClick={(e) => handle(e, "third")}
                      className="border-0  rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none"
                    >
                      <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                        <h3 className="text-lg font-semibold">
                          {product.title}
                        </h3>
                      </div>

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
                              onChange={(event) =>
                                handleSizeClick(event.target.value)
                              }
                              className="rounded border appearance-none border-gray-400 py-2 focus:outline-none focus:border-red-500 text-base pl-3 pr-10"
                            >
                              <option value={`${product?.sizeAvilable[0]}`}>
                                {product?.sizeAvilable[0]}
                              </option>
                              <option value={`${product?.sizeAvilable[1]}`}>
                                {product?.sizeAvilable[1]}
                              </option>
                              <option value={`${product?.sizeAvilable[2]}`}>
                                {product?.sizeAvilable[2]}
                              </option>
                              <option value={`${product?.sizeAvilable[3]}`}>
                                {product?.sizeAvilable[3]}
                              </option>
                            </select>
                            <span className="absolute right-0 top-0 h-full w-10 text-center text-gray-600 pointer-events-none flex items-center justify-center">
                              <AiOutlineDown />
                            </span>
                          </div>
                        </div>
                        <span className="mr-3 ">Color:</span>
                        <div className="flex">
                          <button
                            className={`border-2 border-gray-900
                  rounded-full w-6 h-6 focus:outline-none`}
                            style={{
                              backgroundColor: `${
                                color ? color : product?.color
                              }`,
                              filter: "brightness(120%)",
                            }}
                          ></button>
                          {product?.colorsAvilable.length > 0 ? (
                            <div>
                              <button
                                onClick={() =>
                                  handleColorClick(product?.colorsAvilable[0])
                                }
                                style={{
                                  backgroundColor: `${product?.colorsAvilable[0]}`,
                                  filter: "brightness(120%)",
                                }}
                                className={`border-2 border-gray-400 rounded-full w-6 h-6 focus:outline-none`}
                              ></button>
                              <button
                                onClick={() =>
                                  handleColorClick(product?.colorsAvilable[1])
                                }
                                style={{
                                  backgroundColor: `${product?.colorsAvilable[1]}`,
                                  filter: "brightness(120%)",
                                }}
                                className={`border-2  border-gray-400 rounded-full w-6 h-6 focus:outline-none`}
                              ></button>
                              <button
                                onClick={() =>
                                  handleColorClick(product?.colorsAvilable[2])
                                }
                                style={{
                                  backgroundColor: `${product?.colorsAvilable[2]}`,
                                  filter: "brightness(120%)",
                                }}
                                className={`border-2 border-gray-400   rounded-full w-6 h-6 focus:outline-none`}
                              ></button>
                            </div>
                          ) : null}
                        </div>
                        <div className="flex flex-row justify-center items-center">
                          <span className="title-font font-medium text-2xl text-gray-900 flex flex-rwo justify-center items-center">
                            {price ? price.toFixed() : product?.price}$
                          </span>

                          <div className="border-solid ml-2 px-2 h-[38px] rounded-full border-[1px] border-gray-500 w-32 flex flex-row justify-center items-center gap-2 ">
                            <button
                              onClick={() => handleProductQuantiy("PLUS")}
                              className=" w-[30%] h-full font-bold flex flex-row items-center justify-center "
                            >
                              <AiOutlinePlus />
                            </button>

                            <div className="h-full font-bold w-[40%] inline-flex justify-center items-center text-[20px]">
                              {quantity}
                            </div>

                            <button
                              onClick={() => handleProductQuantiy("MINUS")}
                              className="font-bold w-[30%] h-full flex flex-row items-center justify-center"
                            >
                              <AiOutlineMinus />
                            </button>
                          </div>

                          <button
                            onClick={() =>
                              handleFavorite(
                                product,
                                toggleFavorite === false
                                  ? "add"
                                  : toggleFavorite === true
                                  ? "remove"
                                  : null
                              )
                            }
                            className="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4"
                          >
                            <BsFillHeartFill
                              className={`${
                                toggleFavorite === true
                                  ? "text-red-600"
                                  : "text-gray-500"
                              }`}
                            />
                          </button>
                        </div>
                      </div>

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
                          onClick={() => handleAddToCart(product)}
                        >
                          Add to cart
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

import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import StripeCheckout from "react-stripe-checkout";
import {
  handleQuantityClickRedux,
  removeFromCartOnMinus,
  handleColorClickRedux,
  handleSizeClickRedux,
} from "../../redux/cartSlice";
import { addOrder } from "../../redux/orderSlice";
import { useDispatch } from "react-redux";
import { BsCartXFill } from "react-icons/bs";
import { RiDeleteBin6Line } from "react-icons/ri";
import { Navbar } from "../indexComp";
import { AiOutlineDown } from "react-icons/ai";
import { userRequest } from "../../Url/url";

function Cart() {
  const cartProducts = useSelector((state) => state.cart.products);
  const user = useSelector((state) => state.user.currentUser);
  const total = useSelector((state) => state.cart.total);
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const [waiting, setWaiting] = useState(false);
  const [stripeToken, setStripeToken] = useState(null);
  const navigate = useNavigate();
  const KEY =
    "pk_test_51N6wrtBpKW3TjKXnezUjMy3lByr0IqfvNLHAEm1A1KELLqbTgIs4rRfYdTryZj459YfM82YMG5BZRSXqlhE5TZoZ00l70rYSgs"; //// I am sharing this key for review purposes

  const onToken = (token) => {
    setStripeToken(token);
  };

  useEffect(() => {
    const makeRequest = async () => {
      try {
        const res = await userRequest.post("fine/checkout/payment", {
          tokenId: stripeToken.id,
          amount: total * 100,
        });

        navigate("/success", {
          state: { stripeData: res.data, products: cart },
        });
      } catch (error) {
        console.error("Error making payment:", error);
      }
    };

    dispatch(addOrder(true));
    stripeToken && makeRequest();
  }, [stripeToken, total, navigate, dispatch]);
  const handleProductQuantity = (product, click) => {
    dispatch(handleQuantityClickRedux({ product, click }));
  };

  const handleProductColor = (product, color) => {
    dispatch(handleColorClickRedux({ product, color }));
  };
  const handleProductSize = (product, event) => {
    let size = event.target.value;
    dispatch(handleSizeClickRedux({ product, size }));
  };
  const handleRemove = (product) => {
    dispatch(removeFromCartOnMinus(product));
  };

  return (
    <>
      <Navbar />
      {cartProducts?.length > 0 ? (
        <div className="h-screen bg-gray-100 pt-20">
          <h1 className="mb-10 text-center text-2xl font-bold">Cart Items</h1>
          <div className="mx-auto max-w-5xl justify-center px-6 md:flex md:space-x-6 xl:px-0">
            <div className="rounded-lg md:w-2/3">
              {cartProducts?.map((productCart) => (
                <div
                  key={productCart?.cartId}
                  className="justify-between  mb-6 rounded-lg bg-white p-6 shadow-md sm:flex sm:justify-start"
                >
                  <img
                    src={productCart?.img}
                    alt="product-image"
                    className="w-[200px] h-[220px] rounded-lg sm:w-40"
                  />

                  <div className="sm:ml-4 sm:flex sm:w-full sm:justify-between">
                    <div className="mt-5 sm:mt-0">
                      <h2 className="text-lg font-bold text-gray-900">
                        {productCart?.title}
                      </h2>

                      <p>{productCart?.description}</p>
                      <div className="flex flex-col mt-2 gap-4 md:flex-row">
                        <div className="flex flex-row justify-start gap-2  items-center">
                          <div className="flex items-center border-gray-100">
                            <span
                              onClick={() =>
                                handleProductQuantity(productCart, "MINUS")
                              }
                              className="cursor-pointer rounded-l bg-gray-100 py-1 px-3.5 duration-100 hover:bg-blue-500 hover:text-blue-50"
                            >
                              {productCart?.quantity === 1 ? (
                                <button
                                  onClick={() => handleRemove(productCart)}
                                >
                                  <RiDeleteBin6Line />
                                </button>
                              ) : (
                                <span>-</span>
                              )}
                            </span>
                            <div>{productCart?.quantity}</div>
                            <span
                              onClick={() =>
                                handleProductQuantity(productCart, "PLUS")
                              }
                              className="cursor-pointer rounded-r bg-gray-100 py-1 px-3 duration-100 hover:bg-blue-500 hover:text-blue-50"
                            >
                              +
                            </span>
                          </div>

                          <div className="text-sm font-bold">
                            ${productCart?.price?.toFixed(2)}
                          </div>
                        </div>
                        <div className="flex justify-start  flex-row gap-3 items-center">
                          <span className="">Size</span>
                          <span className="bg-gray-200 px-1 ">
                            {productCart?.size}
                          </span>
                          {productCart?.size !== "one size" ? (
                            <div className="relative">
                              <select
                                onChange={(event) =>
                                  handleProductSize(productCart, event)
                                }
                                className="rounded border appearance-none border-gray-400 py-2 focus:outline-none focus:border-red-500 text-base pl-3 pr-10"
                              >
                                <option
                                  value={`${productCart?.sizeAvilable[0]}`}
                                >
                                  {productCart?.sizeAvilable[0]}
                                </option>
                                <option
                                  value={`${productCart?.sizeAvilable[1]}`}
                                >
                                  {productCart?.sizeAvilable[1]}
                                </option>
                                <option
                                  value={`${productCart?.sizeAvilable[2]}`}
                                >
                                  {productCart?.sizeAvilable[2]}
                                </option>
                                <option
                                  value={`${productCart?.sizeAvilable[3]}`}
                                >
                                  {productCart?.sizeAvilable[3]}
                                </option>
                              </select>
                              <span className="absolute  right-0 top-0 h-full w-10 text-center text-gray-500 pointer-events-none flex items-center justify-center">
                                <AiOutlineDown />
                              </span>
                            </div>
                          ) : null}
                        </div>
                      </div>
                      <div className="flex flex-row items-center justify-start ml-2 mt-3 gap-2">
                        <button
                          onClick={() => handleRemove(productCart)}
                          className="bg-red-300 p-1 rounded-full"
                        >
                          <RiDeleteBin6Line />
                        </button>
                        <div className="flex flex-row items-center">
                          <span className="mr-3">Color</span>
                          <button
                            className={`border-2 border-gray-900
                  rounded-full w-6 h-6 focus:outline-none`}
                            style={{
                              backgroundColor: `${productCart?.color}`,
                              filter: "brightness(120%)",
                            }}
                          ></button>
                          {productCart?.colorsAvilable.length > 0 ? (
                            <div>
                              <button
                                onClick={() =>
                                  handleProductColor(
                                    productCart,
                                    productCart?.colorsAvilable[0]
                                  )
                                }
                                style={{
                                  backgroundColor: `${productCart?.colorsAvilable[0]}`,
                                  filter: "brightness(120%)",
                                }}
                                className={`border-2 border-gray-400 rounded-full w-6 h-6 focus:outline-none`}
                              ></button>
                              <button
                                onClick={() =>
                                  handleProductColor(
                                    productCart,
                                    productCart?.colorsAvilable[1]
                                  )
                                }
                                style={{
                                  backgroundColor: `${productCart?.colorsAvilable[1]}`,
                                  filter: "brightness(120%)",
                                }}
                                className={`border-2  border-gray-400 rounded-full w-6 h-6 focus:outline-none`}
                              ></button>
                              <button
                                onClick={() =>
                                  handleProductColor(
                                    productCart,
                                    productCart?.colorsAvilable[2]
                                  )
                                }
                                style={{
                                  backgroundColor: `${productCart?.colorsAvilable[2]}`,
                                  filter: "brightness(120%)",
                                }}
                                className={`border-2 border-gray-400   rounded-full w-6 h-6 focus:outline-none`}
                              ></button>
                            </div>
                          ) : null}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 h-full rounded-lg border bg-white p-6 shadow-md md:mt-0 md:w-1/3">
              <hr className="my-4" />
              <div className="flex justify-between">
                <p className="text-lg font-bold">Total</p>
                <div className="">
                  <p className="mb-1 text-lg font-bold">${total?.toFixed(2)}</p>
                </div>
              </div>
              {user !== null ? (
                <StripeCheckout
                  name="Fine"
                  // image=""
                  billingAddress
                  shippingAddress
                  description={`Your total is $${cart?.total?.toFixed(2)}`}
                  amount={cart?.total * 100}
                  token={onToken}
                  stripeKey={KEY}
                >
                  <button className="bg-gray-400 px-1 rounded-sm">
                    CHECKOUT NOW
                  </button>
                </StripeCheckout>
              ) : (
                <button className="bg-gray-400 px-1 rounded-sm">
                  <Link to="/login">Login: CHECKOUT NOW</Link>
                </button>
              )}
            </div>
          </div>
        </div>
      ) : waiting ? (
        <div>
          <div className="mb-1 text-base font-medium dark:text-white">
            Default
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4 dark:bg-gray-700">
            <div
              className="bg-blue-600 h-2.5 rounded-full dark:bg-blue-500"
              style="width: 45%"
            ></div>
          </div>
        </div>
      ) : (
        <div className="flex flex-col relative h-screen w-screen gap-2 items-center justify-center">
          <div className="flex flex-row items-center justify-center gap-2">
            <span className="font-bold text-gray-500"> Your cart is empty</span>
            <span className="text-gray-800">
              <BsCartXFill />
            </span>
          </div>
          <button className="bg-green-300 text-gray-500 font-semibold text-[12px] p-1 rounded-full">
            <Link to="/">RETURN TO SHOP</Link>
          </button>
        </div>
      )}
    </>
  );
}

export default Cart;

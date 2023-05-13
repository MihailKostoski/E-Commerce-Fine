import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import StripeCheckout from "react-stripe-checkout";
import {
  handleQuantityClickRedux,
  removeFromCart,
  handleColorClickRedux,
  handleSizeClickRedux,
} from "../../redux/cartSlice";
import { useDispatch } from "react-redux";
import { BsCartXFill } from "react-icons/bs";
import { RiDeleteBin6Line } from "react-icons/ri";
import { Navbar } from "../indexComp";
import { AiOutlineDown } from "react-icons/ai";
import { userRequest } from "../../Url/url";

import axios from "axios";
function Cart() {
  const cartProducts = useSelector((state) => state.cart.products);
  const total = useSelector((state) => state.cart.total);

  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const [stripeToken, setStripeToken] = useState(null);
  const navigate = useNavigate();

  const onToken = (token) => {
    setStripeToken(token);
  };

  const KEY =
    "pk_test_51N6wrtBpKW3TjKXnezUjMy3lByr0IqfvNLHAEm1A1KELLqbTgIs4rRfYdTryZj459YfM82YMG5BZRSXqlhE5TZoZ00l70rYSgs";

  useEffect(() => {
    const makeRequest = async () => {
      try {
        const res = await userRequest.post("/checkout/payment", {
          tokenId: stripeToken.id,
          amount: 500,
        });
        navigate("/success", {
          stripeData: res.data,
          products: cart,
        });
        console.log(res.data);
      } catch {}
    };
    stripeToken && makeRequest();
  }, [stripeToken, cart.total, navigate]);

  const handleProductQuantity = (product, click) => {
    dispatch(handleQuantityClickRedux({ product, click }));
    console.log("hhhhhhh", product.price, click);
  };

  const handleProductColor = (product, color) => {
    dispatch(handleColorClickRedux({ product, color }));
    console.log("hhhhhhh", product.color);
  };
  const handleProductSize = (product, event) => {
    let size = event.target.value;
    dispatch(handleSizeClickRedux({ product, size }));

    console.log("hhhhhhh", product.size);
  };
  const handleRemove = (product) => {
    dispatch(removeFromCart(product));
  };

  console.log(cartProducts, "from cart");

  return (
    <>
      <Navbar />
      {cartProducts.length > 0 ? (
        <div className="h-screen bg-gray-100 pt-20">
          <h1 className="mb-10 text-center text-2xl font-bold">Cart Items</h1>
          <div className="mx-auto max-w-5xl justify-center px-6 md:flex md:space-x-6 xl:px-0">
            <div className="rounded-lg md:w-2/3">
              {cartProducts?.map((productCart) => (
                <div
                  key={productCart.cartId}
                  className="justify-between mb-6 rounded-lg bg-white p-6 shadow-md sm:flex sm:justify-start"
                >
                  <img
                    src={productCart.img}
                    alt="product-image"
                    className="w-[200px] h-[220px] rounded-lg sm:w-40"
                  />

                  <div className="sm:ml-4 sm:flex sm:w-full sm:justify-between">
                    <div className="mt-5 sm:mt-0">
                      <h2 className="text-lg font-bold text-gray-900">
                        {productCart.title}
                      </h2>

                      <p>{productCart.description}</p>
                      <div className="flex flex-row items-center justify-center gap-2">
                        <button
                          onClick={() => handleRemove(productCart)}
                          className="bg-red-300 p-1 rounded-full"
                        >
                          <RiDeleteBin6Line />
                        </button>
                        <div className="flex flex-row items-center">
                          <span className="mr-3">Color</span>
                          {/* <button
                            onClick={() =>
                              handleProductColor(productCart?.colorsAvilable[0])
                            }
                            className={`border-2 border-gray-900 bg-${
                              color ? color : productCart?.color
                            }-500 rounded-full w-6 h-6 focus:outline-none`}
                          ></button> */}
                          <button
                            onClick={() =>
                              handleProductColor(
                                productCart,
                                productCart?.colorsAvilable[0]
                              )
                            }
                            className={`border-2 border-gray-300 bg-${productCart?.colorsAvilable[0]}-500 rounded-full w-6 h-6 focus:outline-none`}
                          ></button>
                          <button
                            onClick={() =>
                              handleProductColor(
                                productCart,
                                productCart?.colorsAvilable[1]
                              )
                            }
                            className={`border-2 border-gray-300  bg-${productCart?.colorsAvilable[1]}-500 rounded-full w-6 h-6 focus:outline-none`}
                          ></button>
                          <button
                            onClick={() =>
                              handleProductColor(
                                productCart,
                                productCart?.colorsAvilable[2]
                              )
                            }
                            className={`border-2 border-gray-300  bg-${productCart?.colorsAvilable[2]}-300 rounded-full w-6 h-6 focus:outline-none`}
                          ></button>
                        </div>
                        {/* <div
                          className={`border-2 border-gray-300 ml-1 bg-${productCart.color} rounded-full w-6 h-6 focus:outline-none`}
                        ></div> */}
                        <div className="flex ml-6 items-center">
                          <span className="mr-3">Size</span>
                          <div className="">
                            <select
                              onChange={(event) =>
                                handleProductSize(productCart, event)
                              }
                              className="rounded border appearance-none border-gray-400 py-2 focus:outline-none focus:border-red-500 text-base pl-3 pr-10"
                            >
                              <option value={`${productCart?.sizeAvilable[0]}`}>
                                {productCart?.sizeAvilable[0]}
                              </option>
                              <option value={`${productCart?.sizeAvilable[1]}`}>
                                {productCart?.sizeAvilable[1]}
                              </option>
                              <option value={`${productCart?.sizeAvilable[2]}`}>
                                {productCart?.sizeAvilable[2]}
                              </option>
                              <option value={`${productCart?.sizeAvilable[3]}`}>
                                {productCart?.sizeAvilable[3]}
                              </option>
                            </select>
                            <span className="absolute right-0 top-0 h-full w-10 text-center text-gray-600 pointer-events-none flex items-center justify-center">
                              <AiOutlineDown />
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="mt-4 flex justify-between sm:space-y-6 sm:mt-0 sm:block sm:space-x-6">
                      <div className="flex items-center border-gray-100">
                        <span
                          onClick={() =>
                            handleProductQuantity(productCart, "MINUS")
                          }
                          className="cursor-pointer rounded-l bg-gray-100 py-1 px-3.5 duration-100 hover:bg-blue-500 hover:text-blue-50"
                        >
                          {productCart.quantity === 1 ? (
                            <button onClick={() => handleRemove(productCart)}>
                              <RiDeleteBin6Line />
                            </button>
                          ) : (
                            <span>-</span>
                          )}
                        </span>
                        <div>{productCart.quantity}</div>
                        <span
                          onClick={() =>
                            handleProductQuantity(productCart, "PLUS")
                          }
                          className="cursor-pointer rounded-r bg-gray-100 py-1 px-3 duration-100 hover:bg-blue-500 hover:text-blue-50"
                        >
                          {" "}
                          +{" "}
                        </span>
                      </div>

                      <div className="text-sm font-bold">
                        ${productCart.price}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 h-full rounded-lg border bg-white p-6 shadow-md md:mt-0 md:w-1/3">
              <div className="mb-2 flex justify-between">
                <p className="text-gray-700">Subtotal</p>
                <p className="text-gray-700">$129.99</p>
              </div>
              <div className="flex justify-between">
                <p className="text-gray-700">Shipping</p>
                <p className="text-gray-700">$4.99</p>
              </div>
              <hr className="my-4" />
              <div className="flex justify-between">
                <p className="text-lg font-bold">Total</p>
                <div className="">
                  <p className="mb-1 text-lg font-bold">${total}</p>
                  <p className="text-sm text-gray-700">including VAT</p>
                </div>
              </div>
              <StripeCheckout
                name="Fine"
                // image=""
                billingAddress
                shippingAddress
                description={`Your total is $${cart.total}`}
                amount={cart.total * 100}
                token={onToken}
                stripeKey={KEY}
              >
                <button>CHECKOUT NOW</button>
              </StripeCheckout>
            </div>
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

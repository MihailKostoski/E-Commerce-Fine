import React, { useEffect, useState, useMemo } from "react";
import { useParams } from "react-router-dom";
import { BsFillHeartFill } from "react-icons/bs";
import { FaFacebookF, FaTwitter } from "react-icons/fa";
import axios from "axios";
import {
  AiOutlineDown,
  AiOutlineMinus,
  AiOutlinePlus,
  AiTwotoneMessage,
} from "react-icons/ai";
import { RiArrowDropUpFill } from "react-icons/ri";
import { MemoizedStar } from "./Star";
import { products } from "../../product";
import { productS } from "../../productS";
import { useSelector } from "react-redux";
import { addProduct } from "../../redux/cartSlice";
import { useDispatch } from "react-redux";
import { Navbar } from "../indexComp";
function ProductDetails() {
  const cart = useSelector((state) => state.cart.products);
  console.log(cart, "cart");
  const [rate, setRate] = useState(3);
  const { id } = useParams();

  const [quantity, setQuantity] = useState(1);
  const [productDetail, setProductDetail] = useState();
  const [productDetailSecond, setProductDetailSecond] = useState();
  const [price, setPrice] = useState();
  const [totalPrice, setTotalPrice] = useState(0);
  const [color, setColor] = useState();

  const [size, setSize] = useState("S");
  console.log(productDetail, "detail");

  useEffect(() => {
    axios
      .get(`http://localhost:5000/fine/products/find/${id}`)
      .then((response) => {
        setProductDetail(response.data);
      });
  }, [id]);

  const dispatch = useDispatch();
  const handleAddToCart = (product) => {
    if (color || price || size === undefined) {
      setColor(productDetail?.color);

      setPrice(productDetail?.price);
      setSize(productDetail?.size);
      dispatch(
        addProduct({
          ...product,

          color,
          price,
          size,
        })
      );
    } else {
      dispatch(
        addProduct({
          ...product,
        })
      );
    }
  };

  const handleColorClick = useMemo(
    () => (color) => {
      setColor(color);
    },
    [color]
  );
  const handleSizeClick = useMemo(
    () => (size) => {
      setSize(size);
    },
    [size]
  );

  const handleProductQuantiy = (click) => {
    const currentTotalPrice = productDetail.price * quantity;
    if (click === "PLUS") {
      setQuantity(quantity + 1);
      setPrice(currentTotalPrice + productDetail.price);
    } else if (quantity > 1 && click === "MINUS") {
      setQuantity(quantity - 1);
      setPrice(currentTotalPrice - productDetail.price);
    }
  };
  console.log(price, "pri");
  console.log(size, "size");
  console.log(color, "Tpri");
  return (
    <>
      <Navbar />
      <section className="text-gray-700 body-font overflow-hidden bg-white">
        <div className="container px-5 py-24 mx-auto">
          <div className="lg:w-4/5 mx-auto flex flex-wrap">
            <img
              alt="ecommerce"
              src={productDetail?.img}
              className="lg:w-1/2 w-full object-cover object-center rounded border border-gray-200"
            />
            <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
              <h2 className="text-sm title-font text-gray-500 tracking-widest">
                {productDetail?.name}
              </h2>
              <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
                {productDetail?.title}
              </h1>
              <div className="flex mb-4">
                <span className="flex items-center">
                  <MemoizedStar rate={rate} setRate={setRate} />
                  <span className="text-gray-600 ml-3">4 Reviews</span>
                </span>
                <span className="flex ml-3 pl-3 py-2 border-l-2 border-gray-200">
                  <a className="text-gray-500">
                    <FaFacebookF />
                  </a>
                  <a className="ml-2 text-gray-500">
                    <FaTwitter />
                  </a>
                  <a className="ml-2 text-gray-500">
                    <AiTwotoneMessage />
                  </a>
                </span>
              </div>
              <p className="leading-relaxed">
                Fam locavore kickstarter distillery. Mixtape chillwave tumeric
                sriracha taximy chia microdosing tilde DIY. XOXO fam indxgo
                juiceramps cornhole raw denim forage brooklyn. Everyday carry +1
                seitan poutine tumeric. Gastropub blue bottle austin listicle
                pour-over, neutra jean shorts keytar banjo tattooed umami
                cardigan.
              </p>
              <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-200 mb-5">
                <div className="flex flex-row gap-1">
                  <span className="mr-3">Color</span>
                  <button
                    onClick={() =>
                      handleColorClick(productDetail?.colorsAvilable[0])
                    }
                    className={`border-2 border-gray-900 bg-${
                      color ? color : productDetail?.color
                    }-500 rounded-full w-6 h-6 focus:outline-none`}
                  ></button>
                  <button
                    onClick={() =>
                      handleColorClick(productDetail?.colorsAvilable[0])
                    }
                    className={`border-2 border-gray-300 bg-${productDetail?.colorsAvilable[0]}-500 rounded-full w-6 h-6 focus:outline-none`}
                  ></button>
                  <button
                    onClick={() =>
                      handleColorClick(productDetail?.colorsAvilable[1])
                    }
                    className={`border-2 border-gray-300  bg-${productDetail?.colorsAvilable[1]}-500 rounded-full w-6 h-6 focus:outline-none`}
                  ></button>
                  <button
                    onClick={() =>
                      handleColorClick(productDetail?.colorsAvilable[2])
                    }
                    className={`border-2 border-gray-300  bg-${productDetail?.colorsAvilable[2]}-300 rounded-full w-6 h-6 focus:outline-none`}
                  ></button>
                </div>
                <div className="flex ml-6 items-center">
                  <span className="mr-3">Size</span>
                  <div className="relative">
                    <select
                      onChange={(event) => handleSizeClick(event.target.value)}
                      className="rounded border appearance-none border-gray-400 py-2 focus:outline-none focus:border-red-500 text-base pl-3 pr-10"
                    >
                      <option value={`${productDetail?.sizeAvilable[0]}`}>
                        {productDetail?.sizeAvilable[0]}
                      </option>
                      <option value={`${productDetail?.sizeAvilable[1]}`}>
                        {productDetail?.sizeAvilable[1]}
                      </option>
                      <option value={`${productDetail?.sizeAvilable[2]}`}>
                        {productDetail?.sizeAvilable[2]}
                      </option>
                      <option value={`${productDetail?.sizeAvilable[3]}`}>
                        {productDetail?.sizeAvilable[3]}
                      </option>
                    </select>
                    <span className="absolute right-0 top-0 h-full w-10 text-center text-gray-600 pointer-events-none flex items-center justify-center">
                      <AiOutlineDown />
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex flex-row justify-center items-center">
                <span className="title-font font-medium text-2xl text-gray-900 flex flex-rwo justify-center items-center">
                  {price ? price : productDetail?.price}$
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
                  onClick={() => handleAddToCart(productDetail)}
                  className="flex ml-auto text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded"
                >
                  Button
                </button>
                <button className="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4">
                  <BsFillHeartFill />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default ProductDetails;

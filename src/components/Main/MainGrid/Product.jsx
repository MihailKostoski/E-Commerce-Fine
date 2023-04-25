import React from "react";
import spinner from "../../../assets/Images/spinner.gif";
import { BiCartAdd } from "react-icons/bi";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addProduct } from "../../../redux/cartSlice";

function Product({ product, vr }) {
  const dispatch = useDispatch();
  const handleAddToCart = (product) => {
    console.log("clicked");
  };
  return (
    <div>
      <div className="w-64 bg-white shadow-md rounded-xl duration-500 hover:scale-r105 hover:shadow-xl">
        <div>
          {/* <Link to={`/collections/${product?.category}/${product?.name}`}> */}

          <LazyLoadImage
            src={product?.image}
            alt="Product"
            className="h-80 w-full object-cover rounded-t-xl"
            placeholderSrc={spinner}
          />

          <div className="px-4 py-3 w-full">
            <span className="text-gray-400 mr-3 uppercase text-xs">Brand</span>
            <Link to={`/collections/${product?.category}/${product?.id}`}>
              <p className="text-lg font-bold text-black truncate block capitalize">
                {product?.name}
              </p>
            </Link>
            <div className="flex items-center">
              <p className="text-lg font-semibold text-black cursor-auto my-3">
                $149
              </p>
              <div>
                <p className="text-sm text-gray-600 cursor-auto ml-2">
                  {product?.price}
                </p>
              </div>

              <div
                onClick={() => handleAddToCart(product)}
                className="ml-auto cursor-pointer"
              >
                <BiCartAdd />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;

import React from "react";
import spinner from "../../../assets/Images/spinner.gif";
import { BiCartAdd } from "react-icons/bi";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addProduct } from "../../../redux/cartSlice";

function Product({ product }) {
  const dispatch = useDispatch();
  const handleAddToCart = (product) => {
    dispatch(addProduct({ ...product }));
    console.log("clicked");
  };

  return (
    <>
      <Link to={`/collections/${product.category}/${product.id}`}>
        <div className="flex flex-col justify-center w-72 h-80 p-2 rounded-md bg-gray-100 md:w-60">
          <img
            src={product.image}
            className="w-full object-cover rounded-md h-[75%]"
            alt=""
          />
          <div className="h-[15%] pl-[0.5px]">{product.name}</div>
          <div className="flex flex-row font-bold justify-between px-[0.5px] h-[10%]">
            <div>{product.price}$</div>

            <button onClick={() => handleAddToCart(product)}>
              <BiCartAdd />
            </button>
          </div>
        </div>
      </Link>
    </>
  );
}

export default Product;

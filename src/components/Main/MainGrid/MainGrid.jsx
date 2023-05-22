import React from "react";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { publicRequest } from "../../../Url/url";
import Product from "./Product";

function MainGrid() {
  const [productDataTommy, setProductDataTommy] = useState();
  const [productDataCalvin, setProductDataCalvin] = useState();
  const [productDataMichael, setProductDataMichael] = useState();
  const [productDataHugo, setProductDataHugo] = useState();

  useEffect(() => {
    publicRequest
      .get(`fine/products?name=${encodeURIComponent("Tommy Hilfiger")}`)
      .then((response) => {
        setProductDataTommy(response.data);
      });
    publicRequest
      .get(`fine/products?name=${"Calvin Klein"}`)
      .then((response) => {
        setProductDataCalvin(response.data);
      });
    publicRequest
      .get(`fine/products?name=${"Michael Kors"}`)
      .then((response) => {
        setProductDataMichael(response.data);
      });
    publicRequest.get(`fine/products?name=${"Hugo Boss"}`).then((response) => {
      setProductDataHugo(response.data);
    });
  }, []);

  return (
    <div className="flex flex-col items-center mt-10">
      <section className="grid grid-rows-auto px-5 gap-5 items-center justify-center sm:grid-cols-2 sm:justify-between md:grid-cols-3 lg:pl-14 ">
        <div className="col-span-full flex flex-row justify-between  px-1 lg:col-start-1 lg:col-end-4">
          <span className="bg-gray-100 px-2 text-[14px] cursor-pointer font-semibold">
            <Link to="/collections/Tommy Hilfiger">Tommy Hilfiger</Link>
          </span>
          <span className="bg-gray-200 px-3  cursor-pointer rounded-t-full ">
            <Link to="/collections/Tommy Hilfiger">View All</Link>
          </span>
        </div>
        {productDataTommy?.slice(0, 6).map((product) => (
          <Product key={product._id} product={product} />
        ))}
        <div className="col-span-full flex  flex-row justify-between px-1 lg:col-start-1 lg:col-end-4">
          <span className="bg-gray-100 px-2 text-[14px] cursor-pointer font-semibold">
            <Link to="/collections/Calvin Klein">Calvin Klein</Link>
          </span>
          <span className="bg-gray-200 px-3 cursor-pointer  rounded-t-full ">
            <Link to="/collections/Calvin Klein">View All</Link>
          </span>
        </div>
        {productDataCalvin?.slice(0, 6).map((product) => (
          <Product key={product._id} product={product} />
        ))}
        <div className="col-span-full flex  flex-row justify-between px-1 lg:col-start-1 lg:col-end-4">
          <span className="bg-gray-100 px-2 text-[14px] cursor-pointer font-semibold">
            <Link to="/collections/Michael Kors"> Michael Kors</Link>
          </span>
          <span className="bg-gray-200 px-3 cursor-pointer  rounded-t-full ">
            <Link to="/collections/Michael Kors">View All</Link>
          </span>
        </div>
        {productDataMichael?.slice(0, 6).map((product) => (
          <Product key={product._id} product={product} />
        ))}
        <div className="col-span-full flex  flex-row justify-between px-1 lg:col-start-1 lg:col-end-4">
          <span className="bg-gray-100 px-2 text-[14px] cursor-pointer font-semibold">
            <Link to="/collections/Hugo Boss"> Hugo Boss</Link>
          </span>
          <span className="bg-gray-200 px-3 cursor-pointer  rounded-t-full ">
            <Link to="/collections/Hugo Boss">View All</Link>
          </span>
        </div>
        {productDataHugo?.slice(0, 6).map((product) => (
          <Product key={product._id} product={product} />
        ))}
      </section>
    </div>
  );
}

export default MainGrid;

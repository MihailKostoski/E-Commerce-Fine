import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Product from "../../components/Main/MainGrid/Product";
import { Navbar, Footer, Sidebar } from "../indexComp";
import Paginate from "./Paginate";
import { publicRequest } from "../../Url/url";

function Collections() {
  const { filter } = useParams();
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(6);
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const [productsData, setProductsData] = useState([]);
  const [brandsData, setBrandsData] = useState([]);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
    scrollToPosition(0);
  };

  const previousPage = () => {
    if (currentPage !== 1) {
      setCurrentPage(currentPage - 1);
      scrollToPosition(0);
    }
  };

  const setPageNormal = () => {
    setCurrentPage(1);
  };

  const nextPage = () => {
    if (currentPage !== Math.ceil(filteredProducts.length / postsPerPage)) {
      setCurrentPage(currentPage + 1);
      scrollToPosition(0);
    }
  };

  const scrollToPosition = (position) => {
    window.scrollTo({
      top: position,
      left: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    publicRequest.get(`fine/products?category=${filter}`).then((response) => {
      setProductsData(response.data);
    });
    setPageNormal();
    scrollToPosition(0);
  }, [filter]);

  useEffect(() => {
    const encodedFilter = encodeURIComponent(filter);
    publicRequest
      .get(`fine/products?name=${encodedFilter}`)
      .then((response) => {
        setBrandsData(response.data);
      });
    setPageNormal();
    scrollToPosition(0);
  }, [filter]);

  let filterModified = filter.split("&");
  const filteredProducts = productsData?.filter((product) => {
    return filterModified.every((category) =>
      product.category.includes(category)
    );
  });
  const pageNumbers = [];

  const currentPosts =
    filteredProducts.length > 0
      ? filteredProducts.slice(indexOfFirstPost, indexOfLastPost)
      : brandsData.length > 0
      ? brandsData.slice(indexOfFirstPost, indexOfLastPost)
      : null;

  for (
    let i = 1;
    i <=
    Math.ceil(
      filteredProducts.length > 0
        ? filteredProducts.length / postsPerPage
        : brandsData.length > 0
        ? brandsData.length / postsPerPage
        : null
    );
    i++
  ) {
    pageNumbers.push(i);
  }

  return (
    <div className="flex flex-col min-h-screen relative">
      <Navbar />
      <div className="relative w-full left-6 bg-blue-200 max-w-[270px]">
        <div className="flex flex-row gap-1 py-1 px-2 text-sm">
          <span>
            {filterModified[0]?.charAt(0).toUpperCase() +
              filterModified[0]?.slice(1)}
          </span>
          {filterModified[1] ? (
            <>
              <span> /</span>
              <span className="font-semibold text-blue-800">
                {filterModified[1]?.charAt(0).toUpperCase() +
                  filterModified[1]?.slice(1)}
              </span>
            </>
          ) : null}
        </div>
      </div>
      <div className="flex flex-col lg:flex-row ">
        <Sidebar />
        <div className="relative">
          <div className="flex flex-col items-center mt-10">
            <section className="grid grid-rows-auto px-5 gap-5 items-center justify-center sm:grid-cols-2 sm:justify-between md:grid-cols-3 lg:pl-14 ">
              {currentPosts?.map((product) => (
                <Product key={product._id} product={product} />
              ))}
            </section>
            <div className="col-span-full mt-2 flex flex-row justify-center px-1 lg:col-start-1 lg:col-end-4">
              <Paginate
                postsPerPage={postsPerPage}
                paginate={paginate}
                previousPage={previousPage}
                nextPage={nextPage}
                pageNumbers={pageNumbers}
              />
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Collections;

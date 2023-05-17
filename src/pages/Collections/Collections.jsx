import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Product from "../../components/Main/MainGrid/Product";
import axios from "axios";
import { Navbar, Footer, Sidebar } from "../indexComp";
import Paginate from "./Paginate";
function Collections() {
  const { filter } = useParams();

  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(6);
  // ...

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const [productsData, setProductsData] = useState([]);

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
    axios
      .get(`http://localhost:5000/fine/products?category=${filter}`)
      .then((response) => {
        setProductsData(response.data);
      });
  }, [filter]);
  useEffect(() => {
    axios
      .get(`http://localhost:5000/fine/products?name=${filter}`)
      .then((response) => {
        console.log(response.data, "res");
      });
  }, [filter]);

  let filterModified = filter.split("&");
  const filteredProducts = productsData?.filter((product) => {
    return filterModified.every((category) =>
      product.category.includes(category)
    );
  });
  const pageNumbers = [];

  const currentPosts = filteredProducts.slice(
    indexOfFirstPost,
    indexOfLastPost
  );
  for (let i = 1; i <= Math.ceil(filteredProducts.length / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  console.log(currentPosts, "c");

  console.log(filteredProducts, "filter");
  console.log(filter);
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
{
  /* {filterModified === "woman" ? (
            <div className="flex flex-col items-center mt-10">
              <section className="grid grid-rows-auto px-5 gap-5 items-center justify-center sm:grid-cols-2 sm:justify-between md:grid-cols-3 lg:pl-14 ">
                {productsData?.map((product) => (
                  <Product key={product._id} product={product} />
                ))}
              </section>
            </div>
          ) : filterModified === "tops-tees" ? (
            <div className="flex flex-col items-center mt-10">
              <section className="grid grid-rows-auto px-5 gap-5 items-center justify-center sm:grid-cols-2 sm:justify-between md:grid-cols-3 lg:pl-14 ">
                {productsData?.map((product) => (
                  <Product key={product._id} product={product} />
                ))}
              </section>
            </div>
          ) : filterModified === "activewear" ? (
            <span>Activewear</span>
          ) : filterModified === "dresses-skirts" ? (
            <span>Dresses & Skirts</span>
          ) : filterModified === "hoodies-sweaters" ? (
            <span>Hoodies & Sweaters</span>
          ) : filterModified === "men" ? (
            <span>Men</span>
          ) : filterModified === "men-jackets" ? (
            <span>Men Jackets</span>
          ) : filterModified === "men-hoodies-sweaters" ? (
            <span>Men Hoodies & Sweaters</span>
          ) : filterModified === "men-joggers-sweatpants" ? (
            <span>Men Joggers & Sweatpants</span>
          ) : filterModified === "men-pants" ? (
            <span>Men Pants</span>
          ) : filterModified === "men-tops-tees" ? (
            <span>Men Tops & Tees</span>
          ) : filterModified === "accessories" ? (
            <span>Accessories</span>
          ) : filterModified === "accessories-jewelry" ? (
            <span>Accessories Jewelry</span>
          ) : filterModified === "accessories-scarves" ? (
            <span>Accessories Scarves</span>
          ) : filterModified === "accessories-sunglasses" ? (
            <span>Accessories Sunglasses</span>
          ) : filterModified === "accessories-hats-belts" ? (
            <span>Accessories Hats & Belts</span>
          ) : filterModified === "accessories-bags" ? (
            <span>Accessories Bags</span>
          ) : filterModified === "brands" ? (
            <span>Brands</span>
          ) : filterModified === "brands-tommy-hilfiger" ? (
            <span>Brands Tommy Hilfiger</span>
          ) : filterModified === "brands-emporio-armani" ? (
            <span>Brands Emporio Armani</span>
          ) : filterModified === "brands-calvin-klein" ? (
            <span>Brands Calvin Klein</span>
          ) : filterModified === "brands-guess" ? (
            <span>Brands Guess</span>
          ) : filterModified === "brands-michael-kors" ? (
            <span>Brands Michael Kors</span>
          ) : filterModified === "brands-hugo-boss" ? (
            <span>Brands Hugo Boss</span>
          ) : filterModified === "shop" ? (
            <span>Collectionss all</span>
          ) : filterModified === "" ? (
            <span>Collections</span>
          ) : null} */
}

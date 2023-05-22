import React, { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { ReactSearchAutocomplete } from "react-search-autocomplete";
import { items, formatResult } from "./SearchFunctionality";
import { publicRequest } from "../../../../../Url/url";
import { useNavigate } from "react-router-dom";

function Search({ searchOpen, setSearchOpen }) {
  const [searchData, setSearchData] = useState();
  const navigate = useNavigate();

  const handleCloseSearchMenu = () => {
    setSearchOpen((current) => !current);
  };

  const handleOnSearch = async (string) => {
    if (string === "") {
      setSearchData([]);
    } else {
      try {
        const response = await publicRequest.get(
          `/fine/products?title=${string}`
        );
        const filteredData = response.data.filter((product) =>
          product.title.toLowerCase().includes(string.toLowerCase())
        );
        const transformedData = filteredData.map((item) => ({
          id: item._id,
          name: item.title,
          brand: item.name,
          img: item.img,
        }));
        setSearchData([...transformedData]);
      } catch (error) {
        console.error(error);
      }
    }
  };

  const handleOnSelect = (item) => {
    navigate(`/products/${item.id}`);
  };

  const merged = items.concat(searchData);

  return (
    <>
      <div
        className={`fixed top-0 right-0 z-40 w-64 h-screen  overflow-y-auto  bg-white dark:bg-gray-800 ${
          searchOpen ? "flex" : "hidden"
        }`}
      >
        <div className="flex flex-col w-full items-center gap-10">
          <div className="bg-gray-900 w-full inline-flex justify-between p-4 items-start  text-md h-12">
            <span className="h-full flex flex-row items-center">Search</span>
            <AiOutlineClose
              onClick={handleCloseSearchMenu}
              className="float-right text-base  rounded  hover:text-lg hover:bg-gray-700"
            />
            <span className="sr-only">Close search menu</span>
          </div>
          <div className="relative w-[91%]">
            <div style={{ width: 230 }}>
              <ReactSearchAutocomplete
                items={merged}
                inputDebounce={100}
                onSearch={handleOnSearch}
                onSelect={handleOnSelect}
                autoFocus
                formatResult={formatResult}
                styling={{
                  height: "40px",
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export const MemoizedSearch = React.memo(Search);

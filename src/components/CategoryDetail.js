import React from "react";
import ItemImg from "../assets/download.jpg";
import { item } from "../constants";
const CategoryDetail = () => {
  return (
    <div className="flex lg:mx-20">
      <div className="w-2/6 sm:w-1/6 max-h-screen sticky top-20 overflow-y-auto no-scrollbar">
        {/* <div className="sticky top-0 overflow-y-auto mt-32 md:mt-20"> */}
        <div className="sticky top-0 overflow-y-auto">
          {Array.from({ length: 20 }).map((_, i) => (
            <div
              key={i}
              className="rounded-lg bg-gray-300 p-2 m-2 flex flex-wrap md:flex-nowrap justify-center md:justify-normal items-center gap-x-2  focus:bg-indigo-300"
            >
              <div className="w-16 h-16 bg-gray-100 animate-pulse shrink-0 rounded-xl">
                {" "}
              </div>
              <p className="font-medium">Item {i + 1}</p>
            </div>
          ))}
        </div>
      </div>
      {/* this is earlier design */}
      {/* <div className="right-container mt-32 md:mt-20 w-full md:w-5/6 px-2 md:px-5"> */}
      <div className="right-container overflow-auto h-screen no-scrollbar md:mt-20 w-full md:w-5/6 px-2 md:px-5">
        <h1 className="font-semibold text-2xl mb-5">ALL</h1>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-x-2 gap-y-2 md:gap-x-4 md:gap-y-4">
          {item.map((item) => (
            <div key={item.tag} className="">
              <div className="relative">
                <img
                  src={ItemImg}
                  alt=""
                  className=" w-full h-full rounded-xl object-cover hover:scale-105 hover:duration-300"
                />
                <p className="absolute bottom-2 left-2 text-xs text-rose-900 bg-rose-200 px-2 rounded-sm">
                  {item.tag}
                </p>
                <p className="absolute w-10 h-11 md:h-11 md:w-12 top-0 left-0 text-xs text-white bg-black px-2 rounded-tl-xl rounded-br-3xl">
                  {item.discount} <br></br>off
                </p>
              </div>
              <p className="text-base font-semibold mb-4">{item.name}</p>
              <p className="text-sm mb-2">{item.qty}</p>
              <div className="font-semibold mb-1 flex gap-x-2 items-baseline">
                <p className="">{item.price}</p>
                <p className="text-xs">{item.price}</p>
              </div>
              <button className="border border-[#ff3269] text-[#ff3269] font-medium py-1 w-full rounded-lg focus:outline-none">
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoryDetail;

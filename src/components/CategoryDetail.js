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
              <div className="relative ">
                <img
                  src={ItemImg}
                  alt=""
                  className=" w-full h-full rounded-xl object-cover hover:scale-105 hover:duration-300"
                />
                {/* <p className="absolute bottom-2 left-2 text-xs text-rose-900 bg-rose-200 px-2 rounded-sm">
                  {item.tag}
                </p> */}
                <img
                  className="h-10 w-9 rounded-tl-xl absolute top-0 left-0"
                  src="https://cdn.zeptonow.com/web-static-assets-prod/artifacts/10.18.4/images/offer-tag.svg"
                  alt="discount"
                />
                <p className="absolute top-1 left-2 font-semibold text-[10px] text-white text-center">
                  {item.discount} <br></br>off
                </p>
              </div>
              <p className="text-base font-semibold">{item.name}</p>
              <p className="text-sm mb-5">{item.qty}</p>
              <p className="text-gray-600 line-through">{item.price}</p>
              <div className="font-semibold mb-1 flex gap-x-2 items-baseline justify-between">
                <p className="text-lg font-bold">{item.price}</p>

                <button className="border border-blue-600 font-normal text-blue-600 py-1 px-5 rounded-md focus:outline-none">
                  ADD
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoryDetail;

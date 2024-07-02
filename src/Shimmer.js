import React from "react";

const Shimmer = () => {
  return (
    <div className="w-full p-1 lg:w-72 lg:p-2 lg:m-1 rounded-lg hover:scale-95">
      <div className="h-40 lg:h-40 rounded-xl bg-gray-300 animate-pulse">
        {/* Placeholder for image */}
      </div>
      <h2 className="my-1 text-base lg:py-2 rounded-xl w-60 bg-gray-300 animate-pulse">
        {/* Placeholder for title */}
      </h2>
      <div className="flex items-center">
        <p className="mr-1 w-10 p-2 lg:mr-2 rounded-xl bg-gray-300 animate-pulse">
          {/* Placeholder for rating */}
        </p>
        <p className="p-2 w-20 mr-1 lg:mr-2 rounded-xl bg-gray-300 animate-pulse"></p>
      </div>
      <p className="w-full my-1 p-2 rounded-xl bg-gray-300 animate-pulse">
        {/* Placeholder for slaString */}
      </p>
      <p className="w-32 p-2 rounded-xl bg-gray-300 animate-pulse">
        {/* Placeholder for cuisines*/}
      </p>
    </div>
  );
};

export const HeadlineShimmer = () => {
  return (
    <>
      <h1 className="p-3 w-96 rounded-xl bg-gray-300 animate-pulse"></h1>
    </>
  );
};
export const Menu = () => {
  return (
    <>
      <div className="animate-pulse flex justify-between p-3">
        <div className="px-4">
          <h1 className="font-bold text-xl bg-slate-200 h-8 w-72 rounded-xl mb-2"></h1>
          <p className="bg-slate-200 h-4 w-60 rounded-full mb-1"></p>
          <p className="bg-slate-200 h-4 w-56 rounded-full"></p>
        </div>
        <div className="bg-slate-200 animate-pulse">
          <div className="border border-slate-500 flex px-2 h-10 justify-center">
            <div className="bg-slate-200 h-8 w-16 rounded-full"></div>
          </div>
          <div className="border border-slate-500 flex px-2 h-10">
            <div className="bg-slate-200 h-8 w-16"></div>
          </div>
        </div>
      </div>
      <hr className="animate-pulse" />
      {/* Price Section */}
      <div>
        <div className="flex my-4 px-4">
          <p className="text-lg font-semibold mr-2 bg-slate-200 rounded-lg h-8 w-32"></p>

          <p className="text-lg font-semibold bg-slate-200 rounded-lg h-8 w-32"></p>
        </div>
      </div>

      <hr className="animate-pulse" />
      {/* Offer Section */}
      <div className="my-4 p-2 px-2 flex">
        {[1, 2, 3, 4].map((index) => (
          <div
            key={index}
            className="bg-slate-200 text-slate-200 w-64 px-2 py-3 flex rounded-xl mr-4 border-dotted border-4 border-white"
          >
            <div className="bg-slate-200 h-12 w-12 rounded-full mr-1"></div>
            <div className="bg-slate-200 h-8 w-48"></div>
          </div>
        ))}
      </div>
      {/* Recommended Section */}
      <div className="my-4 px-4">
        {[1, 2, 3].map((index) => (
          <div
            key={index}
            className="bg-slate-100 shadow-md p-4 rounded-lg my-1 animate-pulse"
          >
            <div className="flex justify-between">
              <div className="bg-slate-200 h-8 w-32"></div>
              <div className="bg-slate-200 h-8 w-8 ml-auto"></div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
export default Shimmer;

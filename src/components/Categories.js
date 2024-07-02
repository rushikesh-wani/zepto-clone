import React, { useEffect, useState } from "react";

const Categories = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    getCatogery();
  }, []);
  async function getCatogery() {
    const response = await fetch(
      "https://zepto-clone-backend.vercel.app/admin/category/get"
    );
    const data = await response.json();
    console.log(data?.categories);
    setData(data?.categories);
  }
  return (
    <>
      <div className="px-5 py-2 h-screen md:px-40 md:py-20 bg-slate-50 ">
        <h1 className="text-2xl font-bold">Shop by category</h1>
        <div className="py-2">
          <div className="grid grid-cols-4 md:grid-cols-8 shrink-0 gap-2 py-2">
            {data.map((items) => (
              <div
                key={items?._id}
                className="p-2 flex flex-wrap justify-center bg-gradient-to-b from-sky-200 to-slate-50 hover:from-slate-50 hover:to-sky-100 rounded-lg"
              >
                <div className="">
                  <img
                    className="w-full h-full"
                    src={items?.image}
                    alt={items?.title}
                  />
                </div>
                <p className="text-xs text-center">{items?.title}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Categories;

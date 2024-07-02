import React from "react";
import { FaAngleLeft, FaSearch } from "react-icons/fa";
import { SlArrowLeft } from "react-icons/sl";
import Navbar from "./Navbar";
const SubNavbar = () => {
  return (
    <header>
      {/* For smaller screen sizes till md: breakpoint */}
      <nav className="md:hidden shadow-md relative w-screen mx-auto border border-b-2 flex justify-between items-center px-3 py-5">
        <a href="/">
          <SlArrowLeft className="text-2xl" />
        </a>
        <div className="absolute left-12">
          <div className="text-xl font-bold">
            Delivery in <span className="text-[#FF3269]">9 mins</span>
          </div>
          <div>
            <p className="text-sm">Pimprala, Jalgaon, Maharashtra</p>
          </div>
        </div>
        <span className="">
          <FaSearch />
        </span>
      </nav>
      {/* for larger screens */}
      <nav className="hidden md:block">
        <Navbar
          deliveryTime={"Delivery in 9 mins"}
          location={"Pimprala, Jalgaon, Maharashtra"}
        />
      </nav>
    </header>
  );
};

export default SubNavbar;

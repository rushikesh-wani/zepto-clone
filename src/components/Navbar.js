import React, { useState, useEffect } from "react";
import {
  FaBars,
  FaCartPlus,
  FaMapMarkerAlt,
  FaRegUserCircle,
  FaUser,
  FaUserAltSlash,
} from "react-icons/fa";
import { IoMdSearch } from "react-icons/io";

const Navbar = ({ deliveryTime, location }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <header className="">
      <nav
        style={{
          background: "linear-gradient(rgb(224, 199, 255), rgb(209, 171, 255))",
        }}
        className="hidden md:fixed w-full z-50 md:flex justify-around items-center px-14 py-2"
      >
        <p className="mb-2 text-3xl text-center font-semibold text-purple-900">
          Zepto
        </p>
        {deliveryTime ? (
          <div className="">
            <div className="text-xl font-bold">
              {/* {deliveryTime} */}
              Delivery in <span className="text-[#FF3269]">9 mins</span>
            </div>
            <div>
              <p className="text-sm">{location}</p>
            </div>
          </div>
        ) : null}
        <div
          className={`relative md:w-2/6 flex items-center justify-center px-5 py-2`}
        >
          <span className="absolute left-7 ">
            <IoMdSearch className="text-xl text-gray-900" />
          </span>
          <a
            className="bg-white cursor-text text-gray-700 w-full py-3 px-8 rounded-lg border-none focus:outline-none"
            href="/search"
          >
            Search for products...
          </a>
        </div>
        {/* <input
          className="bg-white w-full md:w-2/6 p-2 rounded-lg border-none focus:outline-none"
          placeholder="Search here..."
        ></input> */}
        <ul className="hidden md:flex text-lg gap-x-4">
          <li>
            <FaRegUserCircle className="text-2xl" />
          </li>
          <li>
            <FaCartPlus className="text-2xl" />
          </li>
        </ul>
      </nav>

      <nav
        className={`z-50 md:hidden w-full bg-gradient-to-b from-[#ceb6eb] to-[#d1abff] transition-all duration-700 ease-in-out ${
          isScrolled ? "fixed" : ""
        }`}
      >
        <div
          className={`flex justify-between items-center px-5 py-1 transition-all duration-700 ease-in-out ${
            isScrolled ? "hidden opacity-0" : "opacity-100"
          }`}
        >
          <p className="text-3xl text-center font-semibold text-purple-900 ">
            Zepto
          </p>
          <div>
            <button className="p-2 rounded-full">
              <FaMapMarkerAlt className="text-xl text-purple-700" />
            </button>
            <button className="p-2 rounded-full">
              <FaUser className="text-xl text-purple-700" />
            </button>
            <button className="p-2 rounded-full">
              <FaBars className="text-xl text-purple-700" />
            </button>{" "}
          </div>
        </div>
        <div
          className={`relative w-full flex items-center justify-center px-5 py-2 transition-all duration-700 ease-in-out `}
        >
          <span className="absolute left-7 ">
            <IoMdSearch className="text-xl text-gray-900" />
          </span>
          <a
            className="bg-white text-gray-700 w-full py-3 px-8 rounded-lg border-none focus:outline-none"
            href="/search"
          >
            Search for products...
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;

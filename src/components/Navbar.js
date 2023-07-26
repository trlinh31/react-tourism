import React, { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";

function Navbar() {
  const [nav, setNav] = useState(false);
  const [stickyClass, setStickyClass] = useState("");
  const stickNavbar = () => {
    let windowHeight = window.scrollY;
    windowHeight > 0 ? setStickyClass("sticky-nav") : setStickyClass("");
  };
  useEffect(() => {
    window.addEventListener("scroll", stickNavbar);
  }, []);
  const handleNav = () => {
    setNav(!nav);
  };
  return (
    <div
      className={`mx-auto h-20 fixed top-0 left-0 right-0 z-10 px-4 lg:px-20 text-white flex items-center duration-150 ${stickyClass}`}
    >
      <div className="w-full flex items-center justify-between">
        <h1 className="logo font-bold text-4xl text-white">
          <Link to="/">VietNam.</Link>
        </h1>
        <ul className="items-center hidden md:flex">
          <li className="navbar-item relative font-semibold ml-10 hover:text-white before:bg-white duration-200">
            <Link to="/">Home</Link>
          </li>
          <li className="navbar-item relative font-semibold ml-10 hover:text-white before:bg-white duration-200">
            <Link to="/destinations">Destinations</Link>
          </li>
          <li className="navbar-item relative font-semibold ml-10 hover:text-white before:bg-white duration-200">
            <Link to="/about">About</Link>
          </li>
          <li className="navbar-item relative font-semibold ml-10 hover:text-white before:bg-white duration-200">
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
        <div className="md:hidden">
          <FaBars size={25} className="text-primary-color cursor-pointer" onClick={handleNav} />
        </div>
        <div
          className={
            !nav
              ? "fixed top-0 w-full h-full bg-gray-600 z-50 left-[-100%] ease-in duration-500"
              : "fixed top-0 left-0 w-full h-full bg-gray-600 z-50  ease-in duration-500"
          }
        >
          <h1 className="font-bold text-4xl text-primary-color p-3 mx-6 mt-8 block">
            <Link to="/">VietNam.</Link>
          </h1>
          <ul className="flex flex-col mt-12">
            <li className="font-semibold text-2xl text-white p-4 mx-8 border-b border-b-gray-300 block">
              <Link to="/">Home</Link>
            </li>
            <li className="font-semibold text-2xl text-white p-4 mx-8 border-b border-b-gray-300 block">
              <Link to="/destinations">Destinations</Link>
            </li>
            <li className="font-semibold text-2xl text-white p-4 mx-8 border-b border-b-gray-300 block">
              <Link to="/about">About</Link>
            </li>
            <li className="font-semibold text-2xl text-white p-4 mx-8 border-b border-b-gray-300 block">
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
          <FaTimes
            size={25}
            className="text-gray-700 absolute top-4 right-4 cursor-pointer"
            onClick={handleNav}
          />
        </div>
      </div>
    </div>
  );
}

export default Navbar;

'use client'
import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";

export default function Navbar({ fixed }) {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  return (
    <div className="select-none">
      <nav className="w-full flex flex-wrap items-center justify-between px-3 py-1 bg-black fixed mb-3 z-10 shadow-md shadow-gray-800 md:shadow-lg md:shadow-gray-800">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <a
              className="text-3xl md:text-4xl  font-extrabold tracking-wide leading-relaxed inline-block mr-4 py-2 whitespace-nowrap text-white font-sans text-shadow"
              href="/"
            >
              Apple<span className="tracking-normal text-[9px] italic">courses</span>
            </a>
            <button
              className="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
            <GiHamburgerMenu 
            color="white"
            size={27} />

            </button>
          </div>
          <div
            className={
              "lg:flex flex-grow items-center" +
              (navbarOpen ? " flex" : " hidden")
            }
            id="example-navbar-danger"
          >
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
              <li className="nav-item">
                <a
                  className="px-3 py-2 flex items-center text-xs uppercase leading-snug text-white transition-all rounded-lg ease-in-out duration-150 font-extrabold hover:bg-gray-900"
                  href="/freecourses"
                >
                <span className="ml-2 tracking-wider hover:tracking-widest transition-all ease-in-out duration-150">free courses</span>
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="px-3 py-2 flex items-center text-xs uppercase leading-snug text-white transition-all rounded-lg ease-in-out duration-150 font-extrabold hover:bg-gray-900"
                  href="https://www.facebook.com/groups/applecourses/"
                >
                  <span className="ml-2 tracking-wider hover:tracking-widest transition-all ease-in-out duration-150">facebook group</span>
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="px-3 py-2 flex items-center text-xs uppercase leading-snug text-white transition-all rounded-lg ease-in-out duration-150 font-extrabold hover:bg-gray-900"
                  href="https://www.facebook.com/apple.courses.netlify.app.3.0/"
                >
                <span className="ml-2 tracking-wider hover:tracking-widest transition-all ease-in-out duration-150">Facebook page</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
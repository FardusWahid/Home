'use client';
import Link from 'next/link';
import React, { useEffect, useRef } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
export default function Navbar({ fixed }) {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  const navbarRef = useRef(null);

  const handleClickOutside = (event) => {
    if (navbarRef.current && !navbarRef.current.contains(event.target)) {
      setNavbarOpen(false);
    }
  };

  useEffect(() => {
    if (navbarOpen) {
      document.addEventListener('click', handleClickOutside);
    } else {
      document.removeEventListener('click', handleClickOutside);
    }
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [navbarOpen]);



  return (
    <div className="select-none">
      <nav className="w-full flex flex-wrap items-center justify-between px-3 py-1 bg-black fixed mb-3 z-10 shadow-md shadow-gray-800 md:shadow-lg md:shadow-gray-800">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <Link
              className="text-3xl md:text-4xl  font-extrabold tracking-wide leading-relaxed inline-block mr-4 py-2 whitespace-nowrap text-cyan-200 font-sans text-shadow"
              href="/"
            >
              Apple<span className="tracking-normal text-[10px] font-semibold italic">Courses</span>
            </Link>
            <button
              className="text-black cursor-pointer h-[35px] items-center flex my-auto text-xl leading-none px-[6px] rounded-sm shadow-inner shadow-yellow-300 bg-[#C8F560]  lg:hidden"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <GiHamburgerMenu color="black" size={27} />
            </button>
          </div>
          <div
            ref={navbarRef}
            className={
              'lg:flex flex-grow items-center' +
              (navbarOpen ? ' flex' : ' hidden')
            }
            id="example-navbar-danger"
          >
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
              <li>
                <Link
                  className="px-3 py-2 flex items-center   text-xs  uppercase leading-snug text-cyan-200 transition-all rounded-md ease-in-out duration-300 font-extrabold ml-2 tracking-wider hover:tracking-widest hover:bg-[#C8F560] hover:text-black"
                  href="/freecourses"
                >
                  free courses
                </Link>
              </li>
              <li>
                <Link
                  className="px-3 py-2 flex items-center text-xs uppercase ripple-container leading-snug text-cyan-200 transition-all rounded-lg ease-in-out duration-300 font-extrabold ml-2 tracking-wider hover:tracking-widest hover:bg-[#C8F560] hover:text-black"
                  href="https://www.facebook.com/groups/applecourses/"
                >
                  facebook group
                </Link>
              </li>
              <li>
                <Link
                  className="px-3 py-2 flex items-center text-xs ripple-container uppercase leading-snug text-cyan-200 transition-all rounded-lg ease-in-out duration-300 font-extrabold ml-2 tracking-wider hover:tracking-widest hover:bg-[#C8F560] hover:text-black"
                  href="https://www.facebook.com/apple.courses.netlify.app.3.0/"
                >
                  Facebook page
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

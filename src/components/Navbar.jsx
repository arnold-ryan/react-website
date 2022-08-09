import React, { useState } from "react";

const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const handleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <div>
      <header className="relative p-4 text-white">
        <div className="container  max-w-7xl flex justify-between items-center h-24 mx-auto">
          <a
            rel="noopener noreferrer"
            href="/"
            aria-label="Back to homepage"
            className="flex items-center p-2 font-bold text-[#00df9a] text-3xl"
          >
            REACT.
          </a>
          <ul
            className={`md:static md:flex md:justify-end md:items-stretch md:space-x-6 md:flex-row md:space-y-0 md:h-auto md:text-white md:bg-inherit
              ${
                !isNavOpen
                  ? "fixed bg-[#00df9a] top-24 left-0 h-full w-[60%] px-6  space-y-4 flex flex-col text-[#000300]  ease-in-out duration-500"
                  : "fixed left-[-100%]"
              }`}
          >
            <li className="flex">
              <a
                rel="noopener noreferrer"
                href="/"
                className="flex items-center hover:border-[#000300] pt-4 -mb-1 border-b-2 border-transparent md:hover:text-[#00df9a] md:hover:border-[#00df9a] md:pt-0"
              >
                Home
              </a>
            </li>
            <li className="flex">
              <a
                rel="noopener noreferrer"
                href="/"
                className="flex items-center hover:border-[#000300] -mb-1 border-b-2 border-transparent md:hover:text-[#00df9a] md:hover:border-[#00df9a]"
              >
                Company
              </a>
            </li>
            <li className="flex">
              <a
                rel="noopener noreferrer"
                href="/"
                className="flex items-center hover:border-[#000300] -mb-1 border-b-2 border-transparent md:hover:text-[#00df9a] md:hover:border-[#00df9a]"
              >
                Resources
              </a>
            </li>
            <li className="flex">
              <a
                rel="noopener noreferrer"
                href="/"
                className="flex items-center hover:border-[#000300] -mb-1 border-b-2 border-transparent md:hover:text-[#00df9a] md:hover:border-[#00df9a]"
              >
                About
              </a>
            </li>
            <li className="flex">
              <a
                rel="noopener noreferrer"
                href="/"
                className="flex items-center hover:border-[#000300] -mb-1 border-b-2 border-transparent md:hover:text-[#00df9a] md:hover:border-[#00df9a]"
              >
                Contact
              </a>
            </li>
          </ul>
          <button
            className="flex justify-end p-4 md:hidden"
            onClick={handleNav}
          >
            {!isNavOpen ? (
              <svg class="w-6 h-6 text-white" viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            )}
          </button>
        </div>
      </header>
    </div>
  );
};

export default Navbar;

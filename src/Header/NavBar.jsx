import React, { useState } from "react";
import zwilt from "../assets/zwilt.png";
import logo from "../assets/Vector.png";

function NavBar() {
  const [open, isOpen] = useState(false);
  const toggleNavbar = () => {
    isOpen((prev) => !prev);
  };
  const closeNavbar = () => {
    isOpen(false);
  };
  return (
    <header className=" flex justify-center font-switzer">
      <nav className=" bg-[#525AA0] w-[1300px] h-[60px] hidden xl:flex items-center justify-between rounded-[15px] px-2 mt-8">
        <div className=" flex items-center">
          <img src={zwilt} />
          <img src={logo} />
        </div>
        <div>
          <ul className=" flex items-center text-[14px] text-white font-medium leading-[14px] w-[437px] justify-around">
            <li>Find Work</li>
            <li>Find Talent</li>
            <li>Articles</li>
            <li>About Us</li>
            <li>Contact Us</li>
          </ul>
        </div>
        <div className=" flex items-center gap-4">
          <p className=" text-white">Log in</p>
          <button className=" w-[103px] h-[43px] bg-white rounded-[16px]">
            Join Now
          </button>
        </div>
      </nav>
      <nav className=" bg-gray-50 fixed w-full top-0 xl:hidden z-[999] font-Montserrat">
        <div className="relative  bg-[#525AA0] shadow-md">
          <div className="px-6 md:px-12 container mx-auto  py-4">
            <div className="flex items-center justify-between">
              <div className="  flex justify-center bg-transparent pt-2 z-[1000]  ">
                <a href="/">
                  <div className=" flex items-center">
                    <img src={zwilt} />
                    <img src={logo} />
                  </div>
                </a>
              </div>

              <div className="flex items-center justify-end ">
                <input
                  type="checkbox"
                  name="hamburger"
                  id="hamburger"
                  className="peer"
                  hidden
                  checked={open}
                  onChange={toggleNavbar}
                />
                <label
                  htmlFor="hamburger"
                  className=" peer-checked:hamburger block relative z-20 p-6 -mr-6 cursor-pointer xl:hidden "
                >
                  <div
                    aria-hidden="true"
                    className="m-auto h-0.5 w-6 rounded bg-[black] transition duration-300"
                  ></div>
                  <div
                    aria-hidden="true"
                    className="m-auto mt-2 h-0.5 w-6 rounded bg-[black] transition duration-300"
                  ></div>
                </label>

                <div
                  className={
                    open
                      ? "peer-checked:translate-x-0 fixed inset-0 w-[calc(100%-4.5rem)] translate-x-[-100%] bg-[#525AA0] z-[999]  shadow-xl transition duration-300  lg:w-auto lg:static xl:shadow-none xl:translate-x-0"
                      : "fixed inset-0 w-[calc(100%-4.5rem)] translate-x-[-100%] bg-[#525AA0] z-[999]  shadow-xl transition duration-300  lg:w-auto lg:static xl:shadow-none xl:translate-x-0"
                  }
                >
                  <div className="flex flex-col h-full justify-between xl:items-center xl:flex-row">
                    <ul className="px-6 pt-32 text-white space-y-8 md:px-12 xl:space-y-0 xl:flex xl:space-x-12 xl:pt-0">
                      <li>
                        <a href="/Portfolio" onClick={closeNavbar}>
                          <span className="relative text-white">Find Work</span>
                        </a>
                      </li>
                      <li>
                        <a href="/Commitment" onClick={closeNavbar}>
                          <span className="relative group-hover:text-cyan-800">
                            Find Talent
                          </span>
                        </a>
                      </li>
                      <li>
                        <a href="/Entrepreneur" onClick={closeNavbar}>
                          <span className="relative group-hover:text-cyan-800">
                            Articles
                          </span>
                        </a>
                      </li>
                      <li>
                        <a href="/AboutUs" onClick={closeNavbar}>
                          <span className="relative group-hover:text-cyan-800">
                            About us
                          </span>
                        </a>
                      </li>
                      <li>
                        <a href="/AboutUs" onClick={closeNavbar}>
                          <span className="relative group-hover:text-cyan-800">
                            Contact Us
                          </span>
                        </a>
                      </li>
                      <li>
                        <a href="/AboutUs" onClick={closeNavbar}>
                          <span className="relative group-hover:text-cyan-800">
                            Log in
                          </span>
                        </a>
                      </li>
                    </ul>

                    <div className=" py-8 px-6 md:px-12 md:py-16  lg:py-0 lg:pr-0 lg:pl-6">
                      <a href="Join-us" onClick={closeNavbar}>
                        <button className=" bg-white text-customBackground rounded-[30px] px-[24px] py-[12px] mt-[16px]">
                          Join Now
                        </button>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default NavBar;

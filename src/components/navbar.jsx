import { firstName } from "@/data/data";
import React, { useState } from "react";

const Navbar = () => {
  const [ham, setham] = useState(true);

  let buttonClicked = () => {
    setham(!ham);
    console.log(ham);
  };

  return (
    <>
      <header
        className={
          ham
            ? `flex sm:hidden fixed rounded-[150px] items-center w-[90%] justify-around bg-opacity-20 backdrop-blur-3xl py-[13px] px-[13px] pt-[18px] pb-[18px] transition-all duration-300 ease-in-out  z-[999] mt-3 ml-4 mr-4 bg-white`
            : `flex sm:hidden z-[999] fixed rounded-none items-center w-[100%]  transition-all duration-300 ease-in-out justify-around py-[13px] px-[13px] pt-[18px] pb-[18px] bg-[#2A1340]`
        }
      >
        <button onClick={buttonClicked}>
          <span className={ham ? `bg-black line` : `bg-white line cross-1`} />
          <span className={ham ? `bg-black line` : `bg-white line cross-2`} />
        </button>

        <div className="logo">
          <h1
            className={`beatrice text-2xl ${ham ? "text-black" : "text-white"}`}
          >
            {firstName}
          </h1>
        </div>
      </header>
      <nav className="fixed  capitalize hidden sm:block pt-10 mb-10  right-[50%] translate-x-[50%] pointer-events-auto z-[9999999999999]	">
        <ul className="relative bg-opacity-20 backdrop-blur-3xl text-white  flex justify-between items-center  p-0 rounded-[90px]  bg-white">
          <li>
            <button className="navBtn hover:rounded-r-none">Let's Salut</button>
          </li>
          <li>
            <button className="navBtn hover:rounded-none">Let's Meet</button>
          </li>
          <li>
            <button className="navBtn hover:rounded-none">Let's attend</button>
          </li>
          <li>
            <button className="navBtn hover:rounded-l-none">Let's dance</button>
          </li>
        </ul>
      </nav>

      <div
        className={`fixed r-0 sm:hidden w-full h-full flex flex-col items-center justify-end z-[600] transition-all duration-300 ease-out ${
          ham ? "opacity-0" : "opacity-100"
        }`}
      >
        <nav className="relative w-full h-full flex flex-col items-stretch justify-between after:p-[64px] after:bg-[#2A1340] after:w-full after:h-full after:absolute after:left-0 after:top-0 after:scale-y-[1] after:z-[-1] after:origin-bottom">
          <ul className="mt-[100px] mb-[28px] ml-[12px] mr-[12px]">
            <li>
              <a className="navLink" href="#">
                Home
              </a>
            </li>
            <li>
              <a className="navLink" href="#">
                About
              </a>
            </li>
            <li>
              <a className="navLink" href="#">
                Case Studies
              </a>
            </li>
            <li>
              <a className="navLink" href="#">
                Contact
              </a>
            </li>
          </ul>
          <ul className="flex items-stretch border border-t-white border-opacity-40">
            <li className="flex-grow">
              <a href="#" className="nav-social-link beatrice">
                Facebook
              </a>
            </li>
            <li className="flex-grow">
              <a href="#" className="nav-social-link beatrice">
                Twitter
              </a>
            </li>
            <li className="flex-grow">
              <a href="#" className="nav-social-link beatrice">
                Instagram
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Navbar;

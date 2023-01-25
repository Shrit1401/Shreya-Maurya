import { firstName, lastName } from "@/data/data";
import React from "react";

const Footer = () => {
  return (
    <>
      <footer className="bg-yellow-600 hidden sm:flex h-[100vh] w-[100%]  flex-col justify-center mt-28 rounded-t-[80px]">
        <div className="flex justify-between items-center">
          <div className="relative flex-grow">
            <a
              href="#"
              className="ml-10 mr-5 flex justify-center text-[#fadd8a]"
            >
              <h1 className=" beatrice text-[12rem]">
                Shreya <br /> Maurya
              </h1>
            </a>

            <ul className="text-white list-none items-center text-2xl mt-10 justify-around flex ">
              <li>
                <div className=" capitalize adiue ">
                  Website by{" "}
                  <a
                    href="https://shrit1401.live"
                    target="_blank"
                    className="text-gray-300 adiue hover:opacity-40"
                  >
                    Shrit Shrivastva
                  </a>{" "}
                  and{" "}
                  <a href="#" className="text-gray-300 adiue hover:opacity-40">
                    The Schyler Initiative
                  </a>
                </div>
              </li>
            </ul>
          </div>

          <div className="relative self-stretch mr-10 flex flex-col justify-self-stretch items-stretch w-[25vw] ">
            <a
              href="#"
              className="footer-links rounded-t-xl"
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              Facebook
            </a>
            <a
              href="#"
              className="footer-links"
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              Instagram
            </a>
            <a
              href="#"
              className="footer-links rounded-b-xl"
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              Twitter
            </a>
          </div>
        </div>
      </footer>

      <footer>
        <div className="flex items-center bg-yellow-600 ml-2 mr-2 sm:hidden h-[55vh] w-[98%]  flex-col justify-center mt-28 rounded-t-[80px]">
          <div className="relative flex-grow w-full">
            <a
              href="#"
              className="ml-10 mr-5 flex justify-center text-[#fadd8a]"
            >
              <h1 className="mt-10 beatrice text-[3rem]">
                {firstName} <br /> {lastName}
              </h1>
            </a>

            <ul className="text-white text-center list-none items-center text-2xl mt-10 flex-col gap-10 w-full justify-around flex ">
              <li>
                <a
                  href="#"
                  className="beatrice hover:opacity-40 border border-white w-full pr-10 pl-10 pt-3 pb-3 border-opacity-40"
                >
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="beatrice hover:opacity-40 border border-white pr-10 pl-10 pt-3 pb-3 border-opacity-40"
                >
                  Twitter
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="beatrice hover:opacity-40 border border-white pr-10 pl-10 pt-3 pb-3 border-opacity-40"
                >
                  Facebook
                </a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;

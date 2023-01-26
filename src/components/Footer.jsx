import { firstName, lastName } from "@/data/data";
import React, { useEffect } from "react";
import gsap from "gsap";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <>
      <footer className="bg-[#351a4a] hidden sm:flex h-fit w-[100%] pt-10 pb-20  flex-col justify-center mt-28 rounded-t-[80px]">
        <div className="flex justify-between items-center">
          <div className="relative flex-grow">
            <div className="ml-10 mr-5 flex justify-center text-[var(--secondary)]">
              <motion.h1
                initial={{ opacity: 0, transitionDuration: 3, y: 200 }}
                whileInView={{
                  opacity: 1,
                  transitionDelay: 0.5,
                  transitionDuration: 1.5,
                  y: 0,
                }}
                className="text adiue text-[12rem]"
              >
                Shreya <br /> Maurya
              </motion.h1>
            </div>

            <ul className="text-white list-none items-center text-2xl mt-10 justify-around flex ">
              <li>
                <motion.div
                  initial={{ opacity: 0, x: -200, transitionDuration: 10 }}
                  whileInView={{
                    opacity: 1,
                    x: 0,
                  }}
                  className=" capitalize adiue "
                >
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
                </motion.div>
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
        <div className="flex items-center bg-[#351a4a]  sm:hidden h-fit w-[100%]  flex-col justify-center mt-28 rounded-t-[80px]">
          <div className="relative flex-grow w-full">
            <div className="ml-10 mr-5 flex justify-center text-[var(--secondary)]">
              <motion.div
                initial={{ opacity: 0, transitionDuration: 3, y: 200 }}
                whileInView={{
                  opacity: 1,
                  transitionDelay: 0.5,
                  transitionDuration: 1.5,
                  y: 0,
                }}
                h1
                className="mt-10 adiue text-[3rem]"
              >
                {firstName} <br /> {lastName}
              </motion.div>
            </div>

            <ul className="text-white text-center list-none items-center text-2xl mt-10 justify-around flex ">
              <li>
                <motion.div
                  initial={{ opacity: 0, x: -200, transitionDuration: 10 }}
                  whileInView={{
                    opacity: 1,
                    x: 0,
                  }}
                  className=" capitalize adiue "
                >
                  Made by{" "}
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
                </motion.div>
              </li>
            </ul>

            <ul className="text-white text-center border border-b-transparent border-opacity-40  border-t-white mr-5 list-none items-center text-2xl mt-10 gap-10 w-full justify-around flex ">
              <li>
                <a
                  href="#"
                  className=" beatrice hover:opacity-40  w-full pr-10 pl-10 pt-3 border-opacity-40"
                >
                  <img
                    src="https://img.icons8.com/material-outlined/512/instagram-new.png"
                    className="invert w-10 h-10"
                  />
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="beatrice hover:opacity-40 pr-10 pl-10 pt-3 border-opacity-40"
                >
                  <img
                    src="https://img.icons8.com/external-tanah-basah-basic-outline-tanah-basah/512/external-twitter-social-media-tanah-basah-basic-outline-tanah-basah.png"
                    alt=""
                    className="invert w-10 h-10"
                  />
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="beatrice hover:opacity-40 pr-10 pl-10 pt-3 border-opacity-40"
                >
                  <img
                    src="https://img.icons8.com/material-outlined/512/facebook-new.png"
                    alt=""
                    className="invert w-10 h-10"
                  />
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

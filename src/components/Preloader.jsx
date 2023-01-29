import React, { useEffect } from "react";
import gsap from "gsap";
import { firstName, lastName } from "@/data/data";

const Preloader = () => {
  useEffect(() => {
    gsap.to(".preloader", {
      y: "-100%",
      delay: 2,
      duration: 1,
      ease: "power4.inOut",
    });

    const words = [firstName, lastName];

    setInterval(() => {
      const randomWord = words[Math.floor(Math.random() * words.length)];
      document.querySelector(".words").innerHTML = randomWord;
    }, 1000);
  }, []);

  return (
    <div className="overflow-hidden preloader h-full rounded-b-3xl w-full z-[99] bg-[var(--dark)] flex justify-center items-center fixed">
      <h1 className="text-white words adiue text-3xl sm:text-9xl">
        {firstName}
      </h1>
    </div>
  );
};

export default Preloader;

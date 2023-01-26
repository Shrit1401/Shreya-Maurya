import React, { useEffect } from "react";
import gsap from "gsap";

const Preloader = () => {
  useEffect(() => {
    gsap.to(".preloader", {
      y: "-100%",
      delay: 2,
      duration: 1,
      ease: "power4.inOut",
    });

    // create a array of words then generate a random word from the array and show the word on words class and then in 2 seconds again generate a random word and show it on words class

    const words = ["Hello", "Hola", "Guten Tag", "Bonjour", "Shreya", "Maurya"];

    setInterval(() => {
      const randomWord = words[Math.floor(Math.random() * words.length)];
      document.querySelector(".words").innerHTML = randomWord;
    }, 1000);
  }, []);

  return (
    <div className="overflow-hidden preloader h-full rounded-b-3xl w-full z-[99] bg-[var(--dark)] flex justify-center items-center fixed">
      <h1 className="text-white words adiue text-3xl sm:text-9xl">Hello</h1>
    </div>
  );
};

export default Preloader;

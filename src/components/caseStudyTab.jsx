import React from "react";
import Fade from "react-reveal/Fade";

const CaseStudyTab = ({ title, img, desc }) => {
  return (
    <div className="project sm:even:mt-52 cursor-pointer hover:opacity-60 transition-all duration-300 ease-in-out">
      <div className="absolute hidden sm:block w-[450px] h-[450px] gradient-4 pointer-events-none opacity-70 -z-10" />

      <Fade bottom className="art z-[9999]">
        <div className="img mask relative overflow-hidden sm:w-[400px] h-[400px]">
          <img
            className="case-img top-0 left-0 overflow-hidden object-cover transition-all duration-300 ease-in-out hover:scale-125 sm:w-[400px] h-[400px] rounded-lg"
            src={img}
            alt={title}
          />
        </div>
        <h2 className=" beatrice mt-5 mb-5  text-white sm:text-8xl text-3xl">
          {title}
        </h2>

        <p className="text-white text-xl">{desc}</p>
      </Fade>
    </div>
  );
};

export default CaseStudyTab;

import React from "react";

const CaseStudyTab = ({ title, img, desc }) => {
  return (
    <div className="sm:even:mt-52 cursor-pointer hover:opacity-60 transition-all duration-300 ease-in-out">
      <div className="absolute w-[450px]  h-[450px] gradient-4 pointer-events-none opacity-70 -z-10" />

      <div className="art z-[9999]">
        <div className="img overflow-hidden sm:w-[400px] h-[400px]">
          <img
            className="case-img  top-0 left-0 object-cover transition-all duration-300 ease-in-out hover:scale-125 sm:w-[400px] h-[400px] rounded-lg"
            src={img}
            alt={title}
          />
        </div>
        <h2 className=" beatrice mt-5 mb-5  text-white text-8xl">{title}</h2>

        <p className="text-white text-xl">{desc}</p>
      </div>
    </div>
  );
};

export default CaseStudyTab;

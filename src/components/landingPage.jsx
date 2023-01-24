import { firstName, landingPageDescription, lastName } from "@/data/data";
import React from "react";

const LandingPage = () => {
  return (
    <div className="text-white  sm:relative pt-20 sm:h-[100vh] h-[50vh] w-[100%]">
      <h1 className="beatrice text-[4rem] ml-8 sm:text-[11rem] sm:ml-16 font-light z-[2] relative">
        {firstName}
      </h1>
      <img
        src="https://images.unsplash.com/photo-1645680827507-9f392edae51c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80"
        className="sm:block hidden absolute w-[500px] h-[300px] top-[50%] mb-28 z-[1] left-[50%] transform -translate-x-1/2 -translate-y-1/2 rounded-[40px]"
      />
      <h1 className=" beatrice relative sm:mt-24 pr-16 ml-8 text-[4rem] sm:text-[11rem] font-light text-right">
        {lastName}
      </h1>
      <p className="text-3xl w-[100%] hidden sm:block sm:text-2xl sm:w-[20%] ml-5 ">
        {landingPageDescription}
      </p>
      <p className="sm:hidden block w-[100%] mt-10 text-lg ml-2 whitespace-pre-wrap">
        {landingPageDescription}
      </p>
    </div>
  );
};

export default LandingPage;

import React from "react";

const About = () => {
  return (
    <div className="sm:h-[100vh] h-[50vh] w-[100%]">
      <div className="mt-28"></div>

      <div className="box w-[100%] h-[50vh] sm:h-[100vh] bg-[url('https://images.unsplash.com/photo-1511300636408-a63a89df3482?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80')] bg-no-repeat bg-cover bg-blue-400 bg-opacity-60">
        <div className="flex flex-col justify-center items-center h-full  backdrop-blur-md w-full">
          <div className="sm:w-[90%] w-full h-[50vh] sm:h-[90%] sm:gap-0 gap-10 flex rounded-md sm:flex-row flex-col  bg-black bg-opacity-50 backdrop-blur-xl mr-5 ml-5">
            <div className="flex flex-col sm:flex-row gap-5 sm:gap-0 items-center justify-around">
              <img
                className="w-[40%] mt-2 sm:mt-0 h-[90%] object-cover rounded-md"
                src="https://images.unsplash.com/photo-1645680827507-9f392edae51c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80"
                alt=""
              />

              <h3 className="text-white text-center text-xl sm:text-3xl beatrice">
                Resilience, Reinvention <br />
                and Revolution
              </h3>
            </div>

            <div className="hidden sm:block border-r-2 border-white h-full opacity-40"></div>

            <div className="flex flex-col sm:flex-row gap-5 sm:gap-0 items-center justify-around">
              <h3 className="text-white text-xl sm:text-3xl text-center beatrice">
                Ceaseless, Creation
                <br /> and Collaboration
              </h3>
              <img
                className="w-[40%] mb-2 sm:mb-0 h-[90%] object-cover rounded-md"
                src="https://images.unsplash.com/photo-1645680827507-9f392edae51c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

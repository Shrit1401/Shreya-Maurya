import {
  firstName,
  landingImages,
  landingPageDescription,
  lastName,
} from "@/data/data";
import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import { Autoplay } from "swiper";
import { gsap } from "gsap";

const LandingPage = () => {
  useEffect(() => {
    gsap.fromTo(
      "#home h1",
      {
        duration: 1,
        opacity: 0,
        delay: 3,
        y: 100,
        ease: "power4.inOut",
      },
      {
        delay: 3,
        duration: 1,
        opacity: 1,
        y: 0,
        ease: "power4.inOut",
      }
    );

    gsap.fromTo(
      "#home img",

      {
        duration: 1,
        opacity: 0,
        delay: 3,
        y: 100,
        ease: "power4.inOut",
      },
      {
        duration: 1,
        opacity: 1,
        delay: 2.5,
        y: 0,
        ease: "power4.inOut",
      }
    );

    gsap.fromTo(
      "#home .left",
      {
        duration: 1,
        opacity: 0,
        delay: 2.5,
        x: -100,
        ease: "power4.inOut",
      },
      {
        duration: 1,
        opacity: 1,
        delay: 2.5,

        x: 0,
        ease: "power4.inOut",
      }
    );

    gsap.fromTo(
      "#home .right",
      {
        duration: 1,
        opacity: 0,
        delay: 2.5,
        x: 100,
        ease: "power4.inOut",
      },
      {
        duration: 1,
        opacity: 1,
        delay: 2.5,

        x: 0,
        ease: "power4.inOut",
      }
    );
  }, []);

  return (
    <div className="text-white w-[100%] pt-16 pb-0 sm:pb-28" id="home">
      <div className="left">
        <div className="gradient-2 absolute w-[450px] sm:block hidden  h-[450px] opacity-40 sm:opacity-100 top-0 -left-36 " />
        <div className="gradient-2 absolute w-[450px] sm:block hidden  h-[450px] opacity-40 sm:opacity-100 top-0 -left-36" />
        <div className="gradient-2 absolute w-[450px] sm:block hidden  h-[450px] opacity-40 sm:opacity-100 top-[20%] -left-36" />
        <div className="gradient-2 absolute w-[450px] sm:block hidden  h-[450px] opacity-40 sm:opacity-100 top-[40%] -left-36" />
        <div className="gradient-2 absolute w-[450px] sm:block hidden  h-[450px] opacity-40 sm:opacity-100 bottom-0 -left-36" />
      </div>
      <div className="right">
        <div className="gradient-3  absolute w-[100px] sm:block hidden  sm:w-[350px] h-[450px] top-0 right-0 " />
        <div className="gradient-3  absolute w-[100px] sm:block hidden  sm:w-[350px] h-[450px] top-[20%] right-0" />
        <div className="gradient-3  absolute w-[100px] sm:block hidden sm:w-[350px] h-[450px] bottom-0 right-0" />
      </div>
      <div className="absolute w-[450px] sm:block hidden left-[50%] top-[50%] transform -translate-x-1/2 -translate-y-1/2 h-[450px] gradient-1 opacity-50 z-10" />
      <Swiper
        modules={[Autoplay]}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        draggable={true}
        centeredSlides={true}
        className="mySwiper mb-0 pb-0 h-[30vh] sm:h-[87vh]"
      >
        {landingImages.map((item) => (
          <SwiperSlide draggable={true} class="swiper-slide">
            <img src={item} className="land-image" />
          </SwiperSlide>
        ))}
      </Swiper>
      <div>
        <h1 className="beatrice text-[4rem] top-32 left-9 sm:text-[11rem] font-light z-[2] absolute ">
          {firstName}
        </h1>
        <h1 className=" beatrice absolute sm:top-[31.5rem] top-[12rem] z-[2]  right-9 text-[4rem] sm:text-[11rem] font-light text-right">
          {lastName}
        </h1>
      </div>
      <p className="text-xl adiue w-[80%] absolute hidden sm:block sm:text-2xl sm:w-[20%] ml-5 ">
        {landingPageDescription}
      </p>
    </div>
  );
};

export default LandingPage;

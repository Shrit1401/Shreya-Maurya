import React, { useEffect } from "react";
import CaseStudyTab from "./caseStudyTab";
import { work } from "../data/data";
import { gsap } from "gsap";

const Artists = () => {
  useEffect(() => {
    gsap.fromTo(
      "#projects h1",
      {
        duration: 1,
        opacity: 0,
        delay: 5,
        y: 100,
        ease: "power4.inOut",
        scrollTrigger: "#projects",
      },
      {
        duration: 1,
        opacity: 1,
        delay: 5,
        y: 0,
        ease: "power4.inOut",
        scrollTrigger: "#projects",
      }
    );
  }, []);

  return (
    <div id="projects" npm i aos>
      <h1 className="beatrice text-center mt-10 text-white ml-0 sm:ml-5 text-[3rem] sm:mb-16 mb-0 sm:text-[5rem] whitespace-nowrap">
        Let's Design
      </h1>

      <div className="ml-10 mr-10 flex sm:flex-row flex-col  justify-center flex-wrap gap-20 sm:justify-around">
        {work.map((item) => (
          <CaseStudyTab
            title={item.title}
            img={item.imageUrl}
            desc={item.desc}
            key={item.title}
          />
        ))}
      </div>
    </div>
  );
};

export default Artists;

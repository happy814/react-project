import React from "react";
import aboutImage from "../assets/about.webp";
function About() {
  return (
    <section
      className=" select-none  max-w-7xl mx-auto border-b-2 mt-20 "
      id="about"
    >
      <h2 className="text-xl lg:text-3xl  text-center uppercase mb-12 mx-4 ">
        About
      </h2>
      <div className="flex flex-col items-center lg:space-x-8 mx-4 mb-20">
        <div className="mb-8 lg:mb-0">
          <img src={aboutImage} className=" w-full h-auto"></img>
        </div>
        <p className=" text-[#000000]  text-lg lg:text-xl font-light text-center lg:text-left max-w-5xl mx-auto mt-5">
          Vastu Shastra are the textual part of Vastu Vidya the broader
          knowledge about architecture and design theories from ancient India.
          Vastu Vidya is a collection of ideas and concepts, with or without the
          support of layout diagrams, that are not rigid. Rather, these ideas
          and concepts are models for the organisation of space and form within
          a building or collection of buildings, based on their functions in
          relation to each other, their usage and the overall fabric of the
          Vastu.Ancient Vastu Shastra principles include those for the design of
          Mandir and the principles for the design and layout of houses, towns,
          cities, gardens, roads, water works, shops, and other public areas{" "}
        </p>
      </div>
    </section>
  );
}

export default About;

import React from "react";
import { SERVICES_CONTENT } from "../constants";

function Services() {
  return (
    //  fast
    <div className=" select-none   flex justify-center ">
      <section className="max-w-7xl max-auto border-b-2 " id="services">
        <div className="my-20 ">
          <h2 className="text-xl lg:text-3xl tracking-tight text-center uppercase mb-20">
            Our Home Renovation Services
          </h2>
          {/* very improtent */}

          {/* function for computer menu */}
          {SERVICES_CONTENT.map((Services, index) => (
            <div key={index} className="mb-12 mx-4 flex flex-col lg:flex-row">
              <div
                className={` lg:w-1/2 mb-4 lg:m-0 ${
                  index % 2 === 0 ? "" : "lg:order-2"
                }`}
              >
                {/* img */}
                <img
                  src={Services.image}
                  alt={Services.title}
                  className="w-full h-auto object-cover rounded-lg  "
                ></img>
              </div>

              {/* 
                        function for mob menu */}
              <div
                className={`lg:w-1/2 flex flex-col ${
                  index % 2 === 0 ? "lg:pl-12" : "lg:pr-12"
                }`}
              >
                {/* title */}
                <h3 className="text-xl lg:text-2xl font-medium mb-2">
                  {Services.title}
                </h3>

                {/* description */}

                <p className=" lg:tracking-wide text-lg lg:text-xl lg:leading-9">
                  {Services.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Services;

// tracking-tight - it'is not very improtent

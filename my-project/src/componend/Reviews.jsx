import React from "react";
import { REVIEWS } from "../constants";

function Reviews() {
  return (
    <section
      className=" select-none   max-w-7xl mx-auto border-b-2 "
      id="reviews"
    >
      <div className="my-20">
        <h2 className="text-xl lg:text-3xl text-center uppercase mb-12  ">
          Reviews
        </h2>
        <p className=" max-w-2xl text-lg mb-12 text-center mx-auto">
          {REVIEWS.text}
        </p>

        <div className="flex flex-wrap justify-center">
          {REVIEWS.reviews.map((reviews, index) => (
            <div
              key={index}
              className="mt-10 flex flex-col justify-center items-center rounded-2xl border border-neutral-950 p-10 mx-2 max-w-xs"
            >
              <p className="my-4">{reviews.review}</p>

              <div className="flex items-center mt-4">
                <img
                  className="rounded-full mr-4 w-12 h-12"
                  src={reviews.image}
                  alt={reviews.name}
                />
                <div>
                  <p className="text-sm font-bold ">{reviews.name}</p>
                  <p className="text-sm text-neutral-500">{reviews.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Reviews;

import React from "react";
import { CONTACT_INFO } from "../constants";
import { RiMailLine, RiMapPinLine, RiPhoneLine } from "@remixicon/react";

const ContactUs = () => {
  return (
    <section className="select-none   max-w-7xl mx-auto " id="contact">
      <div className="my-20">
        <h2 className=" pt-10 text-xl lg:text-3xl  text-center uppercase mb-1 ">
          Contact Us
        </h2>
        <p className="max-w-2xl text-[#e1ebee] text-lg mb-10 text-center mx-auto ">
          {CONTACT_INFO.text}
        </p>
        <div className="flex flex-col lg:flex-row justify-around mx-4">
          {/* logo use here */}
          {/* num-1 */}
          <div className="flex mb-8 lg:mb-0">
            <RiPhoneLine className="text-3xl mr-4"></RiPhoneLine>
            <div>
              <p className="text-lg font-semibold">
                {CONTACT_INFO.phone.label}
              </p>
              <a
                className="text-[#f9f9f9]"
                href={`tel:${CONTACT_INFO.phone.value}`}
                onClick={() => {
                  navigator.clipboard(CONTACT_INFO.phone.value);
                  alert("Phone number copied");
                }}
              >
                {CONTACT_INFO.phone.value}
              </a>
            </div>
          </div>

          {/* copy two times num-1  */}

          <div className="flex mb-8 lg:mb-0">
            <RiMailLine className="text-3xl mr-4"></RiMailLine>
            <div>
              <p className="text-lg  font-semibold">
                {CONTACT_INFO.email.label}
              </p>
              <a className="text-[#f9f9f9]" href={CONTACT_INFO.email.link}>
                {CONTACT_INFO.email.value}
              </a>
              {/* <p className="text-[#e1ebee]">{CONTACT_INFO.email.value}</p> */}
            </div>
          </div>

          <div className="flex">
            <RiMapPinLine className="text-3xl mr-4"></RiMapPinLine>
            <div>
              <p className="text-lg font-semibold">
                {CONTACT_INFO.address.label}
              </p>
              <p className="text-[#e1ebee]">{CONTACT_INFO.address.value}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;

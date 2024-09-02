import {
  RiFacebookFill,
  RiInstagramFill,
  RiTwitchFill,
  RiTwitterFill,
} from "@remixicon/react";
import React from "react";

function Footer() {
  return (
    <footer className="max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-center border-t-2 py-4">
        <div className="flex space-x-6 mb-2">
          <a
            href="https://www.facebook.com"
            target="_Blank"
            rel="noopener noreferrer"
            aria-label="Visit our FaceBook page"
          >
            <RiFacebookFill></RiFacebookFill>
          </a>

          <a
            href="https://www.twitter.com"
            target="_Blank"
            rel="noopener noreferrer"
            aria-label="Visit our Twitter page"
          >
            <RiTwitterFill />
          </a>

          <a
            href="https://www.instagram.com"
            target="_Blank"
            rel="noopener noreferrer"
            aria-label="Visit our Instagram page"
          >
            <RiInstagramFill />
          </a>
        </div>
        <p className=" select-none text-sm text-[#e1ebee]">
          &copy; 2024 VastuSpaze. All right reserved
        </p>
      </div>
    </footer>
  );
}

export default Footer;

import { useState } from "react";
import logo from "../assets/logo.webp";
import { RiCloseLine, RiMenu3Line } from "@remixicon/react";
import { LINKS } from "../constants";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <nav className=" select-none  border-b-2 bg-slate-500 ">
      {/* it can handele the items */}

      <div className=" mx-5  flex justify-between items-center py-8">
        <div className="pl-2">
          <a href="#">
            <img src={logo} width={150} height={150} alt="RAj"></img>
          </a>
        </div>

        {/* it can handele  only button  */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className=" text-2xl pr-2 focus:outline-none"
            aria-label={isOpen ? "Close menu " : "Open menu "}
          >
            {isOpen ? <RiCloseLine /> : <RiMenu3Line />}
          </button>
        </div>

        {/* it is a nav manu   */}

        <div className=" text-[#000000] hidden md:flex space-x-8 md:space-x-4 pr-2 ">
          {LINKS.map((link, index) => (
            <a
              key={index}
              href={link.link}
              className="uppercase text-sm font-medium hover:bg-[#fdfcdc] rounded hover:text-[#0081a7] font-serif"
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>

      {/* toggleMenu section */}
      <div
        className={`${
          isOpen ? "block" : "hidden"
        }  md:hidden absolute bg-[#ffffff] text-[#000000] font-extrabold
         w-full px-4 mt-2 py-5 border-b-4 }`}
      >
        {LINKS.map((link, index) => (
          <a
            key={index}
            href={link.link}
            className="uppercase text-lg font-medium block py-2 tracking-wide"
          >
            {link.name}
          </a>
        ))}
      </div>
    </nav>
  );
}

export default Navbar;

//     not use
//    max-w-8xl  line num -13

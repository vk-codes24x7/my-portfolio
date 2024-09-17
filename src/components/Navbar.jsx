import React from "react";
import logo from "../assets/kevinRushLogo.png";

import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
      <div className="b flex flex-shrink-0 items-center">
        <img className="mx-2 w-10" src={logo} alt="Vinaya Krishna" />
      </div>
      <div className="mt-2 flex items-center justify-center gap-5 text-xl">
        <a href="#about" className="text-neutral-400">
          About Me
        </a>
        <a href="#technologies" className="text-neutral-400">
          Technologies
        </a>
        <a href="#experience" className="text-neutral-400">
          Experience
        </a>
        <a href="#projects" className="text-neutral-400">
          Projects
        </a>
        <a href="#contact" className="text-neutral-400">
          Contact Me
        </a>
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <FaLinkedin />
        <FaGithub />
        <FaInstagram />
      </div>
    </nav>
  );
};

export default Navbar;

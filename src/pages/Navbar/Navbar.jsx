import React from "react";
import {
  FaHome,
  FaIdCard,
  FaMapMarkedAlt,
  FaProjectDiagram,
  FaLaptopCode,
  FaBrain,
  FaDownload,
  FaNewspaper,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Navbar = () => {
  const navItems = (
    <>
      <li>
        <a
          href="#home"
          className="flex px-3 text-gray-900 dark:text-white hover:bg-gray-100 active:bg-inherit focus:bg-red-300"
        >
          <FaHome className="text-xl" />
          Home
        </a>
      </li>
      <li>
        <a
          href="#about"
          className="flex px-3 text-gray-900 dark:text-white hover:bg-gray-100 active:bg-inherit"
        >
          <FaIdCard className="text-xl" />
          About Me
        </a>
      </li>
      <li>
        <a
          href="#wid"
          className="flex px-3 text-gray-900 dark:text-white hover:bg-gray-100 active:bg-inherit"
        >
          <FaLaptopCode className="text-xl" />
          What I Do?
        </a>
      </li>
      <li>
        <a
          href="#skills"
          className="flex px-3 text-gray-900 dark:text-white hover:bg-gray-100 active:bg-inherit"
        >
          <FaBrain className="text-xl" />
          Skills
        </a>
      </li>
      <li>
        <a
          href="#projects"
          className="flex px-3 text-gray-900 dark:text-white hover:bg-gray-100 active:bg-inherit"
        >
          <FaProjectDiagram className="text-xl" />
          Projects
        </a>
      </li>
      <li>
        <a
          href="#projects"
          className="flex px-3 text-gray-900 dark:text-white hover:bg-gray-100 active:bg-inherit"
        >
          <FaNewspaper className="text-xl" />
          Blog
        </a>
      </li>

      <li>
        <a
          href="#contact"
          className="flex px-3 text-gray-900 dark:text-white hover:bg-gray-100 active:bg-inherit"
        >
          <FaMapMarkedAlt className="text-xl" />
          Contact Me
        </a>
      </li>
    </>
  );
  return (
    <section className="sticky top-0 z-10 w-full bg-gray-100 shadow-lg">
      <div className="navbar max-w-[1280px] mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navItems}
            </ul>
          </div>
          <Link
            to="/"
            className="text-2xl md:text-4xl font-bold italic font-mono text-error"
          >
            Suman
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navItems}</ul>
        </div>
        <div className="navbar-end">
          <a
            href="https://drive.google.com/file/d/1I7iR5TgAmtHwWggU72FoE2wOExVYixWg/view?usp=sharing"
            target="_black"
          >
            <button className="btn btn-sm md:btn-md btn-outline btn-error">
              <FaDownload className="mr-2" />
              Resume
            </button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Navbar;

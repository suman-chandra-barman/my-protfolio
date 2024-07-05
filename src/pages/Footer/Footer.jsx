import React from "react";
import { FaFacebookF, FaGithub, FaLinkedinIn, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="container mx-auto px-2 py-10 md:py-20">
      <div className="flex justify-center md:justify-between items-center flex-wrap gap-3">
        <div>
          <p className="text-center md:text-lg">
            Copyright © 2024
            <span className="font-semibold"> Suman Chandra Barman</span>. All
            right reserved.
          </p>
        </div>
        <div className="flex gap-2 text-lg justify-center">
          <a
            href="https://www.linkedin.com/in/suman-chandra-barman/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 shadow-lg border rounded-full bg-[#0a66c2]"
          >
            <FaLinkedinIn className="text-white md:text-xl " />
          </a>
          <a
            href="https://github.com/suman-chandra-barman"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 shadow-lg border rounded-full bg-black"
          >
            <FaGithub className="text-white md:text-xl" />
          </a>

          <a
            href="https://twitter.com/_SumanBarman"
            target="_black"
            rel="noreferrer"
            className="p-2 shadow-lg border rounded-full bg-[#1da1f2]"
          >
            <FaTwitter className="text-white md:text-xl" />
          </a>
          <a
            href="https://www.facebook.com/sumanchandrabarman999"
            target="_black"
            rel="noreferrer"
            className="p-2 shadow-lg border rounded-full bg-[#1877f2]"
          >
            <FaFacebookF className=" text-white md:text-xl" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

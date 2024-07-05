import React from "react";
import { FaCheckSquare } from "react-icons/fa";

const WhatIDo = () => {
  const works = [
    "Prepare variety of different designs, layouts and websites",
    " Actively listen to customers' requests confirming full understanding before addressing concerns",
    "Use Seo Optimization and other software tools to create to grow their business",
    "Identify issues, analyzed information and provided solutions to problems",
    "Convert graphic designs to usable web images using React JS",
    "Plan website development, converting mockups into usable web presence with HTML, JavaScript, AJAX and JSON coding",
    "Establish presentation consistency across Chrome, Safari, Firefox and other common browser interfaces",
    "Convert graphic designs to usable web images using Adobe Photo Shop",
    "Multi-task across multiple functions and roles to generate project results and meet deadlines and organizational expectations",
    "Code websites using HTML, CSS, JavaScript and jQuery languages",
    "Implement Google-based SEO and ad campaigns to meet budget specifications",
    "Employ search engine optimization tactics to increase reach of targeted audience",
    "Develop technical solutions required to accommodate specific user-facing assets such as [Product or Service]",
    "Conduct Unit testing over course of web development lifecycle",
  ];

  return (
    <section id="wid">
      <div className="max-w-[1280px] mx-auto px-2 py-10 md:py-20">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-10">
          What I Do?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 justify-between gap-2 md:gap-3">
          {works.map((work, idx) => (
            <div
              key={idx}
              className="flex gap-5 items-center shadow px-3 py-2 border rounded-md hover:bg-gray-500 hover:text-white"
            >
              <p>
                <FaCheckSquare className="text-xl" />
              </p>
              <p className="md:text-lg">{work}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatIDo;

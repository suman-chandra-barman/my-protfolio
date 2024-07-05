import React from "react";
import { FaDownload } from "react-icons/fa";

const About = () => {
  return (
    <section id="about" className=" bg-gray-100">
      <div className="max-w-[1280px] mx-auto px-2 py-10 md:py-20">
        <div className="text-center mb-5 md:mb-10">
          <h3 className="text-2xl md:text-3xl font-bold">About Me</h3>
        </div>
        <div className="flex flex-col md:flex-row gap-8 md:gap-14 justify-between">
          <div className="md:text-lg md:w-1/2">
            <p className="text-base md:text-lg py-2 md:my-3 text-justify">
              Hello there!
              <br /> My name is
              <span className="font-semibold"> Suman Chandra Barman</span> and I
              am a professional Full Stack Developer skilled in all stages of
              web development. My focus is on crafting exceptional web
              experiences, and I have expertise in developing and maintaining
              web systems. With a diverse and promising skill set, I am
              passionate about coding and have been since the early days of
              working with computers. I am always eager to learn new
              technologies and apply them to suitable projects.
            </p>
            <div className="mt-5">
              <a
                href="https://drive.google.com/file/d/1I7iR5TgAmtHwWggU72FoE2wOExVYixWg/view?usp=sharing"
                target="_black"
              >
                <button className="btn btn-error">
                  <FaDownload className="mr-2" />
                  Download Resume
                </button>
              </a>
            </div>
          </div>
          <div className="md:w-1/2">
            <div className="text-base md:text-lg flex flex-col gap-2 md:gap-3">
              <h3 className="font-semibold text-xl md:text-2xl mb-2">
                Personal Information
              </h3>
              <div className="flex gap-4 md:gap-8">
                <h6 className="font-semibold md:w-[90px]"> Name</h6>
                <p>
                  <span className="font-semibold">: </span> Suman Chandra Barman
                </p>
              </div>
              <div className="flex gap-4 md:gap-8">
                <h6 className="font-semibold md:w-[90px]">Email</h6>
                <p>
                  <span className="font-semibold">: </span>{" "}
                  sumanchandrabarman999@gmail.com
                </p>
              </div>
              <div className="flex gap-4 md:gap-8">
                <h6 className="font-semibold md:w-[90px]"> Phone</h6>
                <p>
                  <span className="font-semibold">: </span> +8801765227054
                </p>
              </div>
              <div className="flex gap-4 md:gap-8">
                <h6 className="font-semibold md:w-[90px]"> Degree</h6>
                <p>
                  <span className="font-semibold">: </span> Bachelor of Social
                  Science (BSS)
                </p>
              </div>
              <div className="flex gap-4 md:gap-8">
                <h6 className="font-semibold md:w-[90px]">Age</h6>
                <p>
                  <span className="font-semibold">: </span> 26 Years
                </p>
              </div>
              <div className="flex gap-4 md:gap-8">
                <h6 className="font-semibold md:w-[90px]">Nationality</h6>
                <p>
                  <span className="font-semibold">: </span> Bangladeshi
                </p>
              </div>
              <div className="flex gap-4 md:gap-8">
                <h6 className="font-semibold md:w-[90px]">Address</h6>
                <p>
                  <span className="font-semibold">: </span> Thakurgaon,
                  Bangladesh
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

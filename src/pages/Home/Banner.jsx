import React, { useEffect, useRef } from "react";
import suman from "../../assets/logo/suman-chandra-barman.jpg";
import Typed from "typed.js";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Banner = () => {
  const el = useRef(null);
  const typed = useRef(null);
  useEffect(() => {
    const options = {
      strings: [
        "Dedicated Programmer.",
        "Open Source Contributor.",
        "Team Person.",
      ],
      typeSpeed: 100,
      backSpeed: 30,
      loop: true,
    };

    typed.current = new Typed(el.current, options);

    return () => {
      typed.current.destroy();
    };
  }, []);

  return (
    <section id="home" className="max-w-[1280px] mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 justify-between items-center lg:min-h-screen px-2 py-10">
        <div className="mx-auto">
          <h3 className="font-semibold text-lg md:text-xl text-error">
            Hello, I'm
          </h3>
          <h2 className="text-3xl md:text-5xl font-bold mt-2">
            Suman Chandra Barman
          </h2>
          <h4 className="mt-3 font-semibold text-xl md:text-2xl ">
            Full Stack Developer and <span ref={el} />
          </h4>
          <p className="mt-5 text-justify text-base md:text-lg">
            From front-end design to back-end development, I provide end-to-end
            solutions that ensure your web applications are efficient,
            effective, and engaging.
          </p>
          <div className="flex gap-5 items-center mt-10">
            <a
              href="https://www.linkedin.com/in/suman-chandra-barman/"
              target="_blank"
              rel="noreferrer"
            >
              <button className="btn btn-error">
                <FaLinkedin className="mr-2 text-base hidden md:block" />
                View on Linkedin
              </button>
            </a>
            <a href="https://github.com/Suman-Chandra-Barman" target="_black">
              <button className="btn btn-outline btn-error">
                <FaGithub className="mr-2 text-base hidden md:block" />
                View on Github
              </button>
            </a>
          </div>
        </div>
        <div className="avatar order-first md:order-last">
          <div className="rounded-full mx-auto border-[8px] border-error">
            <img
              src={suman}
              alt=""
              className="max-w-[250px] md:max-w-[350px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;

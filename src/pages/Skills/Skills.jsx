import React from "react";

const Skills = () => {
  return (
    <section id="skills" className="bg-gray-100">
      <div className="px-2 py-10 md:py-20 max-w-[1280px] mx-auto">
        <div className="text-center mb-10">
          <h3 className="text-2xl md:text-3xl font-bold">My Skills</h3>
          <p className="mt-5 md:w-2/3 mx-auto text-justify md:text-center text-lg">
            I'm a Full Stack Web Developer with over 2.5 years of experience. I
            code and create web elements for amazing people around the world. I
            like work with new people. New people new Experiences.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-8 lg:gap-12">
          <div>
            <div className="flex text-lg md:text-xl justify-between font-semibold">
              <p>Next JS</p>
              <p>96%</p>
            </div>
            <progress
              className="progress w-full"
              value="96"
              max="100"
            ></progress>
          </div>
          <div>
            <div className="flex text-lg md:text-xl justify-between font-semibold">
              <p>Node JS</p>
              <p>96%</p>
            </div>
            <progress
              className="progress w-full"
              value="96"
              max="100"
            ></progress>
          </div>
          <div>
            <div className="flex text-lg md:text-xl justify-between font-semibold">
              <p>React JS</p>
              <p>99%</p>
            </div>
            <progress
              className="progress w-full"
              value="99"
              max="100"
            ></progress>
          </div>
          <div>
            <div className="flex text-lg md:text-xl justify-between font-semibold">
              <p>Express JS</p>
              <p>92%</p>
            </div>
            <progress
              className="progress w-full"
              value="92"
              max="100"
            ></progress>
          </div>
          <div>
            <div className="flex text-lg md:text-xl justify-between font-semibold">
              <p>Tailwind CSS</p>
              <p>99%</p>
            </div>
            <progress
              className="progress w-full"
              value="99"
              max="100"
            ></progress>
          </div>
          <div>
            <div className="flex text-lg md:text-xl justify-between font-semibold">
              <p>MongoDB</p>
              <p>98%</p>
            </div>
            <progress
              className="progress w-full"
              value="98"
              max="100"
            ></progress>
          </div>
          <div>
            <div className="flex text-lg md:text-xl justify-between font-semibold">
              <p>HTML and CSS</p>
              <p>98%</p>
            </div>
            <progress
              className="progress  w-full"
              value="98"
              max="100"
            ></progress>
          </div>
          <div>
            <div className="flex text-lg md:text-xl justify-between font-semibold">
              <p>Mongoose</p>
              <p>99%</p>
            </div>
            <progress
              className="progress  w-full"
              value="99"
              max="100"
            ></progress>
          </div>
          <div>
            <div className="flex text-lg md:text-xl justify-between font-semibold">
              <p>Bootstrap</p>
              <p>95%</p>
            </div>
            <progress
              className="progress w-full"
              value="95"
              max="100"
            ></progress>
          </div>

          <div>
            <div className="flex text-lg md:text-xl justify-between font-semibold">
              <p>SQL</p>
              <p>92%</p>
            </div>
            <progress
              className="progress w-full"
              value="92"
              max="100"
            ></progress>
          </div>
          <div>
            <div className="flex text-lg md:text-xl justify-between font-semibold">
              <p>Redux</p>
              <p>92%</p>
            </div>
            <progress
              className="progress w-full"
              value="92"
              max="100"
            ></progress>
          </div>
          <div>
            <div className="flex text-lg md:text-xl justify-between font-semibold">
              <p>Prisma</p>
              <p>98%</p>
            </div>
            <progress
              className="progress w-full"
              value="98"
              max="100"
            ></progress>
          </div>
          <div>
            <div className="flex text-lg md:text-xl justify-between font-semibold">
              <p>JavaScript</p>
              <p>96%</p>
            </div>
            <progress
              className="progress w-full"
              value="96"
              max="100"
            ></progress>
          </div>
          <div>
            <div className="flex text-lg md:text-xl justify-between font-semibold">
              <p>TypeScript</p>
              <p>95%</p>
            </div>
            <progress
              className="progress w-full"
              value="95"
              max="100"
            ></progress>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;

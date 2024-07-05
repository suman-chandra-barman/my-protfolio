import React from "react";
import About from "../About/About";
import ContactUs from "../Contact/ContactUs";
import Projects from "../Projects/Projects";
import Skills from "../Skills/Skills";
import Banner from "./Banner";
import UsedTechnologies from "./UsedTechnologies";
import WhatIDo from "../WhatIDo/WhatIDo";
const Home = () => {
  return (
    <main>
      <Banner />
      <About />
      <Projects />
      <Skills />
      <UsedTechnologies />
      <WhatIDo />
      <ContactUs />
    </main>
  );
};

export default Home;

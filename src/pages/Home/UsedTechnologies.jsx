import React from "react";
import reactIcon from "../../assets/icons/react.svg";
import htmlIcon from "../../assets/icons/html.svg";
import cssIcon from "../../assets/icons/css.svg";
import jsIcon from "../../assets/icons/js.svg";
import bootstrapIcon from "../../assets/icons/bootstrap.svg";
import nodeIcon from "../../assets/icons/nodejs.svg";
import expressIcon from "../../assets/icons/express.svg";
import reduxIcon from "../../assets/icons/redux.svg";
import mongobdIcon from "../../assets/icons/mongodb.svg";
import striptIcon from "../../assets/icons/stripe.svg";
import apiIcon from "../../assets/icons/api.svg";
import muiIcon from "../../assets/icons/mui.svg";
import tailwindIcon from "../../assets/icons/tailwind.svg";
import nextjsIcon from "../../assets/icons/nextjs.svg";
import antdesignIcon from "../../assets/icons/antdesign.svg";
import sqlIcon from "../../assets/icons/sql.svg";
import prismaIcon from "../../assets/icons/prisma.svg";

const UsedTechnologies = () => {
  return (
    <section className="px-2 py-10 md:py-20 max-w-[1280px] mx-auto">
      <h2 className="text-2xl md:text-3xl font-bold text-center">
        My Used Technologies
      </h2>
      <div className="mt-10">
        <div className="flex gap-5 md:gap-6 justify-center flex-wrap">
          <div className="tooltip" data-tip="React">
            <img src={reactIcon} alt="React" className="h-9 md:h-14" />
          </div>
          <div className="tooltip" data-tip="JavaScript">
            <img src={jsIcon} alt="JavaScript" className="h-9 md:h-14" />
          </div>
          <div className="tooltip" data-tip="Redux">
            <img src={reduxIcon} alt="Redux" className="h-9 md:h-14" />
          </div>
          <div className="tooltip" data-tip="HTML">
            <img src={htmlIcon} alt="html" className="h-9 md:h-14" />
          </div>
          <div className="tooltip" data-tip="CSS">
            <img src={cssIcon} alt="CSS" className="h-9 md:h-14" />
          </div>
          <div className="tooltip" data-tip="Bootstrap">
            <img src={bootstrapIcon} alt="Bootstrap" className="h-9 md:h-14" />
          </div>
          <div className="tooltip" data-tip="Tailwind CSS">
            <img src={tailwindIcon} alt="Tailwind" className="h-9 md:h-14" />
          </div>
          <div
            className="tooltip"
            data-tip="
Material-UI"
          >
            <img
              src={muiIcon}
              alt="
Material-UI"
              className="h-10 md:h-16"
            />
          </div>

          <div className="tooltip" data-tip="Node.js">
            <img src={nodeIcon} alt="Node.js" className="h-10 md:h-16" />
          </div>
          <div className="tooltip" data-tip="Express.js ">
            <img src={expressIcon} alt="Express.js" className="h-10 md:h-16" />
          </div>
          <div className="tooltip" data-tip="MongoDb">
            <img src={mongobdIcon} alt="MongoDb" className="h-10 md:h-16" />
          </div>
          <div className="tooltip" data-tip="Stript API">
            <img src={striptIcon} alt="Strip" className="h-10 md:h-16" />
          </div>
          <div className="tooltip" data-tip="API Integration">
            <img src={apiIcon} alt="API" className="h-10 md:h-16" />
          </div>
          <div className="tooltip" data-tip="Next.js">
            <img src={nextjsIcon} alt="Next.js" className="h-10 md:h-16" />
          </div>
          <div className="tooltip" data-tip="Antdesign">
            <img src={antdesignIcon} alt="Antdesign" className="h-10 md:h-16" />
          </div>
          <div className="tooltip" data-tip="SQL">
            <img src={sqlIcon} alt="SQL" className="h-10 md:h-16" />
          </div>
          <div className="tooltip" data-tip="prisma">
            <img src={prismaIcon} alt="Prisma" className="h-10 md:h-16" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default UsedTechnologies;

import React from "react";
import { PhotoProvider, PhotoView } from "react-photo-view";

const ProjectCart = ({ project, handleModal, setModalOn }) => {
  const {
    name,
    title,
    live_link,
    client_link,
    server_link,
    images,
    descriptions,
  } = project;
  return (
    <div className="card card-compact bg-gray-100 shadow rounded-lg transition ease-in-out hover:-translate-y-1 hover:scale-105 duration-200">
      <div className="cursor-pointer" title="Click to show the full image!">
        <PhotoProvider
          speed={() => 700}
          easing={(type) =>
            type === 2
              ? "cubic-bezier(0.36, 0, 0.66, -0.56)"
              : "cubic-bezier(0.34, 1.56, 0.64, 1)"
          }
        >
          {images.map((item, index) => (
            <PhotoView key={index} src={item}>
              {index < 1 ? (
                <img src={item} alt="project" className="w-full md:h-[300px]" />
              ) : undefined}
            </PhotoView>
          ))}
        </PhotoProvider>
      </div>

      <div className="card-body gap-1">
        <div className="md:flex items-center justify-between">
          <h3 className="card-title text-xl md:text-[22px] font-medium">
            {name}
          </h3>
          <div>
            <a
              className="px-1 md:px-[5px] underline text-blue-500 font-medium"
              target="_blank"
              rel="noreferrer"
              href={live_link}
            >
              Live Link
            </a>
            <a
              className="px-1 md:px-[5px] underline text-blue-500 font-medium"
              target="_blank"
              rel="noreferrer"
              href={client_link}
            >
              Client Side
            </a>
            <a
              className="px-1 md:px-[5px] underline text-blue-500 font-medium"
              target="_blank"
              rel="noreferrer"
              href={server_link}
            >
              Server Side
            </a>
          </div>
        </div>
        <h5 className="md:text-lg">{title}</h5>

        <p className="text-justify mt-2">
          {descriptions.split(" ").slice(0, 15).join(" ")} ...
          <span className="font-medium">More</span>
        </p>
        <div
          onClick={() => setModalOn(true)}
          className="card-actions justify-between mt-1 md:mt-3"
        >
          <label
            onClick={() => handleModal(project)}
            htmlFor="project-details-modal"
            className="btn w-full"
          >
            View Details
          </label>
        </div>
      </div>
    </div>
  );
};

export default ProjectCart;

import React from "react";
import { PhotoProvider, PhotoView } from "react-photo-view";

const ProjectDetailsModal = ({ detailProject, setModalOn }) => {
  const {
    name,
    title,
    live_link,
    client_link,
    server_link,
    descriptions,
    features,
    images,
    technology,
  } = detailProject;

  return (
    <div>
      <input
        type="checkbox"
        id="project-details-modal"
        className="modal-toggle"
      />
      <div className="modal">
        <div className="modal-box relative max-w-[98%]">
          <label
            onClick={() => setModalOn(false)}
            htmlFor="project-details-modal"
            className="btn btn-sm btn-circle absolute right-3 top-3"
          >
            ✕
          </label>
          <h3 className="text-2xl md:text-3xl font-bold text-center my-6">
            {name}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2  gap-5">
            <div className="cursor-pointer">
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
                      <img src={item} alt="project" className="w-full" />
                    ) : undefined}
                  </PhotoView>
                ))}
              </PhotoProvider>
            </div>
            <div>
              <p className="text-xl font-semibold">{title}</p>
              <div className="mt-4">
                <p className="text-xl font-semibold"> Project Info:</p>
                <p>{descriptions}</p>
              </div>
              <div className="mt-4">
                <p className="text-xl font-semibold">Key features: </p>
                <ul className="list-disc list-inside">
                  {features?.map((item, id) => (
                    <li key={id}>{item}</li>
                  ))}
                </ul>
              </div>
              <div className="mt-4">
                <p className="text-xl font-semibold">Used technologies: </p>
                <p>
                  {technology?.map((item, id) => (
                    <>
                      <span key={id}>{item}</span>,{" "}
                    </>
                  ))}
                  and More.
                </p>
              </div>
              <div className="mt-4 md:flex gap-4 items-center">
                <p className="text-xl font-semibold">URL: </p>
                <div className="flex flex-wrap gap-3">
                  <a
                    href={live_link}
                    target="_blank"
                    rel="noreferrer"
                    className=" bg-red-200 py-1 px-2 rounded"
                  >
                    Live website
                  </a>
                  <a
                    href={client_link}
                    target="_blank"
                    rel="noreferrer"
                    className=" bg-red-200 py-1 px-2 rounded"
                  >
                    Client side code
                  </a>
                  <a
                    href={server_link}
                    target="_blank"
                    rel="noreferrer"
                    className=" bg-red-200 py-1 px-2 rounded"
                  >
                    Server side code
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetailsModal;

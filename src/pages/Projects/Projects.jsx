import { useState } from "react";
import ProjectCart from "./ProjectCart";
import ProjectDetailsModal from "../../components/ProjectDetailsModal";
import { projectData } from "../../projectData/ProjectData";

const Projects = () => {
  const [detailProject, setDetailProject] = useState({});
  const [modalOn, setModalOn] = useState(true);

  const projects = projectData;
  const handleModal = (project) => {
    setDetailProject(project);
  };

  return (
    <section id="projects">
      <div className="px-2 py-10 md:py-20 max-w-[1280px] mx-auto">
        <div className="text-center mb-10">
          <h3 className="text-2xl md:text-3xl font-bold">Recent Projects</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((project) => (
            <ProjectCart
              key={project._id}
              project={project}
              handleModal={handleModal}
              setModalOn={setModalOn}
            />
          ))}
        </div>
        {detailProject?.name && modalOn && (
          <ProjectDetailsModal
            detailProject={detailProject}
            setModalOn={setModalOn}
          />
        )}
      </div>
    </section>
  );
};

export default Projects;

import React from "react";
import { PROJECTS } from "../constants";
import { motion } from "framer-motion";

const Projects = () => {
  return (
    <section id="projects">
      <div className="border-b border-neutral-900 pb-4">
        <motion.h2
          whileInView={{ y: 0, opacity: 1 }}
          initial={{ y: -100, opacity: 0 }}
          transition={{ duration: 1.5 }}
          className="my-20 text-center text-4xl"
        >
          Projects
        </motion.h2>
        <div>
          {PROJECTS.map((project, index) => (
            <div className="mb-8 flex flex-wrap lg:justify-center" key={index}>
              <motion.div
                whileInView={{ x: 0, opacity: 1 }}
                initial={{ x: -100, opacity: 0 }}
                transition={{ duration: 1 }}
                className="w-full lg:w-1/4"
              >
                <img
                  width={150}
                  height={150}
                  className="mb-6 rounded"
                  src={project.image}
                  alt={project.title}
                />
              </motion.div>
              <motion.div
                whileInView={{ x: 0, opacity: 1 }}
                initial={{ x: 100, opacity: 0 }}
                transition={{ duration: 1 }}
                className="w-full max-w-xl lg:w-3/4"
              >
                <h6 className="mb-2 font-semibold">{project.title}</h6>
                <p className="mb-4 text-neutral-400">{project.description}</p>
                {project.technologies.map((tech, index) => (
                  <span
                    className="mr-2 mt-4 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-800"
                    key={index}
                  >
                    {tech}
                  </span>
                ))}
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

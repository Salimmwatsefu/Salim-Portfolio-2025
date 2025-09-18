import React from "react";
import { motion } from "framer-motion";
import ProjectsCard from "./ProjectsCard";
import type { Project } from "../../utils/getProjects";
import { Link } from "react-router-dom";

type Props = {
  projects: Project[];
  featuredOnly?: boolean;
  showSeeAll?: boolean;
};

// Animation variants for the header
const headerVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: "easeOut" } as const,
  },
};

// Animation variants for the project cards - reduced delay and duration for faster feel
const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: () => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.4,  ease: "easeOut" } as const,
  }),
};

const Projects: React.FC<Props> = ({ projects, featuredOnly, showSeeAll }) => {
  const filtered = featuredOnly ? projects.filter((p) => p.featured) : projects;

  return (
    <div className="mt-52 text-white">
      <motion.div
        className="md:ml-40 ml-5 flex relative mb-20"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={headerVariants}
      >
        <div>
          <h1 className="text-5xl font-semibold text-gray-200 font-syne relative z-10">
            Selected Work
          </h1>
          <p className="text-sm mt-1 text-gray-400 tracking-wider">
            Designs that breathe, code that speaks
          </p>
        </div>
        <div className="absolute left-0 top-1/2 w-16 h-[2px] bg-orange-500 rotate-12"></div>
        <div className="h-[3px] bg-gradient-to-r from-orange-500 to-transparent rounded transform origin-right -rotate-12 mt-14 w-16" />
      </motion.div>

      <div className="my-20 md:mx-10 mx-5 grid grid-cols-1 md:grid-cols-2 gap-10">
        {filtered.map((project, index) => (
          <motion.div
            key={project.id}
            custom={index}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={cardVariants}
          >
            <ProjectsCard
              href={`/projects/${project.id}`}
              imgSrc={project.imgSrc}
              imgAlt={project.imgAlt}
              title={project.title}
              description="" // Optional: use first line of content if desired
              tools={project.tools}
             
            />
          </motion.div>
        ))}
      </div>

      {showSeeAll && (
        <motion.div
          className="text-center mt-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <Link
            to="/projects"
            className="px-6 py-3 rounded-lg bg-orange-500 text-white font-semibold hover:bg-orange-600 transition"
          >
            See all projects
          </Link>
        </motion.div>
      )}
    </div>
  );
};

export default Projects;
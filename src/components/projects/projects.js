import React from "react"
import Project from "./project"
import { arrayOf, shape, ProjectType } from "../../types"

const Projects = ({ projects }) => (
  <>
    <h2 className="font-header font-semibold text-front text-2xl uppercase mb-3">
      Projects
    </h2>
    {projects.map((project, i) => (
      <Project key={`${project.name}_${i}`} {...project} />
    ))}
  </>
)

Projects.propTypes = {
  projects: arrayOf(shape(ProjectType)),
}

export default Projects

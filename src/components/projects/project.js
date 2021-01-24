import React from "react"
import { ProjectType } from "../../types"
import ProjectIcon from "./project-icon"
import ProjectStatus from "./project-status"
import ProjectTags from "./project-tags"

const Project = props => {
  const { name, url, description, status, tags, icon } = props
  return (
    <article className="border-t-4 border-line relative flex flex-wrap bg-back-light p-4 lg:p-8 bg-no-repeat text-md mb-6">
      <div className="lg:flex-1">
        {url && (
          <a
            className="text-front underline break-all hover:opacity-75 transition-opacity duration-150"
            href={url}
            rel="noreferrer noopener"
            target="_blank"
          >
            <h3 className="font-bold">{name}</h3>
          </a>
        )}
        <p className="w-full py-4 whitespace-pre-line">{description}</p>
        <ul className="pr-2">
          {status && <ProjectStatus status={status} />}
          {tags && <ProjectTags tags={tags} />}
        </ul>

        {icon && <ProjectIcon icon={icon} />}
      </div>
    </article>
  )
}

Project.propTypes = ProjectType

export default Project

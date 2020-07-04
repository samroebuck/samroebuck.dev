import { graphql } from "gatsby"
import { arrayOf, shape, string, object, oneOf } from "prop-types"

export const ProjectType = {
  description: string,
  icon: oneOf(["github", "website"]),
  name: string.isRequired,
  status: string,
  tags: arrayOf(string),
  url: string,
}

export const query = graphql`
  fragment ProjectFragment on ProjectsYaml {
    description
    icon
    name
    status
    tags
    url
  }
`

import { graphql } from "gatsby"
import { shape, string, object } from "prop-types"

export const ProfileType = {
  about: string.isRequired,
  company: string.isRequired,
  image: shape({
    childImageSharp: object.isRequired,
    publicURL: string.isRequired,
  }),
  location: string.isRequired,
  name: string.isRequired,
  profession: string.isRequired,
}

export const query = graphql`
  fragment ProfileFragment on ProfileYaml {
    about
    company
    image {
      childImageSharp {
        fixed(width: 144, height: 144, quality: 85) {
          ...GatsbyImageSharpFixed_withWebp
        }
      }
      publicURL
    }
    location
    name
    profession
  }
`

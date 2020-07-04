import Img from "gatsby-image"
import React from "react"
import { ProfileType } from "../../types"

const ProfileImage = ({ image, name }) => (
  <div className="relative inline-block leading-none">
  <div className="relative z-10 diamond">
    <Img
      fixed={image.childImageSharp.fixed}
      alt={name}
      className="relative z-10 diamond-img"></Img>
    </div>
    <div className="absolute inset-0 diamond diamond-off bg-pink z-0 transform translate-x-12"></div>
  </div>
)

ProfileImage.propTypes = {
  image: ProfileType.image,
  name: ProfileType.name,
}

export default ProfileImage

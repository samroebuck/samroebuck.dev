import React from "react"
import {
  FaGithub,
  FaLinkedinIn,
  FaTwitter,
  FaDev
} from "react-icons/fa"
import { SocialType } from "../../types"

const SocialIcon = ({ name, ...params }) => {
  const icons = {
    github: FaGithub,
    linkedin: FaLinkedinIn,
    twitter: FaTwitter,
    dev: FaDev
  }

  const Icon = icons[name]

  return Icon ? <Icon {...params} /> : null
}

SocialIcon.propTypes = {
  name: SocialType.name,
}

export default SocialIcon

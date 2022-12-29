import {
  FaGithub,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa"

interface SocialIconProps {
  name: 'linkedin' | 'github',
}

const SocialIcon = ({ name }: SocialIconProps) => {
  const icons = {
    github: FaGithub,
    linkedin: FaLinkedinIn,
    twitter: FaTwitter,
  }

  const Icon = icons[name]

  return <Icon className="w-6 h-6 diamond--back"/> 
}

export default SocialIcon

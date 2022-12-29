import { SocialLink } from "../../types"
import SocialIcon from "./social-icon"

interface SocailLinkProps {
  social: SocialLink[]
}

const SocialLinks = ({social}: SocailLinkProps) => {
  return (
    <div className="pl-3 lg:mt-10">
      {social.map(({ name, url }) => {
        return (
          <a
            aria-label={name}
            className={`inline-flex w-12 h-12 justify-center items-center diamond diamond--small -ml-3 bg-pink text-lead-text hover:shadow-lg transition-shadow duration-150`}
            href={url}
            key={name}
            rel="noopener noreferrer"
            target="_blank"
          >
            <SocialIcon name={name} />
          </a>
        )
      })}
    </div>
  )
}

export default SocialLinks

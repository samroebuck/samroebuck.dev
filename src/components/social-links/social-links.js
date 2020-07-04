import React from "react"
import SocialIcon from "./social-icon"
import { SocialType, arrayOf, shape } from "../../types"

const SocialLinks = ({ social }) => {
  return (
    <div className="pl-3 lg:mt-10">
      {social.map(({ name, url }, i) => {
        return (
          <a
            aria-label={name}
            className={`inline-flex w-12 h-12 justify-center items-center diamond diamond--small -ml-3 bg-pink text-lead-text hover:shadow-lg transition-shadow duration-150`}
            href={url}
            key={name}
            rel="noopener noreferrer"
            target="_blank"
          >
            <SocialIcon name={name} className="w-6 h-6 diamond--back" />
          </a>
        )
      })}
    </div>
  )
}

SocialLinks.propTypes = {
  social: arrayOf(shape(SocialType)),
}

export default SocialLinks

import React from "react"
import { ProfileType } from "../../types"

const About = ({ about }) => (
  <>
    <h2 className="font-header font-semibold text-front text-2xl uppercase mb-3">
      About
    </h2>
    <div className="font-text text-md pb-12 leading-normal whitespace-pre-line">
      {about}
    </div>
  </>
)

About.propTypes = {
  about: ProfileType.about,
}

export default About

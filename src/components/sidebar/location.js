import React from "react"
import { FaMapMarkerAlt } from "react-icons/fa"
import { FaBriefcase } from "react-icons/fa"

import { ProfileType } from "../../types"

const Location = ({ location, relocation, company }) => (
  <>
    <div className="inline-flex items-center bg-front mt-3 min-w-full">
      <span className="text-lead-text border-r-2 border-back px-3">
      {location ? <FaMapMarkerAlt className="h-4 w-4" /> : null}
      {company ? <FaBriefcase className="h-4 w-4" /> : null}
      </span>
      <span className="text-back font-header font-bold py-1 px-3 text-lg">
      {location ? location : null}
      {company ? company : null}
      </span>
    </div>
    {relocation && (
      <div className="text-xs uppercase mt-2 font-semibold text-front font-header">
        Available for relocation
      </div>
    )}
  </>
)

Location.propTypes = {
  location: ProfileType.location,
  relocation: ProfileType.relocation,
}

export default Location

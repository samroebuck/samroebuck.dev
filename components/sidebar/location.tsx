import { FaMapMarkerAlt } from "react-icons/fa"
import { FaBriefcase } from "react-icons/fa"

interface LocationProps {
  type: 'town' | 'company';
  content: string
}

const Location = ({content, type}: LocationProps) => (
  <>
    <div className="inline-flex items-center bg-front mt-3 min-w-full">
      <span className="text-lead-text border-r-2 border-back px-3">
        {type === 'town' && <FaMapMarkerAlt className="h-4 w-4" />}
        {type === 'company' && <FaBriefcase className="h-4 w-4" /> }
      </span>
      <span className="text-back font-header font-bold py-1 px-3 text-lg">
        {content}
      </span>
    </div>
  </>
)
export default Location

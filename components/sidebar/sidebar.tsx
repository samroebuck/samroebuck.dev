import SocialLinks from "../social-links/social-links"
import Location from "./location"
import ProfileImage from "./profile-image"
import { SocialLink } from "../../types"

interface SidebarProps {
  social: SocialLink[],
  town: string,
  company: string
}

const Sidebar = ({social, town, company}: SidebarProps) => (
  <aside className="w-full lg:w-1/3 lg:border-r border-line lg:px-6 xl:px-12">
    <div className="flex flex-col h-full items-center lg:fixed">
      <div >
        <h2 className="font-header font-light text-front text-2xl leading-none mb-4">
          Software Engineer
        </h2>
        <h1 className="font-header font-black text-front text-5xl leading-none break-words mb-6">
          Sam Roebuck
        </h1>
        
          <ProfileImage />

        <br />

          <Location content={town} type="town"
          />

        <br />
          <Location
            content={company} type="company"
          />
      </div>

      <div className="pt-8 pb-12 lg:py-0">
        <SocialLinks social={social} />
      </div>
    </div>
  </aside>
)
export default Sidebar

import React from "react"
import About from "../about/about"
import Projects from "../projects/projects"
import WorkHistory from "../work-history/work-history"

const MainContent = ({ history, projects, profile }) => {
  return (
    <main className="lg:w-2/3 lg:pl-8 xl:pl-12">
      {profile.about && <About about={profile.about} />}
      <Projects projects={projects} />
      <WorkHistory history={history} />
    </main>
  )
}

export default MainContent

import React from "react"
import About from "../about/about"
import Projects from "../projects/projects"
import WorkHistory from "../work-history/work-history"
import BlogPosts from "../blog-posts/blog-posts"


const MainContent = ({ history, projects, profile }) => {
  return (
    <main className="lg:w-2/3 lg:pl-8 xl:pl-12">
      {profile.about && <About about={profile.about} />}
      <WorkHistory history={history} />
      <Projects projects={projects} />
      <BlogPosts />
    </main>
  )
}

export default MainContent

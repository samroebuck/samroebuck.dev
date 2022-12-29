import About from "../about/about"
import WorkHistory from "../work-history/work-history"
import { Job } from "../../types";

export interface MainContentProps {
  about: string;
  workHistory: Job[]
}

const MainContent = ({about, workHistory}: MainContentProps) => {
  return (
    <main className="lg:w-2/3 lg:pl-8 xl:pl-12">
      <About about={about}/>
      <WorkHistory workHistory={workHistory}/>
    </main>
  )
}

export default MainContent

import { Job } from "../../types";

interface WorkHistoryProps {
  workHistory: Job[]
}

const WorkHistory = ({workHistory}: WorkHistoryProps) => {
  return (
    <>
      <h2 className="font-header font-semibold text-front text-sm uppercase mt-12 mb-3 text-center">
        Work history
      </h2>
      <div className="history flex flex-col relative pt-6 pb-6 mb-16 before:absolute before:block before:top-0 before:bottom-0 before:bg-line before:content-[''] before:w-0.5 before:inset-2/4 before:-translate-x-px">
        {workHistory.map(({ company, period, position }, i) => (
          <div
            className="history-entry relative w-1/2 py-4 odd:self-end odd:pl-12 even:self-start even:pr-12 even:text-right [&:first-child>span>span]:bg-pink [&:first-child>span>span]:bg-pink [&:nth-child(even)>span]:right-0 [&:nth-child(even)>span]:translate-x-1/2 [&:nth-child(odd)>span]:left-0 [&:nth-child(odd)>span]:-translate-x-1/2"
            key={`${company}_${i}`}
          >
            <span className="dot-bg transform -translate-y-1/2 w-14 h-14 absolute bg-pink inline-flex rounded-full items-center justify-center inset-y-1/2">
              <span className="dot w-5 h-5 bg-back rounded-full" />
            </span>
            <h3 className="subpixel-antialiased">{company}</h3>

            {position && (
              <p className="text-sm font-normal mb-1">{position}</p>
            )}
            {period && (
              <p className="text-sm font-medium opacity-75">{period}</p>
            )}
          </div>
        ))}
      </div>
    </>
  )
}

export default WorkHistory

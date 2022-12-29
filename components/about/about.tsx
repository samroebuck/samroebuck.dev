interface AboutProps {about: string}

const About = ({about}: AboutProps) => (
  <>
    <h2 className="font-header font-semibold text-front text-2xl uppercase mb-3">
      About
    </h2>
    <div className="font-text text-md pb-12 leading-normal whitespace-pre-line">
      {about}
    </div>
  </>
)

export default About

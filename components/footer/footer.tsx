const Footer = () => (
  <footer className="bg-front mt-16 pt-8 pb-16">
    <div className="md:max-w-screen-sm lg:max-w-screen-xl mx-auto px-4 flex items-center">
      <div className="w-2/3 text-back font-header text-xs">
        <b>
          &copy; {new Date().getFullYear()} Sam Roebuck.
        </b>
      </div>
    </div>
  </footer>
)

export default Footer

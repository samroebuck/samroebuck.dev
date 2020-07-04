import { bool } from "prop-types"
import React from "react"
import { ProfileType } from "../../types"

const Footer = ({ name, showThemeLogo = true }) => (
  <footer className="bg-front mt-16 pt-8 pb-16">
    <div className="md:max-w-screen-sm lg:max-w-screen-xl mx-auto px-4 flex items-center">
      <div className="w-2/3 text-back-light font-header text-xs">
        <b>
          &copy; {new Date().getFullYear()} {name}.
        </b>{" "}
      </div>
      <div className="w-1/3 text-right text-xs text-back-light">
      <p>
          Built with&nbsp;
          <a
            aria-label="Intro theme"
            className="text-pink"
            href="https://weeby.studio/intro"
            rel="noopener noreferrer"
            target="_blank"
          >
          Gatsby Theme Intro
          </a>
          <br />
          customised by Sam Roebuck
          </p>
      </div>
    </div>
  </footer>
)

Footer.propTypes = {
  name: ProfileType.name,
  showThemeLogo: bool,
}

export default Footer

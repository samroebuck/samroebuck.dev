import React from "react"
import { Helmet } from "react-helmet"

const CustomFonts = () => (
  <Helmet>
    <link
      rel="preload"
      href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500&family=Source+Sans+Pro:wght@300;400;600;700;900&display=swap"
      as="style"
      onload="this.onload=null;this.rel='stylesheet'"
    />
    <noscript>
      {`<link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500&family=Source+Sans+Pro:wght@300;400;600;700;900&display=swap"
          rel="stylesheet"
          type="text/css"
      />`}
    </noscript>
  </Helmet>
)

export default CustomFonts

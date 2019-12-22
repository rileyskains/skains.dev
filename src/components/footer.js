import { Link } from "gatsby"
import React from "react"

import skainslogo from "../../public/static/skains-logo.svg"


const Footer = () => (
  <footer>
      <div className="footer-logo">
      <Link to="/"><img src={skainslogo} alt="skains logo" className="footer-logo-img" /></Link>
      </div>
      <div className="footer-interior-grid">
        <div><p>Twitter</p></div>
        <div><p>GitHub</p></div>
        <div><p>Attributions</p></div>
      </div>
      <div className="footer-copyright">
        <p>© {new Date().getFullYear()}, Riley Skains</p>
      </div>
  </footer>
)

export default Footer
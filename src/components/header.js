import { Link } from "gatsby"
import React from "react"

import skainslogo from "../../public/static/skains-logo.svg"


const Header = ({ siteTitle }) => (
  <header>
    <nav>
      <ul className="main-nav">
        <li className="push"><Link to="/"><img src={skainslogo} alt="skains logo" className="header-logo" /></Link></li>
        <li><Link to="work" className="work-gradient" activeClassName="work-gradient-active">Work</Link></li>
        <li><Link to="articles" className="articles-gradient" activeClassName="articles-gradient-active">Articles</Link></li>
        <li><Link to="contact" className="contact-gradient" activeClassName="contact-gradient-active">Contact</Link></li>
      </ul>
    </nav>
  </header>
)

export default Header
import { Link } from "gatsby"
import React from "react"


const Header = ({ siteTitle }) => (
  <header>
    <nav>
      <ul class="main-nav">
        <li className="push"><Link to="/" className="index-gradient" activeClassName="index-gradient-active">Riley Skains</Link></li>
        <li><Link to="work" className="work-gradient" activeClassName="work-gradient-active">Work</Link></li>
        <li><Link to="articles" className="articles-gradient" activeClassName="articles-gradient-active">Articles</Link></li>
        <li><Link to="contact" className="contact-gradient" activeClassName="contact-gradient-active">Contact</Link></li>
      </ul>
    </nav>
  </header>
)

export default Header
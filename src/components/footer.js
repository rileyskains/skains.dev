import { Link } from "gatsby"
import React from "react"

import skainslogo from "../../public/static/skains-logo.svg"


const Footer = () => (
	<footer>
    	<div className="footer-logo-container">
      		<Link to="/">
				<img src={skainslogo} alt="skains logo" className="footer-logo-img" />
			</Link>
      	</div>
      	<div className="footer-interior-grid">
        	<div>
				<p><a href="https://twitter.com/riley_skains">Twitter</a></p>
			</div>
        	<div>
				<p><a href="https://github.com/rileyskains">GitHub</a></p>
			</div>
        	<div>
				<p><Link to="attributions">Attributions</Link></p>
			</div>
      	</div>
      	<div className="footer-copyright">
        	<p>© {new Date().getFullYear()}, Riley Skains</p>
      	</div>
  	</footer>
)

export default Footer
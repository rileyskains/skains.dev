import React from "react"
import { Link } from "gatsby"

import SEO from "../components/seo"

const NotFoundPage = () => (
  <>
    <SEO title="404: Not found" />
    <div>

			<section className="hero--interior-page">
				<h1 className="hero__gradient-underline background-gradient--post">404: Not Found</h1>
      		</section>

			

				<section>
					<p>This page wasn't found for some reason. Sorry about that! The link you clicked on was probably broken. Feel free to <a href="https://twitter.com/riley_skains">tweet me</a> about it or put in an issue or pull request on this website's <a href="https://github.com/rileyskains/skains.dev">GitHub repository</a>!</p>
          			<p>Thank you!</p>
				</section>

				<section className="contact-grid">
					<div>
						<p>I’m always looking to make friends and start new projects! Please consider hiring me for your next website!</p>
					</div>
					<div>
						<Link to="contact" className="button background-gradient--contact">Contact</Link>
					</div>
				</section>

			</div>


	</>
)

export default NotFoundPage

import React from "react"
import { Link } from "gatsby"

import SEO from "../components/seo"
import shsu from "../images/work-examples/shsu-screenshot.jpg"

const WorkPage = () => (

	<>
    <SEO title="Work" />
		<div>

			<section className="hero--interior-page hero__background-gradient--work">
				<h1>Current & Previous Projects</h1>
      		</section>

			<div className="content-wrapper">

				<section className="interior-lead content-section">
					<h2>Constantly working on new things.</h2>
					<p>This section is temporarily a little empty as I labor to build things that showcase what my work is all about. Check back frequently!</p>
				</section>

				<section className="main-section articles-container-grid">
					<a href="https://www.shsu.edu/" title="Sam Houston State University Website">
						<article>
							<img src={shsu} alt="SHSU website screenshot" />
							<h3>SHSU Website</h3>
							<p>I've worked toward building and maintaining large portions of the Sam Houston State University website for nearly two years.</p>
						</article>
					</a>
				</section>

				<section className="contact-grid content-section">
					<div>
						<p>I’m always looking to make friends and start new projects! Please consider hiring me for your next website!</p>
					</div>
					<div>
						<Link to="contact" className="contact-button contact-button--work">Contact</Link>
					</div>
				</section>

			</div>

		</div>

	</>

)

export default WorkPage
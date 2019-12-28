import React from "react"
import { Link } from "gatsby"

import SEO from "../components/seo"

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
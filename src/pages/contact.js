import React from "react"
import { Link } from "gatsby"

import SEO from "../components/seo"
import rslogo from "../images/rs-logo.svg"

const ContactPage = () => (

	<>
    <SEO title="Contact" />
		<div>

			<section className="hero--interior-page hero__background-gradient--contact">
				<h1>Hello!</h1>
      		</section>

			<div className="content-wrapper">

				<section className="lead content-section">
					<p>I'm Riley Skains &ndash; a front-end web developer and designer based out of Huntsville, Texas. I work full-time as a web developer in the public sector, but my passion is in open source projects and bringing other people's ideas to life.</p>
				</section>

				<section className="content-section five-four-grid">
					<div>
						<div className="outline">
							<p>If you want to contact me for hiring, want to collaborate on a project, or just feel like saying hi, please email me at <a href="mailto:riley@skains.dev">riley@skains.dev</a>.</p>
							<p>For correspondence that is even more casual than that, you can find me on <a href="https://twitter.com/riley_skains">Twitter</a>.</p>
						</div>
					</div>
					<div>
						<img src={rslogo} alt="RS logo" />
					</div>
				</section>

			</div>

		</div>

	</>

)

export default ContactPage
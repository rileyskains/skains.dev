import React from "react"
import { Link } from "gatsby"

import SEO from "../components/seo"
import shsu from "../images/work-examples/shsu-screenshot.jpg"

const WorkPage = () => (

	<>
    <SEO title="Work" />
		<div>

		<div className="content-wrapper">

			<section className="hero--interior-page">
				<h1 className="hero__gradient-underline--work">Current & Previous Projects</h1>
      		</section>

			

				<section className="interior-lead content-section">
					<h2>Currently working on...</h2>
				</section>

				<section className="main-section work-example--index">
					<div className="work-example-interior">
						<div>
						<h3>Sam Houston State University</h3>
							<p>I've worked toward building and maintaining large portions of the Sam Houston State University website for over two years. I also handle all HTML mass emails.</p>
							<ul>
								<li><Link to="">More info on this project</Link></li>
								<li><a href="">Visit the SHSU website</a></li>
							</ul>
						</div>
						<div>
						<img src={shsu} alt="SHSU website screenshot" />
						</div>
					</div>
				</section>

				<section className="contact-grid content-section">
					<div>
						<p>I’m always looking to make friends and start new projects! Please consider hiring me for your next website!</p>
					</div>
					<div>
						<Link to="contact" className="contact-button contact-button--contact">Contact</Link>
					</div>
				</section>

			</div>

		</div>

	</>

)

export default WorkPage
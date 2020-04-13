import React from "react"
import { Link } from "gatsby"

import SEO from "../components/seo"
import shsu from "../images/work-examples/shsu-screenshot.jpg"

const WorkPage = () => (

	<>
    <SEO title="Work" />
		<div>

		

			<section className="hero--interior-page">
				<h1 className="hero__gradient-underline background-gradient--work">Current & Previous Projects</h1>
      		</section>

			

				<section className="lede--left">
					<h2>Currently working on...</h2>
				</section>

				<section className="work-example background-gradient--shsu">
					<div className="work-example-interior-grid">
						<div>
						<h3>Sam Houston State University</h3>
							<p>I've worked toward building and maintaining large portions of the Sam Houston State University website for over two years. I also handle all HTML mass emails.</p>
							<ul>
								<li><a href="https://www.shsu.edu/">SHSU Website</a></li>
							</ul>
							<Link to="projects/shsu" className="button background-gradient--shsu">Project Info</Link>

						</div>
						<div>
						<img src={shsu} alt="SHSU website screenshot" />
						</div>
					</div>
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

export default WorkPage
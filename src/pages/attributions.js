import React from "react"
import { Link } from "gatsby"

import SEO from "../components/seo"

const WorkPage = () => (

	<>
    <SEO title="Work" />
		<div>

			<section className="hero--interior-page hero__background-gradient--post">
				<h1>Current & Previous Projects</h1>
      		</section>

			<div className="content-wrapper">

                <p>Thank you to the following for contributing in some way to this project - knowingly or not!</p>

                <ul>
                    <li><a href="https://twitter.com/pablostanley">Pablo Stanley</a> - <a href="https://www.humaaans.com/">Humaaans</a></li>
                        <ul>
                            <li>Beautiful illustrations used with modifications to color.</li>
                        </ul>
                    <li>Gradients - both for straight-up gradients and general inspiration
                        <ul>
                            <li><a href="https://twitter.com/dimabraven">Dima Braven</a> - <a href="https://webgradients.com/">WebGradients.com</a></li>
                            <li><a href="https://github.com/webkul">Webkul Software</a> - <a href="https://webkul.github.io/coolhue/">CoolHue</a></li>
                        </ul>
                    </li>
                </ul>

				<section className="contact-grid content-section">
					<div>
						<p>I’m always looking to make friends and start new projects! Please consider hiring me for your next website!</p>
					</div>
					<div>
						<Link to="contact" className="contact-button contact-button--post">Contact</Link>
					</div>
				</section>

			</div>

		</div>

	</>

)

export default WorkPage
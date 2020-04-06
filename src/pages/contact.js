import React from "react"

import SEO from "../components/seo"
import avatar from "../images/avatar.svg"

const ContactPage = () => (

	<>
    <SEO title="Contact" />
		<div>
			<section className="hero--interior-page">
				<h1 className="hero__gradient-underline background-gradient--contact">Hello!</h1>
      		</section>

				<section className="contact-page-grid">
					<div>
							<img src={avatar} alt="Riley's avatar" />
					</div>
					<div>
						<p>If you want to contact me for hiring, want to collaborate on a project, or just feel like saying hi, please email me at <a href="mailto:riley@skains.dev">riley@skains.dev</a>.</p>
						<p>For correspondence that is even more casual than that, you can find me on <a href="https://twitter.com/riley_skains">Twitter</a>.</p>
					</div>
				</section>

			</div>


	</>

)

export default ContactPage
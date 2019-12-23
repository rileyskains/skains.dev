import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const ContactPage = () => (

	<Layout>
    <SEO title="Contact" />
		<div className="body__background-gradient--contact">

			<section className="hero--interior-page">
				<h1>Contact Me</h1>
      		</section>

      		<main>
        		<div className="content-wrapper">

          			<section className="lead content-section">
            			<h2>Making the world better through websites.</h2>
            			<p>I create functional and accessible websites and web applications. Hire me to build a website, put together a design, or write an article.</p>
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
      		</main>

		</div>

	</Layout>

)

export default ContactPage
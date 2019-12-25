import React from "react"
import { Link } from "gatsby"

import SEO from "../components/seo"

const ArticlesPage = () => (

	<>
    <SEO title="Articles" />
		<div>

			<section className="hero--interior-page hero__background-gradient--articles">
				<h1>Research, Articles, & Blogs</h1>
      		</section>

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
						<Link to="contact" className="contact-button contact-button--articles">Contact</Link>
					</div>
				</section>

			</div>

		</div>

	</>

)

export default ArticlesPage
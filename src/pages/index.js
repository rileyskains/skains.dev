import React from "react"
import { Link } from "gatsby"


import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import hero from "../../public/static/hero-humaaans.svg"
import whiteboard from "../../public/static/whiteboard.svg"
import skainslogo from "../../public/static/skains-logo.svg"
import nthchild from "../../public/static/nth-child.png"
import queen from "../../public/static/queen.svg"
import a11y from "../../public/static/a11y.svg"

const IndexPage = () => (

	<Layout>
    <SEO title="Home" />
		<div className="body__background-gradient--index">

			<section className="hero">
				<div>
					<h1>Front-End Developer<br />& Designer</h1>
          			<Link to="contact" className="button">Start a project &rarr;</Link>
        		</div>
				<div>
        			<img src={hero} alt="Riley creating wireframes illustration." />
        		</div>
      		</section>

      		<main>
        		<div className="content-wrapper">

          			<section className="lead content-section">
            			<h2>Making the world better through websites.</h2>
            			<p>I create functional and accessible websites and web applications. Hire me to build a website, put together a design, or write an article.</p>
          			</section>

          			<section className="five-four-grid content-section">
            			<div>
              				<div className="five-four-grid__section">
                				<h3>Have a look at my work</h3>
                				<p>All of my <Link to="work">personal projects</Link> are developed in the open on <a href="https://github.com/rileyskains">GitHub</a> so that I can share my explorations and discoveries with the community.</p>
              				</div>
              				<div className="five-four-grid__section">
                				<h3>Read some of my articles</h3>
                				<p>Our modern web impacts people and our society on a fundamental level. <Link to="articles">I frequently write</Link> about design, accessibility, and culture.</p>
              				</div>
              				<div className="five-four-grid__section">
                				<h3>Get in touch with me</h3>
                				<p>Feel free to <Link to="contact">reach out</Link> about hiring me, starting a project, or just to say hello! Ideas, suggestions, and new friends are always welcome!</p>
              				</div>
            			</div>
            			<div>
            				<img src={whiteboard} alt="Whiteboard design drawings" />
            			</div>
          			</section>

          			<section className="lead content-section">
            			<h2>Skills & Passions</h2>
            			<p>My interests are perpetually evolving, but the boxes below are my staples. Additionally, advocacy for groups in need is something I’m passionate about!</p>
          			</section>

		  			<section className="four-five-grid content-section">
            			<div className="vertical-half-grid">
              				<div>
              					<img src={nthchild} alt="nth-child CodePen Challenge screenshot" />
              					<h3>HTML, CSS, & JavaScript</h3>
              					<p>The most basic building blocks of the web still make me the happiest! My <a href="https://codepen.io/rileyskains">CodePen</a> is proof of that!</p>
              				</div>
              				<div>
              					<img src={a11y} alt="Accessiblity visual impairment logo" />
              					<h3>#A11Y</h3>
              					<p>Ensuring every website is accessible makes the web better for all of us. <Link to="articles">Doing my part</Link> makes me proud.</p>
              				</div>
            			</div>
            			<div>
              				<div>
            					<img src={queen} alt="Queen Bee" />
            					<h3>SVG</h3>
            					<p>A personal favorite of mine! SVGs have a ton of potential and can be controlled in <a href="https://rileyskains.github.io/bee-pository/">lots of neat ways</a>.</p>
            				</div>
            				<img src={skainslogo} alt="skains logo" />
            			</div>
          			</section>

          			<section className="contact-grid content-section">
            			<div>
              				<p>I’m always looking to make friends and start new projects! Please consider hiring me for your next website!</p>
            			</div>
            			<div>
            				<Link to="contact" className="contact-button contact-button--index">Contact</Link>
            			</div>
          			</section>

        		</div>
      		</main>

		</div>

	</Layout>

)

export default IndexPage
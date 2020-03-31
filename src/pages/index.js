import React from "react"
import { Link } from "gatsby"

import SEO from "../components/seo"
import avatar from "../images/avatar.svg"
import whiteboard from "../images/whiteboard.svg"
import skainslogo from "../images/skains-logo.svg"
import nthchild from "../images/non-svg/nth-child.jpg"
import queen from "../images/queen.svg"
import a11y from "../images/a11y.svg"

const IndexPage = () => (

	<>
    <SEO title="Home" />
		<div>

			

			<div className="content-wrapper">

			<section className="hero">
				<div>
				<img src={avatar} alt="Riley's avatar" />
					
				</div>
				<div className="hero-project-div background-gradient--contact">
					<div>
					<h1>I'm Riley.<br />I'm a Front-End Developer & Designer.</h1>
						<p>Working on stuff is fun for me! Do you have something I can do?</p>
          				<Link to="contact" className="button">Start a project &rarr;</Link>
					</div>
        		</div>
      		</section>

				<section className="lead content-section">
					<h2>Making the world better through websites.</h2>
					<p>I create functional and accessible websites and web applications. Hire me to build a website, put together a design, or write an article.</p>
				</section>

				<section className="five-four-grid content-section">
					<div className="background-gradient--work">
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

				<section className="detail-grid content-section">
					<div><Link to="" className="button">Family</Link></div>
					<div><Link to="" className="button">Art</Link></div>
					<div><Link to="anime" className="button">Anime</Link></div>
					<div><Link to="" className="button">Fiction</Link></div>
					<div><Link to="" className="button">Lab</Link></div>
				</section>

				<section className="four-five-grid content-section background-gradient--index">
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
					<div className="vertical-half-grid">
						<div>
							<img src={queen} alt="Queen Bee" />
							<h3>SVG</h3>
							<p>A personal favorite of mine! SVGs have a ton of potential and can be controlled in <a href="https://rileyskains.github.io/bee-pository/">lots of neat ways</a>.</p>
						</div>
						<div>
							<img src={skainslogo} alt="skains logo" />
						</div>
					</div>
				</section>

				<section className="contact-grid content-section">
					<div>
						<p>I'm always looking to make friends and start new projects! Please consider hiring me for your next website!</p>
					</div>
					<div>
						<Link to="contact" className="contact-button contact-button--contact">Contact</Link>
					</div>
				</section>

			</div>

		</div>

	</>

)

export default IndexPage
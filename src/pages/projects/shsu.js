import React from "react"
import { Link } from "gatsby"

import SEO from "../../components/seo"


const ShsuPage = () => (

	<>
    <SEO title="SHSU" />
      <div>

     

      <section className="hero--interior-page">
				<h1 className="hero__gradient-underline background-gradient--shsu">Sam Houston State University Website</h1>
      		</section>


              <p>I've worked as a <strong>web and media developer</strong> on the <a href="https://www.shsu.edu/">Sam Houston State University website</a> for more than two years now. I work on-campus in Huntsville, Texas. This job is my primary source of income, so it takes up a significant portion of my week.</p>
              <p>My job duties typically include:</p>
              <ul>
                  <li>Accessibility</li>
                  <li>Design</li>
                  <li>Quality Assurance</li>
                  <li>Governance</li>
              </ul>


      <section className="contact-grid">
					<div>
						<p>I'm always looking to make friends and start new projects! Please consider hiring me for your next website!</p>
					</div>
					<div>
						<Link to="contact" className="button background-gradient--contact">Contact</Link>
					</div>
				</section>

			</div>
        
      

	</>



)



export default ShsuPage
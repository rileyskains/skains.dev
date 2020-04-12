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
              <h2>Accessibility</h2>
              <p>Making sure the website and all web content is accessible is a major part of the job. We also need to be outspoken advocates for digital accessibility across all areas of campus, not just the website.</p>
              <p>Not only is it morally imperative that all people are able to use our website equally, it is an absolute requirement. All content must meet <a href="https://www.w3.org/TR/WCAG21/">WCAG 2.1</a> guidlines to at least a level of AA (though we always push toward AAA when possible).</p>
              <p>Since we are a state university, we have several sets of criteria set by both the state and national governments that we must ensure we are in line with.</p>
              <ul>
                  <li><a href="https://www.section508.gov/">Section 508</a></li>
                  <li><a href="https://texreg.sos.state.tx.us/public/readtac$ext.ViewTAC?tac_view=4&ti=1&pt=10&ch=206">Texas Administrative Code 206</a></li>
                  <li><a href="https://texreg.sos.state.tx.us/public/readtac$ext.ViewTAC?tac_view=4&ti=1&pt=10&ch=213">Texas Administrative Code 213</a></li>
              </ul>
              <p>In accordance with these policies, we request and follow up on <abbr title="Voluntary Product Accessibility Template">VPAT</abbr>s from vendors. We also follow get a yearly, manual site audit from a third party provider to ensure we maintain compliance.</p>
              <h2>Tools</h2>
              <p>Since there are only 4 web developers in my department, we have to rely heavily upon our tools to get the job done. Some of those tools are more modern than others, but all of them serve their purpose.</p>
              <p>Some tools of note are:</p>
              <ul>
                  <li><a href="https://dotcms.com/">DotCMS</a>
                    <ul>
                        <li>DotCMS is our content management system. We have a large number of editors (detailed above), and DotCMS allows us to manage all of the content they create and keep it in a variety of different states.</li>
                        <li>Having such a large and flexible system is a constant source of challenges to both meet the needs of our users, but also keep a certain amount of control over brand guidelines, accessibility, best practices.</li>
                    </ul>
                  </li>
                <li><a href="https://siteimprove.com/en-us/">SiteImprove</a>
                    <ul>
                        <li>SiteImprove is our automated tool for accessibility, SEO, content quality, security issues, and general data generation.</li>
                        <li>While this can't catch every problem, it can find broad problems and let us know what we need to correct on the whole site and across different templates.</li>
                        <li>Custom policies and searches allow us powerful access to our content so we can be confident in our decisions.</li>
                    </ul>
                </li>
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
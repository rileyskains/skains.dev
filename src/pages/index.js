import React from "react"
import { Link } from "gatsby"


import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import "../styles/main.scss"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className="index-gradient-primary">
      <div className="hero-section">
        <div className="hero-interior-container">
          <div className="spin-container">
            <div className="hero-white-card">
              <h1 className="hero-h1">i make websites</h1>
            </div>
          </div>
        </div>
      </div>
      <div className="main-body">
        <div className="main-content">
          <section>
            <div class="half-grid">
              <div>
                <h2>what i advocate for</h2>
                <p>People wielding the power of the Internet have nearly unlimited potential. I believe that all people, regardless of their economic power, race, religion, sexuality, gender, disability, location, or any other major or minor characteristic, should be able to use the Internet as equals.</p>
                <p>By collaborating with a diverse set of individuals through open-source methods, we can encourage positive work-life balance and empathy both in the work place and in our personal lives.</p>
                <p>Understanding the needs and wants of those around us, no matter how simple, can make a major difference in our approach to life and future work.</p>
                <ul>
                  <li>One member of a family working remotely may save their family thousands of dollars a year in transportation, childcare, and food.</li>
                  <li>Flexible working hours may give your team member the opportunity to pursue counseling or ongoing trauma. It may allow another team member to donate their time to a charity during the day.</li>
                </ul>
              </div>
              <div>

              </div>
            </div>
            
          </section>
          <section>
            <h2>more about me</h2>
            <p>I live in Huntsville, Texas with my wife and two dogs.</p>
            <p>In addition to freelancing, I also work for Sam Houston State University as a Web & Media Developer.</p>
            <p>Most of my media consumption is definitely on the Internet. I watch a bunch of different things on YouTube. A few of my favorites right now are historical nautical videos, anything on the Bon Appetit channel, and the Yogscast.</p>
            <p>We also watch a lot of anime! Please feel free to have a look at my Anilist and talk to me on Twitter about anything on there. I am not a fanatic, so please don't expect me to have super strong opinions on things. I just like to appreciate the interesting stories and awesome animation and talk about them with my wife and other people on the Internet.</p>
            <p>You'll learn more about me by looking at my <Link to="work">work</Link> and <Link to="articles">articles</Link>!</p>
          </section>
        </div>
      </div>
    </div>
  </Layout>
)

export default IndexPage

import React from "react"
import { Link } from "gatsby"


import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import "../styles/main.scss"
import sitting from "../../public/static/sitting.svg"
import wireframe from "../../public/static/wireframe.svg"
import rslogo from "../../public/static/rs-logo.svg"
import skainslogo from "../../public/static/skains-logo.svg"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className="index-gradient-primary">
      <section className="hero-section">
        <div>
          <h1>Front-End Developer<br />& Designer</h1>

          <button>Start a project &rarr;</button>
        </div>
        <div>
        <img src={sitting} alt="Person sitting on a rock." className="sitting" />
        </div>
        <div>
        <img src={wireframe} alt="Website wireframes." className="wireframes" />
        </div>
      </section>
      <div className="main-body">
        <div className="main-content">
          <section className="text-center lead">
            <h2>Making the world better through websites.</h2>
            <p>I create functional and accessible websites and web applications. Hire me to build a website, put together a design, or write an article.</p>
          </section>
          <section className="logo-half-grid">
            <div>
              <div className="smaller-sections">
                <h3>Have a look at my work</h3>
                <p>All of my personal projects are developed in the open on GitHub so that I can share my explorations and discoveries with the community.</p>
              </div>
              <div className="smaller-sections">
                <h3>Read some of my articles</h3>
                <p>Our modern web impacts people and our society on a fundamental level. I frequently write about design, accessibility, and culture.</p>
              </div>
              <div className="smaller-sections">
                <h3>Get in touch with me</h3>
                <p>Feel free to reach out about hiring me, starting a project, or just to say hello! Ideas, suggestions, and new friends are always welcome!</p>
              </div>
            </div>
            <div>
            <img src={rslogo} alt="RS logo" className="rslogo" />
            <img src={skainslogo} alt="skains logo" className="rslogo" />
            </div>
          </section>
        </div>
      </div>
    </div>
  </Layout>
)

export default IndexPage

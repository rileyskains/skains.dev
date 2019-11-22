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
            <h2>my most recent stuff</h2>
            <div className="large-grid">
                <div className="grid-cell work-gradient-standard">
                  <div className="grid-cell-interior">
                    
                  </div>
                </div>
                <div className="grid-cell articles-gradient-standard">
                  
                </div>
                <div className="grid-cell contact-gradient-standard">
                  
                </div>
            </div>
          </section>
          <section>
            <h2>what i advocate for</h2>
          </section>
          <section>
            <h2>more about me</h2>
          </section>
        </div>
      </div>
    </div>
  </Layout>
)

export default IndexPage

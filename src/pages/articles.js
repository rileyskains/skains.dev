import React from "react"
import { Link, graphql } from "gatsby"

import SEO from "../components/seo"

class ArticlesPage extends React.Component {
	render() {
	  	const { data } = this.props
	  	const posts = data.allMarkdownRemark.edges

	  	return (
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

        				<section className="main-section articles-container-grid">
          					{posts.map(({ node }) => {
            					const title = node.frontmatter.title || node.fields.slug
            					return (
              						<Link to={node.fields.slug}>
										<article key={node.fields.slug}>
                							<h3>{title}</h3>
                  							<p className="article-date">{node.frontmatter.date}</p>
                						
											<section>
                  								<p
                    								dangerouslySetInnerHTML={{
                      									__html: node.frontmatter.description || node.excerpt,
                    								}}
                  								/>
                							</section>
              							</article>
			  						</Link>
            					)
          					})}
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

	}

}

export default ArticlesPage


export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
          }
        }
      }
    }
  }
`
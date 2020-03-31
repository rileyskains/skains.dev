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
				<div className="content-wrapper">
					<section className="hero--interior-page">
						<h1 className="hero__gradient-underline--articles">Research, Articles, & Blogs</h1>
      				</section>

					
						<section className="interior-lead content-section">
							<h2>Find something that interests you.</h2>
							<p>I write about development, my own investigations, and things that are going on in my life.</p>
						</section>

        				<section className="main-section articles-container-grid">
          					{posts.map(({ node }) => {
            					const title = node.frontmatter.title || node.fields.slug
            					return (
              						<Link to={node.fields.slug} title={node.frontmatter.title}>
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
								<Link to="contact" className="contact-button contact-button--contact">Contact</Link>
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
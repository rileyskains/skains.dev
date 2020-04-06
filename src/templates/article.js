import React from "react"
import { Link, graphql } from "gatsby"

import SEO from "../components/seo"

class ArticleTemplate extends React.Component {
  	render() {
    	const post = this.props.data.markdownRemark

    return (
      	<>
        	<SEO
          	title={post.frontmatter.title}
          	description={post.frontmatter.description || post.excerpt}
        	/>

			

				<section className="hero--interior-page">
  					<h1 className="hero__gradient-underline background-gradient--articles">{post.frontmatter.title}</h1>
  					<p>{post.frontmatter.date}</p>
    			</section>

      			<div className="content-wrapper article-wrapper">
        			<article>
          				<section dangerouslySetInnerHTML={{ __html: post.html }} />
        			</article>
        		</div>


				<section className="contact-grid">
					<div>
						<p>I’m always looking to make friends and start new projects! Please consider hiring me for your next website!</p>
					</div>
					<div>
						<Link to="contact" className="button background-gradient--contact">Contact</Link>
					</div>
				</section>
        	
      	</>
    )
  }
}

export default ArticleTemplate

export const pageQuery = graphql`
  	query BlogPostBySlug($slug: String!) {
    	site {
      		siteMetadata {
        		title
      		}
    	}
    	markdownRemark(fields: { slug: { eq: $slug } }) {
      		id
      		excerpt(pruneLength: 160)
      		html
      		frontmatter {
        		title
        		date(formatString: "MMMM DD, YYYY")
        		description
      		}
    	}
  	}
`
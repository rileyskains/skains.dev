import React from "react"
import { Link, graphql } from "gatsby"

import SEO from "../components/seo"

class ArticleTemplate extends React.Component {
  	render() {
    	const post = this.props.data.markdownRemark
    	const { previous, next } = this.props.pageContext

    return (
      	<>
        	<SEO
          	title={post.frontmatter.title}
          	description={post.frontmatter.description || post.excerpt}
        	/>

			<div>

				<section className="hero--interior-page hero__background-gradient--post">
  					<h1>{post.frontmatter.title}</h1>
  					<p>{post.frontmatter.date}</p>
    			</section>

      			<div className="content-wrapper">
        			<article>
          				<section dangerouslySetInnerHTML={{ __html: post.html }} />
        			</article>
        		</div>
        	</div>
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
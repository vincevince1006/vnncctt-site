import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title
  const posts = data.allMarkdownRemark.edges

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="Home" />
      <section class="homepageIntro">
        <h2>About Me</h2>
        <div class="homepageIntro__inner">
          <h3
            style={{
              fontSize: `20px`,
              fontWeight: `300`
            }}
          >
            I work in the civic space, collaborating with other designers and engineers to make public services and it's software easier to use.
          </h3>
          <p>I'm passionate about diving into both design and code, blending hard-won knowledge from both disciplines. Check out my <a href="/works">portfolio</a> and <a href="/resume">resume</a> to learn more.</p>
        </div>
      </section>
      <h2>Writing</h2>
      <p>I try to write a new article on stuff I've learned <em>at least</em> once a month.</p>
      <section className="main__inner-articleList">
      {posts.map(({ node }) => {
        const title = node.frontmatter.title || node.fields.slug
        return (
          <article key={node.fields.slug}>
              <h3>
                <Link style={{ boxShadow: `none` }} to={node.fields.slug}>
                  {title}
                </Link>
              </h3>
              <small><strong>{node.frontmatter.date}</strong></small>
            <div className="article__preview">
              <p
                dangerouslySetInnerHTML={{
                  __html: node.frontmatter.description || node.excerpt,
                }}
              />
            </div>
          </article>
        )
      })}
      </section>
    </Layout>
  )
}

export default BlogIndex

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

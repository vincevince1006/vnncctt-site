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
        <p>My professional life has taken me from natural history museums to school districts and now, the federal government.</p>
        <p>I work best in the civic space, collaborating with other designers and engineers who are there to make public services and it's software easier to use. My philosophy is to look at the whole user journey outside the product I'm designing, knowing that the interface is just one part of a user's  interaction.</p>
        <p>I'm passionate about diving into the code too, and use primarily Javascript-based tools and frameworks to create products. Though in the past, I've worked with Drupal and Wordpress. Check out my Portfolio and Resume to learn more.</p>
      </section>
      <h2>Writing</h2>
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

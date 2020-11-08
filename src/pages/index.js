import React from "react"
import { Link, graphql } from "gatsby"
import Image from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title
  const posts = data.allMarkdownRemark.edges

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="Home" />
      <div className="fancy-gradient">
      <section className="base-container homepageIntro">
        <Image className="homepageIntro__img" fixed={data.avatar.childImageSharp.fixed} />
        <div className="homepageIntro__inner">
        <h2>I'm a Front End Developer</h2>
          <h3>
            For the past few years I've worked in the civic tech sector, collaborating with designers and engineers to make web sites and applications easier to use.
          </h3>
          <p><strong><a href="/works">View my portfolio &rarr;</a></strong></p>
        </div>
      </section>
      </div>
      <div className="base-container">
      <h2>Writing</h2>
      <p>Tips, tricks, and other things I've found helpful as a developer/designer.</p>
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
      </div>
    </Layout>
  )
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    avatar: file(absolutePath: { regex: "/bio.png/" }) {
      childImageSharp {
        fixed(
          quality: 100,
          width: 150,
          height: 150
        ) {
          ...GatsbyImageSharpFixed
        }
      }
    }
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

import React from "react"
import { Link, graphql } from "gatsby"

import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"

const ResumeIndex = ({ data }) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout title={siteTitle}>
    <SEO title="Portfolio" />
    <h2>Portfolio</h2>
    <p>A small sampling of projects I've worked on.</p>
    <h3>govinfo.gov</h3>
    <h3>HCPSS StoryStrong</h3>
    <h3>HCPSS Staff Directory</h3>
    </Layout>
  )
}

export default ResumeIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`

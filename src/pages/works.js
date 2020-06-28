import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Img from 'gatsby-image'

const PortfolioIndex = ({ data }) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout title={siteTitle}>
    <SEO title="Portfolio" />
    <div className="portfolioBody">
    <h2>Portfolio</h2>
    <p>A small sampling of projects I've worked on.</p>

    <h3>govinfo.gov</h3>
    <small><strong>Role:</strong> User Interface Designer | 2019 - present | <Link to={"https://www.govinfo.gov/"}>https://www.govinfo.gov/</Link></small>
    <Img className="portfolioImg" fluid={data.govinfo.childImageSharp.fluid} alt="" />
    <p>As the sole designer on this contract, I manage the front end of a large Backbone.js application and Drupal 7 website that was built in 2016. The biggest challenge has been ensuring that new designs and code are uniform between the two environments. The project has taught me about the importance of creating design systems, digital governance, and how to build functional, reusable design components within a Javascript ecosystem.</p>
    <h4>Selected Accomplishments</h4>
    <ul>
      <li>Creating a design language inspired by USWDS and built a living style guide</li>
      <li>Prototyping designs and implementing them into full working products</li>
      <li>Developed a visual regression testing tool using a Javascript testing framework</li>
      <li>Making improvements to existing designs based on client feedback</li>
    </ul>

    <h3>HCPSS StoryStrong</h3>
    <small><strong>Role:</strong> Front-end Developer | 2017 | <a href="https://storystrong.hcpss.org/" target="_blank">https://storystrong.hcpss.org/</a></small>
    <Img className="portfolioImg" fluid={data.storystrong.childImageSharp.fluid} alt="" />
    <p>During my time at Howard County Public School System, I was approached by leadership staff who wanted to build a platform for students and staff to post blog entries using text, video, and audio.</p>
    <p>I conducted interviews with the project leaders to create content types, establish user submission requirements, and mocked up what each content type would look like using Adobe Experience Designer (XD). From there I took the completed mockups and built a site from the ground up using Jekyll, a Ruby-based static site generator, and worked with staff to upload/maintain content. </p>
    <h4>Selected Accomplishments</h4>
    <ul>
      <li>Creating a design language inspired by USWDS and built a living style guide</li>
      <li>Prototyping designs and implementing them into full working products</li>
      <li>Developed a visual regression testing tool using a Javascript testing framework</li>
      <li>Making improvements to existing designs based on client feedback</li>
    </ul>

    <h3>HCPSS Staff Directory</h3>
    <small><strong>Role:</strong> Front-end Developer | 2017-2018 | <a href="https://directory.hcpss.org/" target="_blank">https://directory.hcpss.org/</a></small>
    <Img className="portfolioImg" fluid={data.directoryProject.childImageSharp.fluid} alt="" />
    <p>Howard County Public School System was using a large PDF file as it’s online phone directory, which was maintained by a single staff member not associated with Human Resources. HCPSS had moved to Workday as it’s HR system and I saw an opportunity to create a dynamic and searchable directory. I collaborated with data analysts from HR to strategize the best ways to get employee data and maintain it within the web application.</p>
    <p>I chose to build it using Symfony2, a PHP MVC framework, because we had a subject matter expert I could look to for advice. This application was the first of it’s kind for the school system, and continues to deliver up to date contact information for staff and the public.</p>
    <h4>Selected Accomplishments</h4>
    <ul>
      <li>Built both the front and back end of a complex application from the ground up</li>
      <li>Decided on functionality and design while weighing technical decisions on application architecture, the employee data to display, and user experience</li>
      <li>Took unorganized data and turned it into useful, structured data for web use</li>
    </ul>
    </div>
    </Layout>
  )
}

export default PortfolioIndex

export const portfolioImage = graphql`
  fragment portfolioImage on File {
    childImageSharp {
      fluid(quality: 100) {
        ...GatsbyImageSharpFluid
      }
    }
  }
`

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    govinfo: file(relativePath: { eq: "govinfo.png" }) {
      ...portfolioImage
    }
    storystrong: file(relativePath: { eq: "storystrong.png" }) {
      ...portfolioImage
    }
    directoryProject: file(relativePath: { eq: "hcpss-directory.png" }) {
      ...portfolioImage
    }
  }
`

import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Img from 'gatsby-image'

const PortfolioIndex = ({ data }) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout title={siteTitle}>

    <SEO title="Portfolio" />

    <div className="fancy-gradient">
      <section className="base-container">
      <h2>Portfolio</h2>
      <p>A small sampling of projects I've worked on.</p>
      </section>
    </div>

    <div className="base-container portfolioBody">
    <section className="portfolioBody__project">
      <h3>govinfo.gov: main document repository</h3>

      <small><strong>Role:</strong> User Interface Designer | 2019 - present | <a href="https://www.govinfo.gov/" target="_blank" rel="noopener noreferrer">https://www.govinfo.gov/</a></small>

      <Img className="portfolioImg" fluid={data.govinfo.childImageSharp.fluid} alt="" />

      <h4>Overview</h4>
      <p>govinfo.gov is the official document repository for publications from Congress and various other government branches. I'm the project's sole designer, managing both the UI design and front end code for various sites and applications.</p>

      <h4>Primary Duties</h4>
      <ul>
        <li>Gathering design requirements and ideas from internal federal clients</li>
        <li>Creating mockups, user flows, and high-fidelity prototypes to guide design choices</li>
        <li>Developing the front end for new UI features using HTML, SCSS, and Javascript</li>
      </ul>

      <h4>Dev Tools:</h4>
      <p>React.js, Drupal, Backbone.js, Gulp/Webpack</p>

      <h4>Design Tools:</h4>
      <p>Adobe XD, Photoshop, Illustrator, SCSS, Bootstrap, Fractal.js</p>

      <h4>Selected Accomplishments</h4>
      <ul>
        <li>Built reusable UI design components shared between a CMS and multiple web applications</li>
        <li>Created a living style guide to document both existing and new design choices</li>
        <li>Improved code for site social media sharing functionality and search metadata creation</li>
        <li>Developed a visual regression testing tool using a Javascript testing framework</li>
      </ul>
    </section>

    <section className="portfolioBody__project">
      <h3>govinfo.gov: curated content search</h3>

      <small><strong>Role:</strong> User Interface Designer | 2019 - present | <a href="https://www.govinfo.gov/cs/" target="_blank" rel="noopener noreferrer">https://www.govinfo.gov/cs/</a></small>

      <Img className="portfolioImg" fluid={data.govinfo_cs.childImageSharp.fluid} alt="" />

      <p>govinfo.gov primary function is to search across government documents, but there's also curated content in the form of feature articles, help documentation for end users, and developer documentation that needed to be made searchable and have a corresponding UI.</p>

      <h4>Primary Duties</h4>
      <ul>
        <li>Create mockups to model what the search experience would look like for end users</li>
        <li>Write React.js components and SCSS based on approved designs alongside a team of engineers</li>
        <li>Ensure all front end code and UI styles is consistent with the main govinfo project</li>
      </ul>

      <h4>Dev Tools:</h4>
      <p>React.js, Drupal, Webpack</p>

      <h4>Design Tools:</h4>
      <p>Adobe XD, Photoshop, SCSS, Bootstrap</p>

      <h4>Selected Accomplishments</h4>
      <ul>
        <li>Brought design ideas from concepts to a full working product in React.js</li>
        <li>Rewrote all front end components from jQuery to a React.js/ES6 architecture</li>
        <li>Made Drupal webpage metadata and HTML structures more search-engine friendly</li>
      </ul>

    </section>

    <section className="portfolioBody__project">
      <h3>HCPSS StoryStrong</h3>

      <small><strong>Role:</strong> Front-end Developer | 2017 | <a href="https://storystrong.hcpss.org/" target="_blank" rel="noopener noreferrer">https://storystrong.hcpss.org/</a></small>

      <Img className="portfolioImg" fluid={data.storystrong.childImageSharp.fluid} alt="" />

      <p>During my time at HCPSS, I was approached by leadership staff who wanted to build a self-hosted platform for students and staff to post blog entries using text, video, and audio. This was the first of it's kind for the organization and had to be turned around on a tight deadline for a community event showcasing the entires.</p>

      <h4>Primary Duties</h4>
      <ul>
        <li>Conduct interviews with project leaders to create content types, wireframes, and establish user submission requirements</li>
        <li>Design/code the UI for a static site generator (Jekyll) and create standardized templates for all content</li>
      </ul>

      <h4>Dev Tools:</h4>
      <p>Jekyll (a Ruby-based static site generator), Gulp</p>

      <h4>Design Tools:</h4>
      <p>Adobe XD, Photoshop, SCSS</p>

      <h4>Selected Accomplishments</h4>
      <ul>
        <li>Took this from content strategy to UI prototyping, and built the full working product</li>
        <li>Used a mobile-first responsive design approach and modern CSS/design methodologies, successes with these new methodologies informed future web products</li>
        <li>Helped create a content publishing schedule and requirements for new site content</li>
      </ul>
    </section>

    <section className="portfolioBody__project">
      <h3>HCPSS Staff Directory</h3>

      <small><strong>Role:</strong> Front-end Developer | 2017-2018 | <a href="https://directory.hcpss.org/" target="_blank" rel="noopener noreferrer">https://directory.hcpss.org/</a></small>

      <Img className="portfolioImg" fluid={data.directoryProject.childImageSharp.fluid} alt="" />

      <p>HCPSS had moved to Workday as it’s HR system and it provided up to date contact information for all staff into one place. This was an opportunity to create a dynamic and searchable directory to replace their former PDF-centric directory that was not user friendly.</p>

      <h4>Primary Duties</h4>
      <ul>
        <li>Work with HR data analysts to strategize ways to programatically fetch employee contact information and maintain it within a web application</li>
        <li>Build both UI and back end functionality to consume data and provide an interface to search for active employees</li>
      </ul>

      <h4>Dev Tools:</h4>
      <p>Symfony2, PHP/MySQL, Twig</p>

      <h4>Design Tools:</h4>
      <p>SCSS</p>

      <h4>Selected Accomplishments</h4>
      <ul>
        <li>Created a full project plan including how data would be synced from an external system, database design/application flow, and data quality policies</li>
        <li>Decided on functionality and design while weighing technical decisions on application architecture, employee contact information to display, and user experience</li>
        <li>Took unorganized data sets and turned it into useful, structured data for web use</li>
      </ul>
    </section>
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
    govinfo_cs: file(relativePath: { eq: "govinfo_cs.png" }) {
      ...portfolioImage
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

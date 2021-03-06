import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const ResumeIndex = ({ data }) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout title={siteTitle}>
    <SEO title="Resume/CV" />
    <div className="fancy-gradient">
      <div className="base-container">
        <h2>Resume</h2>
        <p>Full resume is also available on <a href="https://docs.google.com/document/d/19uapztoy7VH2hWbKyin_ucz0BJhnaMOup6gvD9I-57w/edit" target="_blank" rel="noreferrer">Google Drive</a></p>
      </div>
    </div>
    <div className="resumeBody base-container">
    <h3>User Interface Designer, PTFS, Inc.</h3>
    <small>Washington, DC | February 2019 - present</small>
      <ul>
        <li>Providing UX design and front end development expertise for the U.S. Government Publishing Office’s govinfo.gov project.</li>
        <li>Creating wireframes, user flows, and design prototypes while collaborating with federal clients and engineering teams.</li>
        <li>Contributing HTML/CSS/Javascript code to a legacy Backbone.js application, new React.js application, and Drupal 7 site.</li>
        <li>Making existing designs Section 508 compliant and ensuring all new designs are created with accessibility in mind.</li>
        <li>Building workflow tools using Gulp/Webpack, maintaining a UI style guide to document designs, and writing software tests using a Javascript framework.</li>
        <li>Participating in agile/scrum processes for deploying changes to development environments. Using a Jenkins/Git continuous integration workflow to automate site and application deployments.</li>
      </ul>

      <h3>Web Assistant, Howard County Public School System</h3>
      <small>Columbia, MD | August 2013 - February 2019</small>
      <ul>
        <li>Created HTML5/CSS3/jQuery design patterns in Wordpress to improve hcpss.org’s branding, functionality, and information architecture.</li>
        <li>Ensured hcpss.org’s content, PDF content, and HTML markup structures were Section 508 compliant.</li>
        <li>Built microsites and full sites from the wireframe process to working products, used Github pages and Adobe XD to mock up design concepts.</li>
        <li>Developed an MVC web application using the Symfony PHP framework and a MySQL database. Defined project strategy and goals, collaborated with other team members to meet objectives.</li>
        <li>Facilitated meetings with internal clients and provided recommendations on ways to enhance their web page’s content, design, and features.</li>
        <li>Trained staff on how to edit content with Drupal and use an email alert system, maintained documentation for all web products/systems.</li>
        <li>Implemented a front-end build tool using Gulp.js, converted all hcpss.org CSS to SASS, and designed responsive email templates using Foundation.</li>
      </ul>

      <h3>Web Project Assistant, The Wild Center</h3>
      <small>Tupper Lake, NY | May 2013 - August 2013</small>
      <ul>
        <li>Worked alongside communications director and external design firm to complete the final stages of new website launch.</li>
        <li>Collaborated with science and museum program staff to ensure their department’s web content was ready for site launch.</li>
        <li>Migrated web content from previous hand-coded website to the redesigned Drupal-powered site.</li>
        <li>Populated new pages with content showcasing the museum's promotional, educational outreach, and membership initiatives.</li>
      </ul>

      <h3>Web Intern, The Wild Center</h3>
      <small>Tupper Lake, NY | January 2013 - May 2013</small>
      <ul>
        <li>Conducted an inventory and audit process for over 300 web assets in preparation for content migration to the museum’s new website.</li>
        <li>Identified content areas that related best to web project goals and decided if existing content was ready to go online or needed more work.</li>
        <li>Generated a report that was used as a framework for the new website’s pages and online stories, including ideas for future web content.</li>
        <li>Presented content inventory and audit findings to senior management.</li>
      </ul>

      <h3>Education</h3>
      <h4>State University of New York College at Potsdam, Potsdam, NY</h4>
      <small>B.A., English Literature | 2010-2013 | 3.88 GPA</small>
      <ul>
        <li>Summa Cum Laude, Departmental Honors</li>
        <li>Thesis: “The Authorial Dentist: Dr. Thomas William Parsons and his Inferno”</li>
        <li>Activities: African Drumming Ensemble, DJ at 90.3 FM, Circle K International Club, ESL tutor</li>
        <li>Honor Societies: Phi Kappa Phi National Honor Society, Sigma Tau Delta National English Honor Society</li>
      </ul>

      <h4>Mohawk Valley Community College, Utica, NY</h4>
      <small>Humanities | 2009-2010</small>
      </div>
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

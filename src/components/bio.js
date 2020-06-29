import React from "react"
import { useStaticQuery, graphql } from "gatsby"

const Bio = () => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      site {
        siteMetadata {
          author {
            name
            summary
          }
          social {
            twitter
          }
        }
      }
    }
  `)

  const { author, social } = data.site.siteMetadata

  return (
      <p>
        All posts written by <strong>{author.name}</strong> (he/him), {author.summary}&nbsp;You should follow him <a href={`https://twitter.com/${social.twitter}`} target="_blank" rel="noopener noreferrer">on Twitter.</a>
      </p>
  )
}
export default Bio

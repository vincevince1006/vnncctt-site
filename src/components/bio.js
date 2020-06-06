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
    <aside>
      <p>
        All posts written by <strong>{author.name}</strong>, {author.summary}
        {` `}
        You should follow him <a href={`https://twitter.com/${social.twitter}`}>on Twitter.</a>
      </p>
    </aside>
  )
}

export default Bio

import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"

const Bio = () => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      avatar: file(absolutePath: { regex: "/bio.png/" }) {
        childImageSharp {
          fixed(
            quality: 100,
            width: 100,
            height: 100
          ) {
            ...GatsbyImageSharpFixed
          }
        }
      }
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
    <aside class="bio__container">
    <Image className="bio__img" fixed={data.avatar.childImageSharp.fixed} />
    <div class="bio__p">
      <p>
        All posts written by <strong>{author.name}</strong> (he/him), {author.summary}&nbsp;You should follow him <a href={`https://twitter.com/${social.twitter}`} target="_blank" rel="noopener noreferrer">on Twitter.</a>
      </p>
      </div>
      </aside>
  )
}
export default Bio

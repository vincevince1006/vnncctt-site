import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Link } from "gatsby"

const MainNav = () => {
  const data = useStaticQuery(graphql`
    query NavQuery {
      site {
        siteMetadata {
          menuLinks {
            name
            link
          }
        }
      }
    }
  `)

  const { menuLinks } = data.site.siteMetadata

  return(
    <nav>
      <ul>
        {menuLinks.map(x => (
          <li>
            <Link to={x.link}>{x.name}</Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default MainNav

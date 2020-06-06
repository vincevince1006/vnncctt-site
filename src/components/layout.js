import React from "react"
import { Link } from "gatsby"

const Layout = ({ title, children }) => {
    const header = (
      <h1>
        <Link
          style={{
            boxShadow: `none`,
            color: `inherit`,
          }}
          to={`/`}
        >
          {title}
        </Link>
      </h1>
    )
  return (
    <div>
      <header>
        <div className="header__inner">{header}</div>
      </header>
      <main>
        <div className="main__inner">{children}</div>
      </main>
      <footer>
        <div className="footer__inner">
        <p>© {new Date().getFullYear()}</p>
        </div>
      </footer>
    </div>
  )
}

export default Layout

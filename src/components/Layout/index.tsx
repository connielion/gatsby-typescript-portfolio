/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { FC } from "react"
import { useStaticQuery, graphql } from "gatsby"

import Header from "../Header"
import "normalize.css"
import styles from "./styles.module.css"
import "./global.css"

const Layout: FC = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <div className={styles.page}>
      <Header siteTitle={data.site.siteMetadata.title} />
      <main className={styles.main}>{children}</main>
      <footer>
        <div className="row"></div>© {new Date().getFullYear()}; Designed &
        Built by Connie Lai
      </footer>
    </div>
  )
}

export default Layout

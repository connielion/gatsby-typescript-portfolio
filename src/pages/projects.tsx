import React, { FC } from "react"
import { Link } from "gatsby"

import Layout from "../components/Layout"
import SEO from "../components/Seo"

const ProjectsPage: FC = () => (
  <Layout>
    <SEO title="Projects" />
    <h1>Hi from the projects</h1>
    <p>Welcome to page 2</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default ProjectsPage

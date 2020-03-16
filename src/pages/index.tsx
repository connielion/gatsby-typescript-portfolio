import React from "react"
import { Link } from "gatsby"

import Layout from "../components/Layout"
import Image from "../components/Image"
import SEO from "../components/Seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>
      Hi, I am <span className="highlight">Connie</span>!
    </h1>

    <div style={{ maxWidth: "300px", marginBottom: "1.45rem" }}></div>
    <Link to="https://github.com/connielion">Github</Link>
  </Layout>
)

export default IndexPage

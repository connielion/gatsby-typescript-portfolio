import React from "react"
import { Link } from "gatsby"

import Layout from "../components/Layout"
import Image from "../components/Image"
import SEO from "../components/Seo"
import {
  FaTwitter as Twitter,
  FaGithub as Github,
  FaEnvelope as Mail,
} from "react-icons/fa"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>
      Hi, I am <span className="highlight">Connie</span>!
    </h1>

    <div style={{ maxWidth: "300px", marginBottom: "1.45rem" }}></div>
    <Link className="mr-5 icon" to="https://github.com/connielion">
      <Github />
    </Link>

    <a className="mr-5 icon" href="mailto:connielion011@gmail.com">
      <Mail />
    </a>
  </Layout>
)

export default IndexPage

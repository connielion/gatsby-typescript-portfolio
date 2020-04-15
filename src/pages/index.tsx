import React from "react"
import { Link } from "gatsby"

import Layout from "../components/Layout"
import Image from "../components/Image"
import SEO from "../components/Seo"
import { Slide, Fade } from "react-reveal"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className="container">
      <div className="row d-flex justify-content-center">
        <Slide left>
          <p className="h1 display-2">Connie Lai</p>
          {"  "}
        </Slide>
      </div>
      <div className="row d-flex justify-content-center">
        <Slide right>
          <br />
          <p className="h2">
            Full-stack <span className="text-primary">Software engineer</span>.
          </p>
        </Slide>
      </div>
    </div>
    {/* end container */}
    <div style={{ maxWidth: "300px", marginBottom: "1.45rem" }}></div>
  </Layout>
)

export default IndexPage

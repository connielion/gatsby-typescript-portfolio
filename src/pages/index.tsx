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
      <div className="row">
        <Slide right>
          <div class="h1">
            <span className="text-primary">Connie Lai.</span>
          </div>
          {"  "}
        </Slide>
        <Slide left>
          <p className="h2">
            {" "}
            <br />
            <u>Full-stack</u> Software Engineer
          </p>
        </Slide>
      </div>
      {/* <div className="row">
        <Slide right>
          <h3 className="text-primary">Full-stack JS engineer.</h3>
        </Slide>
      </div> */}
      {/* Code Section */}
    </div>
    {/* end container */}
    <div style={{ maxWidth: "300px", marginBottom: "1.45rem" }}></div>
  </Layout>
)

export default IndexPage

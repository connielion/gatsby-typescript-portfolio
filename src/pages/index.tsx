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
      <img
        src="https://avatars3.githubusercontent.com/u/16534498?s=400&u=0cd9d3cebe935f2ccd9e2a09fd48af5a918aa341&v=4"
        className="rounded mx-auto d-block pfp"
        alt="Connie's photo"
      />
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

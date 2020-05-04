import React from "react"
import { Link } from "gatsby"

import Layout from "../components/Layout"
import Image from "../components/Image"
import SEO from "../components/Seo"
import { Slide, Fade } from "react-reveal"
import {
  DiReact,
  DiNodejs as Node,
  DiHtml5 as Html,
  DiCss3 as Css,
  DiMongodb as Mongo,
  DiPostgresql as Pg,
  DiAws as Aws,
  DiGit as Git,
  DiJavascript1 as Js,
  DiSass as Sass,
  DiTravis as Travis,
  DiBootstrap as Bootstrap,
  DiDocker as Docker,
  DiPython as Py,
} from "react-icons/di"
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
      <div className="row devicons">
        <DiReact size={32} className="devicon" />
        <Node size={40} className="devicon" />
        <Html size={32} className="devicon" />
        <Css size={32} className="devicon" />
        <Js size={32} className="devicon" />
        <Bootstrap size={32} className="devicon" />
        <Sass size={32} className="devicon" />
        <Pg size={32} className="devicon" />
        <Mongo size={32} className="devicon" />
        <Aws size={32} className="devicon" />
        <Travis size={32} className="devicon" />
        <Git size={32} className="devicon" />
        <Docker size={32} className="devicon" />
        <Py size={32} className="devicon" />
      </div>
    </div>
    {/* end container */}
    <div style={{ maxWidth: "300px", marginBottom: "1.45rem" }}></div>
  </Layout>
)

export default IndexPage

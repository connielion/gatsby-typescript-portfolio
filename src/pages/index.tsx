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
        <Slide left>
          <h3>Hello, I'm Connie Lai.</h3>
          {"  "}
        </Slide>
      </div>
      <div className="row">
        <Slide right>
          <h3 className="text-primary">Full-stack JS engineer.</h3>
        </Slide>
      </div>
      {/* Code Section */}
      <div
        className="scp"
        style={{
          backgroundColor: "#283341",
          color: "whitesmoke",
          padding: "10px",
          borderRadius: "8px",
        }}
      >
        <div className="code mt-4 mb-3">
          <div className="code mt-4 mb-3">
            if (<span>ou_Are_Hiring</span>) {"{"}
          </div>
        </div>
        <div className="mx-5 my-4 h4 text-justify info">
          <code>return </code>
          `Here's the teamplayer, self-starter, and a highly curious Javascript
          specialist you are lookin' for!`
        </div>
        <div className="h3 code mt-2 mb-3">{"}"}</div>
        <div className="h3 code mt-4 mb-3">else {"{"}</div>
        <div className=" mx-5 my-4 h4 text-justify info">
          <code>return </code>
          'Have a nice day!'
          <br />
          <br />
          <span className="text-success">// Find me a bug?</span>
        </div>
        <div className="h2 code mt-2 mb-3">{"}"}</div>
      </div>
    </div>
    {/* end container */}
    <div style={{ maxWidth: "300px", marginBottom: "1.45rem" }}></div>
  </Layout>
)

export default IndexPage

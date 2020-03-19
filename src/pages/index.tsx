import React from "react"
import { Link } from "gatsby"

import Layout from "../components/Layout"
import Image from "../components/Image"
import SEO from "../components/Seo"
import { Slide, Fade } from "react-reveal"
import ReactTypingEffect from "react-typing-effect"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className="container">
      <div className="row">
        <div
          className="display-4 intro"
          style={{ display: "flex", justifyContent: "space-between" }}
        >
          <Slide left>
            <p className="intro">Hello, I'm Connie. </p>
            {"  "}
          </Slide>
          <Slide right>
            <div className="display-4 intro text-primary">
              Full-stack engineer.
            </div>
          </Slide>
        </div>
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
        <div className="h2 code mt-4 mb-3">
          <div className="h2 code mt-4 mb-3">
            if (<span>U_R_Hiring</span>) {"{"}
          </div>
        </div>
        <div className="mx-5 my-4 h4 text-justify info">
          <code>return </code>
          `Here's the teamplayer, self-starter, and a highly curious Javascript
          specialist you are lookin' for!`
        </div>
        <div className="h2 code mt-2 mb-3">{"}"}</div>
        <div className="h2 code mt-4 mb-3">else {"{"}</div>
        <div className=" mx-5 my-4 h4 text-justify info">
          <code>return </code>
          'Have a nice day!'
          {/* <ReactTypingEffect staticText="'Have a nice day!'" /> */}
          <br />
          <br />
          <span className="text-success">
            // yeah, something gone wrong with navbar after deployment :(
          </span>
        </div>
        <div className="h2 code mt-2 mb-3">{"}"}</div>
      </div>
    </div>
    {/* end container */}
    <div style={{ maxWidth: "300px", marginBottom: "1.45rem" }}></div>
  </Layout>
)

export default IndexPage

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
        className="scp info"
        style={{
          backgroundColor: "#283341",
          color: "whitesmoke",
          padding: "10px",
          borderRadius: "8px",
        }}
      >
        <div className="h4 info">
          <div className="code mt-4 mb-3">
            <span className="text-warning">// Hi :D</span>
            <br />
            if (<span>you_Are_Hiring</span>) {"{"}
          </div>

          <div className="mx-5 my-4 text-justify info">
            <code>return </code>
            `Here's the teamplayer, self-starter, and a highly curious engineer
            you are lookin' for!`
          </div>
          <div className=" code mt-2 mb-3">{"}"}</div>
          <div className=" code mt-4 mb-3">else {"{"}</div>
          <div className=" mx-5 my-4 text-justify info">
            <code>return </code>
            'Have a wonderful day!'
            <br />
            <br />
            <span className="text-warning">
              // P.S. there's a weird bug on this page. I swear I googled over
              10 times.
            </span>
          </div>
          <div className="code mt-2 mb-3">{"}"}</div>
        </div>
      </div>
    </div>
    {/* end container */}
    <div style={{ maxWidth: "300px", marginBottom: "1.45rem" }}></div>
  </Layout>
)

export default IndexPage

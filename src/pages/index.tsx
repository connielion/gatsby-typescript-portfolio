import React from "react"
import { Link } from "gatsby"

import Layout from "../components/Layout"
import Image from "../components/Image"
import SEO from "../components/Seo"
import { IoMdOpen as Open } from "react-icons/io"
import Bounce from "react-reveal/Bounce"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className="container">
      <div className="row">
        <div className="my-5"></div>
        <div className="display-4 intro">
          <Bounce left>
            <span className="text-primary"> Hello, I'm Connie.</span>{" "}
            <a
              className="btn-warning btn"
              target="_blank"
              href="https://drive.google.com/open?id=13r0l13AVT1VNREgyKcCyptmBrWZCv-Zc"
            >
              My Resume <Open />
            </a>
          </Bounce>
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
            if (<span>you_Are_Hiring</span>) {"{"}
          </div>
        </div>
        <div className="mx-5 my-4 h4 text-justify info">
          <code>return </code>
          "Here's the teamplayer, self-starter, and a highly curious Javascript
          specialist you are lookin' for!"
        </div>
        <div className="h2 code mt-2 mb-3">{"}"}</div>
        <div className="h2 code mt-4 mb-3">else {"{"}</div>
        <div className=" mx-5 my-4 h4 text-justify info">
          <code>return </code>
          <span>"Have a nice day~"</span>
        </div>
        <div className="h2 code mt-2 mb-3">{"}"}</div>
      </div>
    </div>
    {/* end container */}
    <div style={{ maxWidth: "300px", marginBottom: "1.45rem" }}></div>
  </Layout>
)

export default IndexPage

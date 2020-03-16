import React from "react"
import { Link } from "gatsby"

import Layout from "../components/Layout"
import Image from "../components/Image"
import SEO from "../components/Seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className="container">
      <div className="my-5"></div>
      <div className="display-3">
        Hello, I'm
        <span className="text-primary"> Connie Lai.</span>{" "}
        <button className="btn-warning btn">Resume</button>
      </div>
      <div className="h2 code mt-4 mb-3">
        <div className="h2 code mt-4 mb-3">
          if (<span>you_Are_Hiring</span>) {"{"}
        </div>
      </div>
      <div className="text-muted mx-5 my-4 h4 text-justify info">
        <code>return </code>
        "Here's the teamplayer, self-starter, and a highly curious Javascript
        specialist you are lookin' for!"
      </div>
      <div className="h2 code mt-2 mb-3">{"}"}</div>
      <div className="h2 code mt-4 mb-3">else {"{"}</div>
      <div className="text-muted mx-5 my-4 h4 text-justify info">
        <code>return </code>
        <span className="text-secondary">"Have a nice day~"</span>
      </div>
      <div className="h2 code mt-2 mb-3">{"}"}</div>
    </div>

    <div style={{ maxWidth: "300px", marginBottom: "1.45rem" }}></div>
  </Layout>
)

export default IndexPage

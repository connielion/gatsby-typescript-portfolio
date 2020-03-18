import React, { FC } from "react"
import { Link } from "gatsby"

import Layout from "../components/Layout"
import SEO from "../components/Seo"
import { FaPhone as Phone, FaLinkedin as LinkedIn } from "react-icons/fa"
import { FiAtSign as At } from "react-icons/fi"
import Rotate from "react-reveal/Rotate"
import Clock from "react-live-clock"
const ContactPage: FC = () => (
  <Layout>
    <SEO title="Contact" />
    <div className="container">
      <h3>
        I'm based in California. Current time here is:{" "}
        <Clock format={"HH:mm:ss"} ticking={true} timezone={"US/Pacific"} />
      </h3>
      <ul className="contact-ul">
        <Rotate top left>
          <li>
            <Phone />
            <br />
            My cell phone number is: <a href="tel:5592816498">559-281-6498</a>
          </li>
        </Rotate>
        <Rotate top left>
          <li>
            <At />
            <br />
            My email is:{" "}
            <a
              href="mailto:connielion011@gmail.com"
              style={{ color: "orange" }}
            >
              connielion011@gmail.com
            </a>
          </li>
        </Rotate>
        <Rotate top left>
          <li>
            <LinkedIn />
            <br />
            My LinkedIn profile:{" "}
            <a href="linkedin.com/in/connielion" style={{ color: "orange" }}>
              here
            </a>
          </li>
        </Rotate>
      </ul>
    </div>
  </Layout>
)

export default ContactPage

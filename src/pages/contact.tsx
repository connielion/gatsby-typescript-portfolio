import React, { FC } from "react"
import { Link } from "gatsby"

import Layout from "../components/Layout"
import SEO from "../components/Seo"
import {
  FaPhone as Phone,
  FaLinkedin as LinkedIn,
  FaBomb as Bomb,
} from "react-icons/fa"
import { FiAtSign as At } from "react-icons/fi"
import Rotate from "react-reveal/Rotate"
import Clock from "react-live-clock"

const ContactPage: FC = () => (
  <Layout>
    <SEO title="Contact" />
    <div className="container d-flex">
      <div className="row">
        <b>
          I'm based in California. Current time here is:{" "}
          <Clock
            format={"HH:mm:ss"}
            ticking={true}
            timezone={"US/Pacific"}
            style={{ color: "orange" }}
          />{" "}
          .
        </b>
        <ul className="contact-ul">
          <Rotate top left>
            <li>
              <Phone /> <a href="tel:5592816498">559-281-6498</a>
            </li>
          </Rotate>
          <Rotate top left>
            <li>
              <At />{" "}
              <a href="mailto:connielion011@gmail.com">
                connielion011@gmail.com
              </a>
            </li>
          </Rotate>
          <Rotate top left>
            <li>
              <a href="https://linkedin.com/in/connielion">
                <LinkedIn /> linkedin.com/in/connielion
              </a>
            </li>
          </Rotate>
        </ul>
      </div>
    </div>
  </Layout>
)

export default ContactPage

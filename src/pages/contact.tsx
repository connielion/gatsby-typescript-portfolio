import React, { FC } from "react"
import { Link } from "gatsby"

import Layout from "../components/Layout"
import SEO from "../components/Seo"
import { FaPhone as Phone, FaLinkedin as LinkedIn } from "react-icons/fa"
import { FiAtSign as At } from "react-icons/fi"
const ContactPage: FC = () => (
  <Layout>
    <SEO title="Contact" />
    <div className="container">Contact page</div>
    <ul className="contact-ul">
      <li>
        <Phone />
        My cell phone number is: <a href="tel:5592816498">559-281-6498</a>
      </li>
      <li>
        <At />
        My email is:{" "}
        <a href="mailto:connielion011@gmail.com" style={{ color: "orange" }}>
          connielion011@gmail.com
        </a>
      </li>
      <li>
        <LinkedIn />
        My LinkedIn profile:{" "}
        <a href="linkedin.com/in/connielion" style={{ color: "orange" }}>
          here
        </a>
      </li>
    </ul>
  </Layout>
)

export default ContactPage

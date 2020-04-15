import React, { FC } from "react"
import { Link } from "gatsby"
import { HeaderProps } from "./types"
import ThemeToggle from "../ThemeToggle"
import styles from "./styles.module.css"
import {
  FaHome as Home,
  FaRegFolderOpen as Folder,
  FaTwitter as Twitter,
  FaGithub as Github,
  FaEnvelope as Mail,
  FaLinkedin as LinkedIn,
} from "react-icons/fa"

const Header: FC<HeaderProps> = ({ siteTitle }) => (
  <nav
    className={styles.header}
    className="navbar d-flex justify-content-center"
  >
    <Link className="mr-5 icon" to="/">
      {/* LOGO */}
      <img
        src={"/logo.png"}
        alt="Logo"
        className="navbar-brand"
        style={{ maxHeight: "80px", maxWidth: "100px" }}
      />
    </Link>
    <h1 className={styles.navlinks} style={{ float: "right important!" }}>
      <Link className="mr-5 icon" to="/projects">
        <Folder />
      </Link>
      <Link className="mr-5 icon" to="/about">
        about
      </Link>
      <a className="mr-5 icon" href="https://github.com/connielion">
        <Github />
      </a>
      <a className="mr-5 icon" href="linkedin.com/in/connielion">
        <LinkedIn />
      </a>
    </h1>
    <div className={styles.themeToggleContainer}>
      <ThemeToggle />
    </div>
  </nav>
)

export default Header

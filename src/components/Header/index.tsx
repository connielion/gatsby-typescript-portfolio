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
} from "react-icons/fa"

const Header: FC<HeaderProps> = ({ siteTitle }) => (
  <nav className={styles.header} class="navbar navbar-nav">
    <Link className="mr-5 icon" to="/">
      <img
        src={"/logo.png"}
        alt="Logo"
        className="navbar-brand"
        style={{ maxHeight: "80px", maxWidth: "100px" }}
      />
    </Link>
    <h1 className={styles.h1}>
      <Link className="mr-5 icon" to="/">
        <Home />
      </Link>
      <Link className="mr-5 icon" to="/projects">
        <Folder />
      </Link>
      <Link className="mr-5 icon" to="/about">
        about
      </Link>
      <Link className="mr-5 icon" to="/contact">
        <Mail />
      </Link>
      <a className="mr-5 icon" href="https://github.com/connielion">
        <Github />
      </a>
    </h1>
    <div className={styles.themeToggleContainer}>
      <ThemeToggle />
    </div>
  </nav>
)

export default Header

import React, { FC } from "react"
import { Link } from "gatsby"
import { HeaderProps } from "./types"
import ThemeToggle from "../ThemeToggle"
import styles from "./styles.module.scss"
import {
  FaTwitter as Twitter,
  FaGithub as Github,
  FaEnvelope as Mail,
} from "react-icons/fa"

const Header: FC<HeaderProps> = ({ siteTitle }) => (
  <nav className={styles.header} class="navbar justify-content-between">
    <a class="navbar-brand" href="/">
      CL
    </a>
    <h1 className={styles.h1}>
      <Link className="mr-5 icon" to="/">
        home
      </Link>
      <Link className="mr-5 icon" to="/projects">
        projects
      </Link>
      <Link className="mr-5 icon" to="/about">
        about
      </Link>
      <a className="mr-5 icon" href="https://github.com/connielion">
        <Github />
      </a>

      <a className="mr-5 icon" href="mailto:connielion011@gmail.com">
        <Mail />
      </a>
    </h1>
    <div className={styles.themeToggleContainer}>
      <ThemeToggle />
    </div>
  </nav>
)

export default Header

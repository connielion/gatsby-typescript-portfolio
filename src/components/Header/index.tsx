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
  <header className={styles.header}>
    <h1 className={styles.h1}>
      <Link className="mr-5 icon" to="/projects">
        projects
      </Link>
      <Link className="mr-5 icon" to="/about">
        about
      </Link>
      <Link className="mr-5 icon" to="https://github.com/connielion">
        <Github />
      </Link>

      <Link className="mr-5 icon" to="mailto:connielion011@gmail.com">
        <Mail />
      </Link>
    </h1>
    <div className={styles.themeToggleContainer}>
      <ThemeToggle />
    </div>
  </header>
)

export default Header

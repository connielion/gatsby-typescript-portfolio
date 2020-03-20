import React, { FC } from "react"
import { Link } from "gatsby"

import Layout from "../components/Layout"
import SEO from "../components/Seo"
import { GiSandSnake } from "react-icons/gi"
import Jello from "react-reveal/Jello"
import {
  DiReact,
  DiNodejs as Node,
  DiHtml5 as Html,
  DiCss3 as Css,
  DiMongodb as Mongo,
  DiPostgresql as Pg,
  DiAws as Aws,
  DiGit as Git,
  DiJavascript1 as Js,
  DiSass as Sass,
  DiTravis as Travis,
  DiBootstrap as Bootstrap,
  DiDocker as Docker,
  DiPython as Py,
} from "react-icons/di"
import {
  FaSwimmer as Swim,
  FaPlaneDeparture as Plane,
  FaLanguage,
  FaPaintBrush,
} from "react-icons/fa"
import { GiKnifeFork as Fork } from "react-icons/gi"

const AboutPage: FC = () => (
  <Layout>
    <SEO title="About" />
    <div className="container">
      <div className="row devicons">
        <DiReact size={32} className="devicon" />
        <Node size={40} className="devicon" />
        <Html size={32} className="devicon" />
        <Css size={32} className="devicon" />
        <Js size={32} className="devicon" />
        <Bootstrap size={32} className="devicon" />
        <Sass size={32} className="devicon" />
        <Pg size={32} className="devicon" />
        <Mongo size={32} className="devicon" />
        <Aws size={32} className="devicon" />
        <Travis size={32} className="devicon" />
        <Git size={32} className="devicon" />
        <Docker size={32} className="devicon" />
        <Py size={32} className="devicon" />
      </div>
      <div className="row">
        <Jello>
          <h1>Who am I?</h1>
        </Jello>
        <p>
          Well, I studied biology in college and did agricultural research as a
          lab assistant afterwards.
          <br />
          <br />
          While I was working, I had time to explore and learnt coding at a
          local institution called Geekwise Academy, part of Bitwise Industries.
          I completed all of their classes on these topics: HTML5, CSS3,
          Mobile-Friendly Sites(Bootstrap 3), ES6 Javascript, and Angular 2+.
          <br />
          <br />
          Then I continued to learn the <i>hottest</i> technologies, such as
          React at a highly selective software engineer program based in LA.
          That was where I collaborated with fellow engineers in an highly agile
          environment.
        </p>
      </div>
      <div className="row">
        <Jello>
          <h2>My hobbies</h2>
        </Jello>
        <ul>
          <li>
            Swimming <Swim size={32} /> - I was in a swimming team at school.
            That said, I love going to the coast.
          </li>
          <li>
            Traveling <Plane size={32} />- hope to go to Europe again,
            especially North, UK, Germany. Australia and South Africa are also
            on the list since I like animals. My favorite short trip destination
            is Central California coast. Love whale-watching there.
          </li>
          <li>
            Eating <Fork size={32} />- Love to try new food!
          </li>
          <li>
            Learn foreign language <FaLanguage size={32} /> - currently working
            on my Japanese; taken 4 classes in Spanish, and am native
            Cantonese/Mandarin speaker.
          </li>
          <li>
            Comics + Anime - I like to read manga and binge watch anime in my
            free time. Hayao Miyazaki films are some of my favorites.
          </li>
          <li>
            Draw <FaPaintBrush size={30} />- my hobby ever since I was little.
          </li>
        </ul>
      </div>
      {/* end of row2 */}
    </div>
  </Layout>
)

export default AboutPage

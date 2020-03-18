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

const AboutPage: FC = () => (
  <Layout>
    <SEO title="About" />
    <div className="container">
      <div className="row devicons">
        <DiReact size={32} />
        <Node size={32} />
        <Html size={32} />
        <Css size={32} />
        <Js size={32} />
        <Bootstrap size={32} />
        <Sass size={32} />
        <Pg size={32} />
        <Mongo size={32} />
        <Aws size={32} />
        <Travis size={32} />
        <Git size={32} />
        <Docker size={32} />
        <Py size={32} />
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
          <h2>My hobbies:</h2>
        </Jello>
        <ul>
          <li>Swimming - I was in a swimming team at school.</li>
          <li>
            Traveling - hope to go to Europe again, especially North, UK,
            Germany. Australia and South Africa are also on the list since I
            like animals. My favorite short trip destination is Central
            California coast. Love whale-watching there.
          </li>
          <li>Eating - love to try new food!</li>
          <li>
            Learn foreign language - currently working on my Japanese; taken 4
            classes in Spanish, and am native Cantonese/Mandarin speaker.
          </li>
          <li>
            Comics + Anime - I like to read manga and binge watch anime in my
            free time. Hayao Miyazaki films are some of my favorites.
          </li>
          <li>Draw - my hobby ever since I was little.</li>
        </ul>
      </div>
      {/* end of row2 */}
    </div>
  </Layout>
)

export default AboutPage

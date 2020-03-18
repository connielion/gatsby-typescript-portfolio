import React, { FC } from "react"
import { Link } from "gatsby"

import Layout from "../components/Layout"
import SEO from "../components/Seo"
import { GiSandSnake } from "react-icons/gi"

const AboutPage: FC = () => (
  <Layout>
    <SEO title="About" />
    <div className="container">
      <div className="row">
        <h1>Who am I?</h1>
        <p>
          Well, I studied biology in college and did agricultural research as a
          lab assistant afterwards.
          <br />
          <br />
          While I was working, I had time to explore and learnt coding at a
          local institution called Geekwise Academy, part of Bitwise Industries.
          I completed all of their classes on these topics: HTML5, CSS3,
          Mobile-Friendly Sites(Bootstrap 3), ES6 Javascript, and Angular 2+.
        </p>
      </div>
      <div className="row">
        <h2>My hobbies:</h2>
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
    </div>
  </Layout>
)

export default AboutPage

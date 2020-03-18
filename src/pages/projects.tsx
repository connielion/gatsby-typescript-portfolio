import React, { FC } from "react"
import { Link } from "gatsby"
import Card from "./Card"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import SEO from "../components/Seo"
import Zoom from "react-reveal/Zoom"
const ProjectsPage: FC = ({ data }) => {
  const projectList = data.allProjectsYaml.edges

  return (
    <Layout>
      <SEO title="Projects" />
      <div className="container-fluid">
        <Zoom>
          {" "}
          <div className="row">
            {projectList.map(({ node }) => {
              return (
                <Card
                  img={node.img}
                  cardTitle={node.title}
                  cardSubtitle={node.subtitle}
                  link={node.link}
                  key={node.id}
                />
              )
            })}
          </div>
        </Zoom>
      </div>
    </Layout>
  )
}

export default ProjectsPage

export const query = graphql`
  {
    allProjectsYaml {
      edges {
        node {
          title
          subtitle
          link
          id
          img
        }
      }
    }
  }
`

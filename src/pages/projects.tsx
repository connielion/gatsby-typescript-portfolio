import React, { FC } from "react"
import { Link } from "gatsby"
// import Card from "./Card"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import SEO from "../components/Seo"

const ProjectsPage: FC = () => {
  //   const projectList = data.allProjectsYaml.edges

  return (
    <Layout>
      <SEO title="Projects" />
      <div className="container-fluid">
        <div className="row">
          {/* {projectList.map(({ node }) => {
            return (
              <Card
                cardTitle={node.title}
                cardSubtitle={node.subtitle}
                link={node.link}
                key={node.id}
              />
            )
          })} */}
        </div>
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
        }
      }
    }
  }
`

import React from "react"
import "../style.css"
import Navbar from "../components/Navbar"
import { graphql } from "gatsby"
import Card from "../components/Card"
import { Helmet } from "react-helmet"

const Gallery = ({ data }) => {
  const projectList = data.allProjectsYaml.edges

  return (
    <div className="container-fluid">
      <Navbar />
      <Helmet>
        <meta charSet="utf-8" />
        <title>Projects | Eli Vilallejos</title>
      </Helmet>
      <div className="row">
        {projectList.map(({ node }) => {
          return (
            <Card
              cardTitle={node.title}
              cardSubtitle={node.subtitle}
              link={node.link}
              key={node.id}
              live={node.live}
            />
          )
        })}
      </div>
    </div>
  )
}

export default Gallery

export const query = graphql`
  {
    allProjectsYaml {
      edges {
        node {
          title
          subtitle
          link
          id
          live
        }
      }
    }
  }
`

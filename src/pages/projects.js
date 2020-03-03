import React from "react"
import "../style.css"
import Navbar from "../components/navbar"
import { graphql } from "gatsby"
import Card from "../components/card"
import { Helmet } from "react-helmet"
import Footer from "../components/footer"

function Projects({ data }) {
  const projectList = data.allProjectsYaml.edges

  return (
    <div className="container">
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
              cardStack={node.stack}
              link={node.link}
              key={node.id}
              live={node.live}
            />
          )
        })}
      </div>
      <Footer />
    </div>
  )
}

export default Projects

export const query = graphql`
  {
    allProjectsYaml {
      edges {
        node {
          title
          subtitle
          stack
          link
          id
          live
        }
      }
    }
  }
`

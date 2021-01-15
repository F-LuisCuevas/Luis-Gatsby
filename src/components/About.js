import React from "react"
import Footer from "./Footer"
export default function About() {
  return (
    <div className="container">
      <div className="my-5"></div>
      <div className="row mb-n4">
        <div className="col-md">
          <div className="display-3">
            <span style={{ color: "white" }}>Hi!</span>
            <img
              src="https://media.giphy.com/media/26Fxy3Iz1ari8oytO/giphy.gif"
              width="90"
              style={{ marginBottom: ".3em" }}
            ></img>
          </div>
          <div className="h1 code mt-4 mb-3" style={{ color: "#8589ef" }}>
            const eliVillalejos <span style={{ color: "#ff79c6" }}>= </span>
          </div>
          <div className="h1 code mt-2 mb-3">{"{"}</div>
          <div
            className="h4 mx-5 my-4 text-justify info"
            style={{ color: "#d3d3d3	" }}
          >
            occupation:{" "}
            <span style={{ color: "#AA7DCE" }}>
              "Remote Full-stack web developer" || "Front-end developer",
            </span>
            <br />
            techStack:{" "}
            <span style={{ color: "#18cebb" }}>
              [JavaScript, React, Redux, RoR, Ruby, RSpec, Material UI, Bootstrap, Tailwind
              Semantic],
            </span>
            <br />
            likes:{" "}
            <span style={{ color: "#AA7DCE" }}>
              [Code, Chihuahuas, Coffee],
            </span>
            <br />
            challenge:{" "}
            <span style={{ color: "#18cebb" }}>
              "I am learning Vue",
            </span>
            <br />
            funFact:{" "}
            <span style={{ color: "#AA7DCE" }}>
              ['I have 1.5 years of remote work experience with devs from all
              over the world']
            </span>
            <br />
          </div>
          <div className="h1 code mt-2 mb-3">{"}"}</div>
        </div>
        <div className="col">
          <div className="hello-img"></div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

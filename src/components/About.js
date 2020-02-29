import React from "react"
import Footer from "./footer"
export default function About() {
  return (
    <div className="container">
      <div className="my-5"></div>
      <div className="row mb-n4">
        <div className="col-md">
          <div className="display-3">
            <span style={{ color: "white" }}>Hi!</span> <br />
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
            <span style={{ color: "#18cebb" }}>
              "Full-stack web developer",
            </span>
            <br />
            techStack:{" "}
            <span style={{ color: "#18cebb" }}>
              [React, JS, RoR, Ruby, Redux, Gatsby, Vue, RSpec, Jest, Bootstrap,
              Semantic UI],
            </span>
            <br />
            likes:{" "}
            <span style={{ color: "#18cebb" }}>[Code, Chihuahuas, Coffee]</span>
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

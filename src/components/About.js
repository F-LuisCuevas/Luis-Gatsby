import React from "react"

import {
  FaTwitter as Twitter,
  FaGithub as Github,
  FaEnvelope as Mail,
  FaLinkedin as Linkedin,
} from "react-icons/fa"

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
            <span style={{ color: "white" }}>{"{"}</span>
          </div>
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
              [React, JS, RoR, Ruby, Redux],
            </span>
            <br />
            likes:{" "}
            <span style={{ color: "#18cebb" }}>[Code, Dogs, Coffee]</span>
            <br />
            <div className="h1 code mt-2 mb-3">{"}"}</div>
          </div>
        </div>
        <div className="col">
          <div className="hello-img"></div>
        </div>
      </div>
      <div className="h1 mt-5 mb-5 footer">
        <a className="mr-5 icon" href="https://twitter.com/miss_elliev">
          <Twitter />
        </a>
        <a className="mr-5 icon" href="https://github.com/misselliev">
          <Github />
        </a>
        <a
          className="mr-5 icon"
          href="mailto:elizabeth.villalejos@gmail.com?subject=Website%20Inquiry"
        >
          <Mail />
        </a>
        <a
          className="mr-5 icon"
          href="https://www.linkedin.com/in/ellievillalejos/"
        >
          <Linkedin />
        </a>
      </div>
    </div>
  )
}

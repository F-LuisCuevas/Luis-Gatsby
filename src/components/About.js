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
      <div className="display-3"></div>
      <div className="h1 code mt-2 mb-3"></div>
      <div className="h1 mt-5 mb-5 footer ">
        <a className="mr-5 icon" href="https://twitter.com/misselliev">
          <Twitter />
        </a>
        <a className="mr-5 icon" href="https://github.com/misselliev">
          <Github />
        </a>
        <a className="mr-5 icon" href="mailto://elizabeth.villalejos@gmail.com">
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

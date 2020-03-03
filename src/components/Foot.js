import React from "react"

import {
  FaTwitter as Twitter,
  FaGithub as Github,
  FaEnvelope as Mail,
  FaLinkedin as Linkedin,
  FaFilePdf as Resume,
  FaMedium as Medium,
} from "react-icons/fa"

export default function Footer() {
  return (
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
      <a className="mr-5 icon" href="https://medium.com/@elizabeth.villalejos">
        <Medium />
      </a>
      <a
        href="/src/files/Elizabeth_Villalejos_Resume_27-02-2020-11-58-55.pdf"
        download
      >
        <Resume />
      </a>
    </div>
  )
}

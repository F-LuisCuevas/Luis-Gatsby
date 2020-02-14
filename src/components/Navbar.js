import React from "react"
import Intent from "./link"

export default function Navbar() {
  return (
    <nav className="container my-3">
      <ul className="nav justify-content-end">
        <li className=" mx-4">
          <Intent to="/">About</Intent>
        </li>
        <li className=" mx-4">
          <Intent to="/projects">Projects</Intent>
        </li>
      </ul>
    </nav>
  )
}

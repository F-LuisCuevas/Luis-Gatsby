import React from "react"
import { Link } from "gatsby"
export default function Navbar() {
  return (
    <div className="container my-3">
      <ul className="nav justify-content-center">
        <li className=" mx-4">
          <Link to="/">Home</Link>
        </li>
        <li className=" mx-4">
          <Link to="/about">About</Link>
        </li>
        <li className=" mx-4">
          <Link to="/projects">Projects</Link>
        </li>
      </ul>
    </div>
  )
}

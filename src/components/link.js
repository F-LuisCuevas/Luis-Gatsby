import React from "react"
import Link from "gatsby-plugin-transition-link/AniLink"

export default function Intent({ children, to }) {
  return (
    <Link cover direction="down" bg="#ff79c6" duration={1} to={to}>
      {children}
    </Link>
  )
}

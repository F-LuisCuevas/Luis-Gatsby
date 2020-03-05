import React from "react"

function card(props) {
  const { cardTitle, cardImg, cardSubtitle, cardStack, link, live } = props
  return (
    <div className="col-lg-4">
      <div className="card mx-3 my-5">
        <div className="card-body">
          <img src={cardImg} alt={cardTitle} className="card-image"></img>
          <h2 className="card-title">{cardTitle}</h2>
          <p className="card-text">{cardSubtitle}</p>
          <p className="card-text">{cardStack}</p>
          <div className="links">
            <a
              href={link}
              className="card-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              Source code
            </a>
            <a
              href={live}
              className="card-link"
              target="_blank"
              rel="noopener noreferrer"
              hidden={live ? false : true}
            >
              Demo
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default card

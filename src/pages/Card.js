import React from "react"

const Card = props => {
  const { cardTitle, cardSubtitle, link } = props
  return (
    <div className="col-lg-4 text-secondary">
      <div className="card mx-3 my-5">
        <div className="card-body">
          <h2 className="card-title">{cardTitle}</h2>
          <p className="card-text">{cardSubtitle}</p>
          <a href={link} className="card-link">
            See
          </a>
        </div>
      </div>
    </div>
  )
}

export default Card

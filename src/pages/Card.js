import React from "react"
import { FaGithub as Github } from "react-icons/fa"

const Card = props => {
  const { cardTitle, img, cardSubtitle, link } = props
  return (
    <div className="col-lg-4 text-secondary">
      <div className="card mx-3 my-5">
        <img src={img} class="card-img-top" alt="Image of Project" />
        <div className="card-body">
          <h2 className="card-title">{cardTitle}</h2>
          <p className="card-text">{cardSubtitle}</p>
          <a href={link} className="card-link">
            <Github /> Github
          </a>
        </div>
      </div>
    </div>
  )
}

export default Card

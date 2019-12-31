import React from "react"
import { Link } from 'react-router-dom'
import "./RecipeBox.scss"
import Ratings from "../Ratings/Ratings.component"

const RecipeBox = ({ title, category, rating, tags, dateCreated }) => {
  return (
    <a className="RecipeBox-link" >
      <li className="RecipeBox">
        <h3 className="RecipeBox-title">{title}</h3>
        <span className="RecipeBox-subheading">
          <p className="RecipeBox-category">{category}</p>
          <Ratings rating={rating} className='RecipeBox-rating-star' />
        </span>
        <span className="RecipeBox-footer">
          <p className="RecipeBox-tags">{tags.join(", ")}</p>
          <p className="RecipeBox-date">Added {dateCreated}</p>
        </span>
      </li>
    </a>
  )
}

export default RecipeBox

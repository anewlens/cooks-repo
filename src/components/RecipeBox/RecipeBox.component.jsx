import React from "react"
import "./RecipeBox.scss"
import Ratings from "../Ratings/Ratings.component"

const RecipeBox = ({
  recipe,
  recipe: { name, category, rating, tags, dateCreated },
  handler
}) => {
  return (
    <button className="RecipeBox-btn" onClick={() => handler(recipe)}>
      <li className="RecipeBox">
        <h3 className="RecipeBox-title">{name}</h3>
        <span className="RecipeBox-subheading">
          <p className="RecipeBox-category">{category}</p>
          <Ratings rating={rating} className="RecipeBox-rating-star" />
        </span>
        <span className="RecipeBox-footer">
          <p className="RecipeBox-tags">{tags.join(", ")}</p>
          <p className="RecipeBox-date">Added {dateCreated}</p>
        </span>
      </li>
    </button>
  )
}

export default RecipeBox

import React from "react"
import { ReactComponent as StarFilled } from "../../images/star.svg"
import { ReactComponent as StarOutline } from "../../images/star-outline.svg"
import "./RecipeBox.scss"

const RecipeBox = ({ title, category, rating, tags, dateCreated }) => {
  return (
    <li className="RecipeBox">
      <h3 className="RecipeBox-title">{title}</h3>
      <span className="RecipeBox-subheading">
        <p className="RecipeBox-category">{category}</p>
        <p className="RecipeBox-rating">
          {rating.map(num =>
            num === 1 ? (
              <StarFilled className="RecipeBox-rating-star" />
            ) : (
              <StarOutline className="RecipeBox-rating-star" />
            )
          )}
        </p>
      </span>
      <span className="RecipeBox-footer">
        <p className="RecipeBox-tags">{tags.join(", ")}</p>
        <p className="RecipeBox-date">Added {dateCreated}</p>
      </span>
    </li>
  )
}

export default RecipeBox

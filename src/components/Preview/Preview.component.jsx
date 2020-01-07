import React from "react"
import Ratings from "../Ratings/Ratings.component"
import "./Preview.scss"

function Preview({
  recipe: { name, category, dateAdded, rating, ingredients, steps, tags },
  close
}) {
  return (
    <section className="Preview">
      <button onClick={() => close()} className="Preview-exitBtn">
        X
      </button>
      <header className="Preview-header">
        <h1 className="Preview-title">{name}</h1>
        <Ratings rating={rating} className="Preview-rating-star" />
      </header>
      <span className="Preview-subheading">
        <p className="Preview-category">{category}</p>
        <p className="Preview-date">Added {dateAdded}</p>
      </span>
      <section className="Preview-ingredients">
        <h2 className="Preview-ingredients-heading">Ingredients</h2>
        <ul className="Preview-ingredients-list">
          {ingredients.map(({ name, amount, unit, method }) => (
            <li className="Preview-ingredients-item">
              {amount} {unit} {name}
              {method && `, ${method}`}
            </li>
          ))}
        </ul>
      </section>
      <section className="Preview-steps">
        <h2 className="Preview-steps-heading">Steps</h2>
        <ol className="Preview-steps-list">
          {steps.map(step => (
            <li className="Preview-steps-item">{step}</li>
          ))}
        </ol>
      </section>
      <footer className="Preview-footer">
        <strong>Tags:</strong> {tags.join(", ")}
      </footer>
    </section>
  )
}

export default Preview

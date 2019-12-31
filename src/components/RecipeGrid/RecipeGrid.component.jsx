import React from "react"
import "./RecipeGrid.scss"
import recipes from "../../RecipeData"
import RecipeBox from "../RecipeBox/RecipeBox.component"

const RecipeGrid = () => {
  return (
    <section className="RecipeGrid">
      <header className="RecipeGrid-header">
        <h1 className="RecipeGrid-title">Your Recipes</h1>
        <input type="text" value="" className="RecipeGrid-search" />
      </header>
      <ul className="RecipeGrid-boxList">
        {recipes.map(({ name, category, dateAdded, rating, tags }) => (
          <RecipeBox
            title={name}
            category={category}
            dateCreated={dateAdded}
            rating={rating}
            tags={tags}
          />
        ))}
      </ul>
    </section>
  )
}

export default RecipeGrid

import React from "react"
import { connect } from "react-redux"
import RecipeBox from "../RecipeBox/RecipeBox.component"
import "./RecipeGrid.scss"

const RecipeGrid = ({ recipes }) => {
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

const mapStateToProps = state => ({
  recipes: state.recipes
})

export default connect(mapStateToProps, null)(RecipeGrid)

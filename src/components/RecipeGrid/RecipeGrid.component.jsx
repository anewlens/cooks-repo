import React, { useState } from "react"
import { connect } from "react-redux"
import { togglePreview } from "../../redux/preview/preview.actions"
import RecipeBox from "../RecipeBox/RecipeBox.component"
import "./RecipeGrid.scss"

const RecipeGrid = ({ recipes, setPreview }) => {
  const [filter, setFilter] = useState("")

  function filterRecipes(list) {
    return list.filter(
      ({ name, category, tags, ingredients }) =>
        name.toLowerCase().includes(filter.toLowerCase()) ||
        category.toLowerCase().includes(filter.toLowerCase()) ||
        tags.includes(filter.toLowerCase()) ||
        ingredients.includes(filter.toLowerCase())
    )
  }

  return (
    <section className="RecipeGrid">
      <header className="RecipeGrid-header">
        <h1 className="RecipeGrid-title">Your Recipes</h1>
        <input
          type="text"
          value={filter}
          onChange={e => setFilter(e.target.value)}
          className="RecipeGrid-search"
        />
      </header>
      <ul className="RecipeGrid-boxList">
        {filterRecipes(recipes).map(recipe => (
          <RecipeBox recipe={recipe} handler={setPreview} />
        ))}
      </ul>
    </section>
  )
}

const mapStateToProps = state => ({
  recipes: state.recipes,
  preview: state.preview
})

const mapDispatchToProps = dispatch => ({
  setPreview: item => dispatch(togglePreview(item))
})

export default connect(mapStateToProps, mapDispatchToProps)(RecipeGrid)

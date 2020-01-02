import React from "react"
import { connect } from "react-redux"
import { togglePreview } from "../../redux/preview/preview.actions"
import RecipeBox from "../RecipeBox/RecipeBox.component"
import "./RecipeGrid.scss"

const RecipeGrid = ({ recipes, setPreview }) => {
  return (
    <section className="RecipeGrid">
      <header className="RecipeGrid-header">
        <h1 className="RecipeGrid-title">Your Recipes</h1>
        <input type="text" value="" className="RecipeGrid-search" />
      </header>
      <ul className="RecipeGrid-boxList">
        {recipes.map(recipe => (
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

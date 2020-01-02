import React, { useState } from "react"
import { connect } from "react-redux"
import "./Home.scss"
import RecipeGrid from "../../components/RecipeGrid/RecipeGrid.component"
import Preview from "../../components/Preview/Preview.component"

const Home = ({ preview }) => {
  return (
    <section className="Home">
      {preview && <Preview recipe={preview} />}
      <RecipeGrid />
    </section>
  )
}

const mapStateToProps = state => ({
  preview: state.preview
})

export default connect(mapStateToProps)(Home)

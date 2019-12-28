import React from "react"
import "./Home.scss"
import RecipeGrid from "../../components/RecipeGrid/RecipeGrid.component"

const Home = () => {
  return (
    <section className="Home">
      <RecipeGrid />
    </section>
  )
}

export default Home

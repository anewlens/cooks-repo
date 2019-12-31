import React, { useState } from "react"
import "./Home.scss"
import RecipeGrid from "../../components/RecipeGrid/RecipeGrid.component"
import Preview from "../../components/Preview/Preview.component"

const Home = () => {
  const [preview, togglePreview] = useState(false)

  return (
    <section className="Home">
      {preview && <Preview />}
      <RecipeGrid />
    </section>
  )
}

export default Home

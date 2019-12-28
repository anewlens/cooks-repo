import React from "react"
import "./RecipeGrid.scss"
import RecipeBox from "../RecipeBox/RecipeBox.component"

const RecipeGrid = () => {
  return (
    <div className="RecipeGrid">
      <header className="RecipeGrid-header">
        <h1 className="RecipeGrid-title">Your Recipes</h1>
        <input type="text" value="" className="RecipeGrid-search" />
      </header>
      <ul className="RecipeGrid-boxList">
        <RecipeBox
          title="Garlicky Mashed Potatoes"
          category="Sides"
          dateCreated="12/19"
          rating={[1, 1, 1, 1, 0]}
          tags={["garlic", "time-consuming", "rich"]}
        />
        <RecipeBox
          title="Cuban Chicken"
          category="Chicken"
          dateCreated="12/19"
          rating={[1, 1, 1, 0, 0]}
          tags={["easy", "lime", "pan"]}
        />
        <RecipeBox
          title="Cream Smothered Steak"
          category="Steak"
          dateCreated="12/19"
          rating={[1, 1, 1, 1, 1]}
          tags={["rich", "time-consuming", "pan"]}
        />
        <RecipeBox
          title="Chipotle Chicken Copycat"
          category="Chicken"
          dateCreated="12/19"
          rating={[1, 1, 1, 1, 1]}
          tags={["easy", "pan", "oven"]}
        />
      </ul>
    </div>
  )
}

export default RecipeGrid

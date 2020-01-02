import RecipesActionTypes from "./recipes.types"

export const setRecipes = recipes => ({
  type: RecipesActionTypes.SET_RECIPES,
  payload: recipes
})

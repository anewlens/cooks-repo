import { combineReducers } from "redux"
import recipesReducer from "./recipes/recipes.reducer"
import previewReducer from "./preview/preview.reducer"

const rootReducer = combineReducers({
  recipes: recipesReducer,
  preview: previewReducer
})

export default rootReducer

import RecipesActionTypes from "./recipes.types"

const INITIAL_STATE = [
  {
    id: 1,
    name: "Garlicky Mashed Potatoes",
    category: "Sides",
    rating: 4,
    dateAdded: "12-1-19",
    tags: ["garlic", "time-consuming", "rich"],
    ingredients: [
      {
        name: "potatoes",
        amount: 4,
        unit: "lbs",
        method: "peeled"
      }
    ],
    notes: ["If it breaks, just mix it up"],
    steps: [
      "Bake the potatoes at 350 degrees for 80 minutes.",
      "Peel the potatoes while still hot"
    ]
  },
  {
    id: 2,
    name: "Cuban Chicken",
    category: "Chicken",
    rating: 3,
    dateAdded: "12-1-19",
    tags: ["easy", "lime", "pan"],
    ingredients: [
      {
        name: "chicken breast",
        amount: 1,
        unit: "lbs",
        method: "butterflied"
      }
    ],
    notes: [],
    steps: [
      "Pound the chicken breasts thin.",
      "Throw the lime juice, oil, garlic and spices in a bag."
    ]
  },
  {
    id: 3,
    name: "Cream Smothered Steak",
    category: "Steak",
    rating: 5,
    dateAdded: "12-1-19",
    tags: ["rich", "time-consuming", "pan"],
    ingredients: [
      {
        name: "steak",
        amount: 2,
        unit: "lbs"
      }
    ],
    notes: [],
    steps: [
      "Pat the steak dry and season generously with salt and pepper",
      "Preheat the pan and add a tablespoon of canola oil."
    ]
  },
  {
    id: 4,
    name: "Chipotle Chicken Copycat",
    category: "Chicken",
    rating: 5,
    dateAdded: "12-1-19",
    tags: ["easy", "pan", "oven"],
    ingredients: [
      {
        name: "skinless, boneless chicken thighs",
        amount: 2,
        unit: "lbs"
      }
    ],
    notes: ["If it breaks, just mix it up"],
    steps: [
      "Throw marinade and chicken in ziploc",
      "Preheat the pan with canola oil."
    ]
  }
]

const recipesReducer = (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case RecipesActionTypes.SET_RECIPES:
      return payload

    default:
      return state
  }
}

export default recipesReducer

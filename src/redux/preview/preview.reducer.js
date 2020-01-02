import previewActionTypes from "./preview.types"

export default (state = false, { type, payload }) => {
  switch (type) {
    case previewActionTypes.TOGGLE_PREVIEW:
      if (payload) {
        return payload
      } else {
        return state
      }

    default:
      return state
  }
}

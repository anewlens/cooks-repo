import previewActionTypes from "./preview.types"

export const togglePreview = item => ({
  type: previewActionTypes.TOGGLE_PREVIEW,
  payload: item
})

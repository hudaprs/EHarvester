import {
  SET_MODAL_VISIBILITY,
  SET_MODAL_DATA,
  CLEAR_MODAL_DATA,
} from "@reduxTypes/authModalTypes"

const initialState = {
  visibility: false,
  data: null,
}

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_MODAL_VISIBILITY:
      return {
        ...state,
        visibility: payload,
      }
    case SET_MODAL_DATA:
      return {
        ...state,
        data: payload,
      }
    case CLEAR_MODAL_DATA:
      return {
        ...state,
        data: null,
      }
    default:
      return state
  }
}

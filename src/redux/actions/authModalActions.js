import {
  SET_MODAL_VISIBILITY,
  SET_MODAL_DATA,
  CLEAR_MODAL_DATA,
} from "@reduxTypes/authModalTypes"

// Set Modal Visibility
export const setModalVisibility = (visibilty) => (dispatch) => {
  dispatch({ type: SET_MODAL_VISIBILITY, payload: visibilty })
}

// Set Modal data
export const setModalData = (data) => (dispatch) => {
  dispatch({ type: CLEAR_MODAL_DATA })
  dispatch({ type: SET_MODAL_DATA, payload: data })
}

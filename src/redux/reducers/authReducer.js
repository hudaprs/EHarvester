import { LOGIN, LOGIN_ERROR, LOGOUT } from "@reduxTypes/authTypes"

const initialState = {
  token: null,
}

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case LOGIN:
      return {
        ...state,
        token: payload.token,
      }
    case LOGIN_ERROR:
    case LOGOUT:
      return {
        ...state,
        token: null,
      }
    default:
      return state
  }
}

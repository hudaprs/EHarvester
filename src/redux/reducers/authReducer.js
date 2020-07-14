import {
  SET_LOADING,
  SET_USER_DATA,
  CLEAR_USER_DATA,
  LOGIN,
  LOGIN_ERROR,
  LOGOUT,
  SET_ERROR_TYPE,
  CLEAR_ERROR_TYPE
} from "@reduxTypes/authTypes"

const initialState = {
  loading: false,
  userData: {
    username: "",
    password: "",
  },
  token: null,
  errorType: "",
}

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_LOADING:
      return {
        ...state,
        loading: true,
      }
    case SET_USER_DATA:
      return {
        ...state,
        userData: {
          ...state.userData,
          username: payload.username,
          password: payload.password,
        },
      }
    case LOGIN:
      return {
        ...state,
        token: payload.token,
        loading: false,
      }
    case LOGIN_ERROR:
    case LOGOUT:
      return {
        ...state,
        token: null,
        loading: false,
      }
    case CLEAR_USER_DATA:
      return {
        ...state,
        userData: {
          ...state.userData,
          username: "",
          password: "",
        },
      }
    case SET_ERROR_TYPE:
      return {
        ...state,
        errorType: payload,
      }
    case CLEAR_ERROR_TYPE: {
      return {
        ...state,
        errorType: "",
      }
    }
    default:
      return state
  }
}

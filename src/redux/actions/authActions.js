import { LOGIN, SIGN_OUT, LOGIN_ERROR } from "@reduxTypes/authTypes"
import axios from "axios"
import AsyncStorage from "@react-native-community/async-storage"

// Auto Login
export const autoLogin = () => async (dispatch) => {
  try {
    const token = await AsyncStorage.getItem("token")

    if (token) {
      dispatch({ type: LOGIN, payload: { token } })
    } else {
      dispatch({ type: LOGIN_ERROR })
    }
  } catch (err) {
    dispatch({ type: LOGIN_ERROR })
  }
}

// Login
export const login = (formData) => async (dispatch) => {
  try {
    const token = "asdadsadasdsad"

    await AsyncStorage.setItem("token", token)

    dispatch({ type: LOGIN, payload: { token } })
  } catch (err) {
    dispatch({ type: LOGIN_ERROR })
  }
}

export const signOut = () => async (dispatch) => {
  try {
    await AsyncStorage.removeItem("token")

    dispatch({ type: SIGN_OUT })
  } catch (err) {
    dispatch({ type: LOGIN_ERROR })
  }
}

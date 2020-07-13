import {
  SET_LOADING,
  SET_USER_DATA,
  CLEAR_USER_DATA,
  LOGIN,
  SIGN_OUT,
  LOGIN_ERROR,
} from "@reduxTypes/authTypes"
import axios from "axios"
import AsyncStorage from "@react-native-community/async-storage"

// Actions
import {
  setModalVisibility,
  setModalData,
} from "@reduxActions/authModalActions"
import { SET_ERROR_TYPE, CLEAR_ERROR_TYPE } from "../types/authTypes"

// Set Loading
export const setLoading = () => (dispatch) => {
  dispatch({ type: SET_LOADING })
}

// Set User data
export const setUserData = (userData) => (dispatch) => {
  dispatch({
    type: SET_USER_DATA,
    payload: {
      username: userData.username,
      password: userData.password,
    },
  })
}

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
  dispatch(setLoading())

  const { username, password } = formData

  // Uncomment this if you want to check otority error
  // if (otorityError == true) {
  //   setModalVisibility(true);
  //   setModalData({
  //     type: "invalidOtority",
  //     message: "Perubahan Otorisasi",
  //     messageTwo:
  //       "Kamu login beda ofdeling & data akan dihapus. Yakin ingin melanjutkan?",
  //   });
  // }

  // Simple credentials check
  // This for testing only
  if (!username || !password) {
    dispatch(setModalVisibility(true))
    dispatch(setModalData({ type: "invalidCreds", message: "Isi semua form" }))
    dispatch({ type: LOGIN_ERROR })
  } else {
    // Check if username and password is match.
    if (username == "admin" && password == "admin") {
      try {
        const token = "asdadsadasdsad"

        await AsyncStorage.setItem("token", token)

        dispatch({ type: LOGIN, payload: { token } })
        dispatch({ type: CLEAR_USER_DATA })
        dispatch({ type: CLEAR_ERROR_TYPE })
      } catch (err) {
        dispatch({ type: LOGIN_ERROR })
      }
    } else if (username != "admin") {
      dispatch(setModalVisibility(true))
      dispatch(
        setModalData({
          type: "invalidUsername",
          message: "Username Salah",
          messageTwo: "Coba cek ulang Username kamu ya",
        })
      )
      dispatch({ type: SET_ERROR_TYPE, payload: "username" })
      dispatch({ type: LOGIN_ERROR })
    } else if (password != "admin") {
      dispatch(setModalVisibility(true))
      dispatch(
        setModalData({
          type: "invalidPassword",
          message: "Kata Sandi Salah",
          messageTwo: "Coba cek ulang Kata Sandi kamu ya",
        })
      )
      dispatch({ type: SET_ERROR_TYPE, payload: "password" })
      dispatch({ type: LOGIN_ERROR })
    } else {
      dispatch(setModalVisibility(true))
      dispatch({ type: LOGIN_ERROR })
    }
  }
}

export const signOut = () => async (dispatch) => {
  dispatch(setLoading())
  try {
    await AsyncStorage.removeItem("token")

    dispatch({ type: SIGN_OUT })
  } catch (err) {
    dispatch({ type: LOGIN_ERROR })
  }
}

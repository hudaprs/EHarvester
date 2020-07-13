import "react-native-gesture-handler"
import React, { useState, useEffect } from "react"

// Expo
import { AppLoading } from "expo"
import * as Font from "expo-font"

// Redux
import { Provider } from "react-redux"
import store from "@redux"
import { autoLogin } from "@reduxActions/authActions"

// Screens
import Splash from "@screens/Splash"

// Navigations
import RootStack from "@navigations/RootStack"

const getFonts = () =>
  Font.loadAsync({
    "OpenSans-Regular": require("@fonts/OpenSans-Regular.ttf"),
    "OpenSans-Semibold": require("@fonts/OpenSans-Semibold.ttf"),
    "Poppins-Medium": require("@fonts/Poppins-Medium.otf"),
    "Poppins-Regular": require("@fonts/Poppins-Regular.otf"),
    "Poppins-SemiBold": require("@fonts/Poppins-SemiBold.otf"),
  })

const App = () => {
  const [isFontsLoaded, setIsFontsLoaded] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    store.dispatch(autoLogin())
  }, [])

  // Check the fonts is being fully loaded
  if (isFontsLoaded) {
    // Return splash screen
    if (isLoading) {
      setTimeout(() => {
        setIsLoading(false)
      }, 1000)

      return <Splash />
    } else {
      // Return the actual screen
      return (
        <Provider store={store}>
          <RootStack />
        </Provider>
      )
    }
  } else {
    // Make application load the fonts first
    return (
      <AppLoading
        startAsync={getFonts}
        onFinish={() => setIsFontsLoaded(true)}
      />
    )
  }
}

export default App

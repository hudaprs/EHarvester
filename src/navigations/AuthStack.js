import React from "react"
import { createStackNavigator } from "@react-navigation/stack"

// Screens
import Login from "../screens/auth/Login"

const Stack = createStackNavigator()

const AuthStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name='Login'
        component={Login}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  )
}

export default AuthStack

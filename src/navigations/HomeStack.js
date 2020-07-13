import React from "react"
import { createStackNavigator } from "@react-navigation/stack"

// Screens
import Home from "@screens/home/Home"

const Stack = createStackNavigator()

const HomeStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name='Home'
        component={Home}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  )
}

export default HomeStack

import React from "react"
import { createStackNavigator } from "@react-navigation/stack"

// Screens
import Leaf from "@screens/leaf/Leaf"

const Stack = createStackNavigator()

const LeafStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name='Leaf' component={Leaf} />
    </Stack.Navigator>
  )
}

export default LeafStack

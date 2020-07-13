import React from "react"
import { createStackNavigator } from "@react-navigation/stack"

// Screens
import Truck from "@screens/truck/Truck"

const Stack = createStackNavigator()

const TruckStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name='Truck' component={Truck} />
    </Stack.Navigator>
  )
}

export default TruckStack

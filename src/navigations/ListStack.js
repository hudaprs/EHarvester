import React from "react"
import { createStackNavigator } from "@react-navigation/stack"

// Screens
import List from "@screens/list/List"

const Stack = createStackNavigator()

const ListStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name='List' component={List} />
    </Stack.Navigator>
  )
}

export default ListStack

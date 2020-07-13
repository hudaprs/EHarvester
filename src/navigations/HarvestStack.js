import React from "react"
import { createStackNavigator } from "@react-navigation/stack"

// Screens
import Harvest from "@screens/harvest/Harvest"
import Harvester from "@screens/harvest/Harvester"
import HarvestPlan from "@screens/harvest/HarvestPlan"

// Global Styles
import { screenOptionStyles } from "@globalStyles/global"

const Stack = createStackNavigator()

const HarvestStack = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyles}>
      <Stack.Screen
        name='Harvest'
        component={Harvest}
        options={{ title: "Panen" }}
      />
      <Stack.Screen
        name='Harvester'
        component={Harvester}
        options={{ title: "Pemanen" }}
      />
      <Stack.Screen
        name='HarvestPlan'
        component={HarvestPlan}
        options={{ title: "Rencana Panen" }}
      />
    </Stack.Navigator>
  )
}

export default HarvestStack

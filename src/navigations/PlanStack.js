import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

// Screens
import Plan from "@screens/plan/Plan";
import Harvester from "@screens/plan/Harvester";
import HarvestPlan from "@screens/plan/HarvestPlan";

// Global Styles
import { screenOptionStyles } from "@globalStyles/global";

const Stack = createStackNavigator();

const PlanStack = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyles}>
      <Stack.Screen
        name='Plan'
        component={Plan}
        options={{ title: "Rencana" }}
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
  );
};

export default PlanStack;

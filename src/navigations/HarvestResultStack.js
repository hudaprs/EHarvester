import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

// Screens
import HarvestResult from "@screens/harvest_result/HarvestResult";

const Stack = createStackNavigator();

const HarvestResultStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name='HarvestResult'
        component={HarvestResult}
        options={{ title: "Hasil Panen" }}
      />
    </Stack.Navigator>
  );
};

export default HarvestResultStack;

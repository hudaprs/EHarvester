import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

// Screens
import Config from "@screens/config/Config";

const Stack = createStackNavigator();

const ConfigStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name='Config' component={Config} />
    </Stack.Navigator>
  );
};

export default ConfigStack;

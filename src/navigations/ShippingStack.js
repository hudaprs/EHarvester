import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

// Screens
import Shipping from "@screens/shipping/Shipping";

const Stack = createStackNavigator();

const ShippingStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name='Shipping' component={Shipping} />
    </Stack.Navigator>
  );
};

export default ShippingStack;

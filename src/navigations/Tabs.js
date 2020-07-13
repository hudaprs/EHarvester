import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

// Navigations
import HomeStack from "./HomeStack";
import HarvestStack from "./HarvestStack";
import LeafStack from "./LeafStack";
import TruckStack from "./TruckStack";
import ListStack from "./ListStack";

// Icons
import { FontAwesome } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

const Tabs = () => {
  return (
    <Tab.Navigator
      lazy={false}
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let icon;

          if (route.name === "HomeTab") {
            icon = "home";
          } else if (route.name === "HarvestTab") {
            icon = "list-alt";
          } else if (route.name === "LeafTab") {
            icon = "leaf";
          } else if (route.name === "TruckTab") {
            icon = "truck";
          } else if (route.name === "ListTab") {
            icon = "list";
          }

          return <FontAwesome name={icon} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: "#407BFF",
        inactiveTintColor: "#233258",
        showLabel: false,
      }}
    >
      <Tab.Screen name='HomeTab' component={HomeStack} />
      <Tab.Screen name='HarvestTab' component={HarvestStack} />
      <Tab.Screen name='LeafTab' component={LeafStack} />
      <Tab.Screen name='TruckTab' component={TruckStack} />
      <Tab.Screen name='ListTab' component={ListStack} />
    </Tab.Navigator>
  );
};

export default Tabs;

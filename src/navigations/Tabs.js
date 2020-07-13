import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

// Navigations
import HomeStack from "./HomeStack";
import PlanStack from "./PlanStack";
import HarvestResultStack from "./HarvestResultStack";
import ShippingStack from "./ShippingStack";
import ConfigStack from "./ConfigStack";

// Svg
import ActiveHomeIcon from "@imgs/tabs/active/ActiveHomeIcon.svg";
import ActivePlanIcon from "@imgs/tabs/active/ActivePlanIcon.svg";
import ActiveHarvestResultIcon from "@imgs/tabs/active/ActiveHarvestResultIcon.svg";
import ActiveShippingIcon from "@imgs/tabs/active/ActiveShippingIcon.svg";
import ActiveListIcon from "@imgs/tabs/active/ActiveListIcon.svg";
import InactiveHomeIcon from "@imgs/tabs/inactive/InactiveHomeIcon.svg";
import InactivePlanIcon from "@imgs/tabs/inactive/InactivePlanIcon.svg";
import InactiveHarvestResultIcon from "@imgs/tabs/inactive/InactiveHarvestResultIcon.svg";
import InactiveShippingIcon from "@imgs/tabs/inactive/InactiveShippingIcon.svg";
import InactiveListIcon from "@imgs/tabs/inactive/InactiveListIcon.svg";

const Tab = createBottomTabNavigator();

const Tabs = () => {
  return (
    <Tab.Navigator
      lazy={false}
      tabBarOptions={{
        showLabel: false,
      }}
    >
      <Tab.Screen
        name='HomeTab'
        component={HomeStack}
        options={{
          tabBarIcon: ({ focused, size }) => {
            return focused ? (
              <ActiveHomeIcon height={size} widht={size} />
            ) : (
              <InactiveHomeIcon height={size} widht={size} />
            );
          },
        }}
      />
      <Tab.Screen
        name='PlanTab'
        component={PlanStack}
        options={{
          tabBarIcon: ({ focused, size }) => {
            return focused ? (
              <ActivePlanIcon height={size} widht={size} />
            ) : (
              <InactivePlanIcon height={size} widht={size} />
            );
          },
        }}
      />
      <Tab.Screen
        name='HarvestResultTab'
        component={HarvestResultStack}
        options={{
          tabBarIcon: ({ focused, size }) => {
            return focused ? (
              <ActiveHarvestResultIcon height={size} widht={size} />
            ) : (
              <InactiveHarvestResultIcon height={size} widht={size} />
            );
          },
        }}
      />
      <Tab.Screen
        name='ShippingTab'
        component={ShippingStack}
        options={{
          tabBarIcon: ({ focused, size }) => {
            return focused ? (
              <ActiveShippingIcon height={size} widht={size} />
            ) : (
              <InactiveShippingIcon height={size} widht={size} />
            );
          },
        }}
      />
      <Tab.Screen
        name='ConfigTab'
        component={ConfigStack}
        options={{
          tabBarIcon: ({ focused, size }) => {
            return focused ? (
              <ActiveListIcon height={size} widht={size} />
            ) : (
              <InactiveListIcon height={size} widht={size} />
            );
          },
        }}
      />
    </Tab.Navigator>
  );
};

export default Tabs;

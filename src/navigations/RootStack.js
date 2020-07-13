import React from "react"
import { NavigationContainer } from "@react-navigation/native"
import { createStackNavigator } from "@react-navigation/stack"

// Navigations
import AuthStack from "./AuthStack"
import Tabs from "./Tabs"

// Redux
import { connect } from "react-redux"

const Stack = createStackNavigator()

const RootStack = ({ auth }) => {
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode='none'>
        {auth && !auth.token ? (
          <Stack.Screen name='Auth' component={AuthStack} />
        ) : (
          <Stack.Screen name='App' component={Tabs} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  )
}

const mapStateToProps = (state) => ({
  auth: state.auth,
})

export default connect(mapStateToProps)(RootStack)

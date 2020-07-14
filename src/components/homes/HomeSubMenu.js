import React, { Fragment } from "react"
import { Text, View, StyleSheet, TouchableOpacity } from "react-native"

// Svg's
import UserIcon from "@imgs/home/UserIcon.svg"
import MoneyIcon from "@imgs/home/MoneyIcon.svg"
import SoilIcon from "@imgs/home/SoilIcon.svg"
import PickupIcon from "@imgs/home/PickupIcon.svg"

// Global Styles
import { globalStyles } from "@globalStyles/global"

const HomeSubMenu = () => {
  const {
    box
  } = globalStyles

  const {
    homeSubMenuContainer,
    homeSubMenuItem,
    homeSubMenuIcon,
    homeSubMenuTitle
  } = styles

  return (
    <Fragment>
      <View style={[globalStyles.box, homeSubMenuContainer]}>
        <View style={homeSubMenuItem}>
          <TouchableOpacity>
            <UserIcon name='user' style={homeSubMenuIcon} size={24} />
          </TouchableOpacity>
          <Text style={homeSubMenuTitle}>Summary{"\n"}Pemanen</Text>
        </View>
        <View style={homeSubMenuItem}>
          <TouchableOpacity>
            <MoneyIcon name='dollar' style={homeSubMenuIcon} size={24} />
          </TouchableOpacity>
          <Text style={homeSubMenuTitle}>Denda{"\n"}Panen</Text>
        </View>
        <View style={homeSubMenuItem}>
          <TouchableOpacity>
            <SoilIcon name='list' style={homeSubMenuIcon} size={24} />
          </TouchableOpacity>
          <Text style={homeSubMenuTitle}>Luasan{"\n"}Wilayah</Text>
        </View>
        <View style={homeSubMenuItem}>
          <TouchableOpacity>
            <PickupIcon
              name='list-alt'
              style={homeSubMenuIcon}
              size={24}
            />
          </TouchableOpacity>
          <Text style={homeSubMenuTitle}>Angkut{"\n"}Buah</Text>
        </View>
      </View>
    </Fragment>
  )
}

const styles = StyleSheet.create({
  homeSubMenuContainer: {
    justifyContent: "space-between",
    flexDirection: "row",
  },
  homeSubMenuItem: {
    alignItems: "center",
    textAlign: "center",
  },
  homeSubMenuIcon: {
    color: "#F9686A",
  },
  homeSubMenuTitle: {
    textAlign: "center",
    fontSize: 12,
  },
})

export default HomeSubMenu

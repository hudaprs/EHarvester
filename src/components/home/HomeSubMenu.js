import React, { Fragment } from 'react'
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native'

// Svg's
import UserIcon from '@imgs/home/UserIcon.svg'
import MoneyIcon from '@imgs/home/MoneyIcon.svg'
import SoilIcon from '@imgs/home/SoilIcon.svg'
import PickupIcon from '@imgs/home/PickupIcon.svg'

// Components
import PoppinsRegular from '@components/text/PoppinsRegular'

// Global Styles
import { globalStyles } from '@globalStyles/global'

const HomeSubMenu = () => {
  const { box } = globalStyles

  const {
    homeSubMenuContainer,
    homeSubMenuItem,
    homeSubMenuIcon,
    homeSubMenuTitle,
  } = styles

  return (
    <Fragment>
      <View style={[box, homeSubMenuContainer]}>
        <View style={homeSubMenuItem}>
          <TouchableOpacity>
            <UserIcon name="user" style={homeSubMenuIcon} size={24} />
          </TouchableOpacity>
          <PoppinsRegular style={homeSubMenuTitle}>
            Summary{'\n'}Pemanen
          </PoppinsRegular>
        </View>
        <View style={homeSubMenuItem}>
          <TouchableOpacity>
            <MoneyIcon name="dollar" style={homeSubMenuIcon} size={24} />
          </TouchableOpacity>
          <PoppinsRegular style={homeSubMenuTitle}>
            Denda{'\n'}Panen
          </PoppinsRegular>
        </View>
        <View style={homeSubMenuItem}>
          <TouchableOpacity>
            <SoilIcon name="list" style={homeSubMenuIcon} size={24} />
          </TouchableOpacity>
          <PoppinsRegular style={homeSubMenuTitle}>
            Luasan{'\n'}Wilayah
          </PoppinsRegular>
        </View>
        <View style={homeSubMenuItem}>
          <TouchableOpacity>
            <PickupIcon name="list-alt" style={homeSubMenuIcon} size={24} />
          </TouchableOpacity>
          <PoppinsRegular style={homeSubMenuTitle}>
            Angkut{'\n'}Buah
          </PoppinsRegular>
        </View>
      </View>
    </Fragment>
  )
}

const styles = StyleSheet.create({
  homeSubMenuContainer: {
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  homeSubMenuItem: {
    alignItems: 'center',
    textAlign: 'center',
  },
  homeSubMenuIcon: {
    color: '#F9686A',
  },
  homeSubMenuTitle: {
    color: '#4D5977',
    textAlign: 'center',
    fontSize: 11,
  },
})

export default HomeSubMenu

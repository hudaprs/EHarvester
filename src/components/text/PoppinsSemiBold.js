import React from 'react'
import { Text } from 'react-native'

const PoppinsSemiBold = ({ children, style }) => {
  return (
    <Text style={[style, { fontFamily: 'Poppins-SemiBold' }]}>{children}</Text>
  )
}

export default PoppinsSemiBold

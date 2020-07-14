import React from "react"
import { View, StyleSheet } from "react-native"

// SVG
import LandingHeader from "@imgs/landing/LandingHeader.svg"
import LandingBody from "@imgs/landing/LandingBody.svg"

// Device Size
import { deviceSize } from "@globalStyles/global"

const Landing = () => {
  const { container, imageHeader } = styles 
  const { deviceWidth, deviceHeight } = deviceSize

  return (
    <View style={container}>
      {/* Body Header */}
      <LandingHeader style={imageHeader} />

      {/* Body Image */}
      <LandingBody
        width={deviceWidth}
        height={deviceHeight}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
  },
  imageHeader: {
    position: "absolute",
    top: 0,
    left: 0,
    marginLeft: 20,
    marginTop: 30,
    zIndex: 1,
  },
})

export default Landing

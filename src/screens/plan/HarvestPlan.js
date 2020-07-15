import React, { useState } from "react"
import { View, Text } from "react-native"
import { CheckBox } from "react-native-elements"

// Global Styles
import { globalStyles } from "@globalStyles/global"
import { TouchableOpacity } from "react-native-gesture-handler"

const HarvestPlan = () => {
  const [plans, setPlans] = useState({
    lokasiPanen: false,
    mandorDanPemanen: false,
    angkongMekanis: false
  })
  const { lokasiPanen, mandorDanPemanen, angkongMekanis } = plans

  const {
    container,
    textSecondary,
    mt2,
    mt4,
    boxPrimary,
    boxBody,
    boxCheckBoxInput,
    textWrap,
    boxTitle,
    boxSubTitle,
    btn,
    btnText
  } = globalStyles

  const buttonPress = () => {
    console.log(plans)
  }

  return (
    <View style={container}>
      {/* Title */}
      <Text style={[textSecondary, { opacity: 0.5 }]}>
        Kamu harus menentukan rencana sesuai dengan item di bawah ini
      </Text>

      <View style={mt2} />

      {/* Boxes */}
      <View style={boxPrimary}>
        <View style={boxBody}>
          <View style={boxCheckBoxInput}>
            <CheckBox
              checkedIcon='dot-circle-o'
              uncheckedIcon='circle-o'
              uncheckedColor='#407BFF'
              checkedColor='#407BFF'
              checked={lokasiPanen}
              onPress={() => {
                setPlans({ ...plans, lokasiPanen: !lokasiPanen })
              }}
            />
          </View>
          <View style={textWrap}>
            <Text style={boxTitle}>Lokasi Panen</Text>
            <Text style={boxSubTitle}>
              Pilih lokasi di mana panen akan dilakukan
            </Text>
          </View>
        </View>
      </View>
      <View style={boxPrimary}>
        <View style={boxBody}>
          <View style={boxCheckBoxInput}>
            <CheckBox
              checkedIcon='dot-circle-o'
              uncheckedIcon='circle-o'
              uncheckedColor='#407BFF'
              checkedColor='#407BFF'
              checked={mandorDanPemanen}
              onPress={() =>
                setPlans({ ...plans, mandorDanPemanen: !mandorDanPemanen })
              }
            />
          </View>
          <View style={textWrap}>
            <Text style={boxTitle}>Mandor & Pemanen</Text>
            <Text style={boxSubTitle}>Menentukan mandor dan pemanen</Text>
          </View>
        </View>
      </View>
      <View style={boxPrimary}>
        <View style={boxBody}>
          <View style={boxCheckBoxInput}>
            <CheckBox
              checkedIcon='dot-circle-o'
              uncheckedIcon='circle-o'
              uncheckedColor='#407BFF'
              checkedColor='#407BFF'
              checked={plans.angkongMekanis}
              onPress={() =>
                setPlans({ ...plans, angkongMekanis: !angkongMekanis })
              }
            />
          </View>
          <View style={textWrap}>
            <Text style={boxTitle}>Angkong Mekanis</Text>
            <Text style={boxSubTitle}>Menentukan kendaraan dan operator</Text>
          </View>
        </View>
      </View>

      <View style={mt4} />

      <TouchableOpacity style={btn} onPress={buttonPress}>
        <Text style={btnText}>Selesai</Text>
      </TouchableOpacity>
    </View>
  )
}

export default HarvestPlan

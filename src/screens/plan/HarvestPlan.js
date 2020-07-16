import React, { useState } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { CheckBox } from 'react-native-elements'

// Componnets
import PoppinsMedium from '@components/text/PoppinsMedium'
import PoppinsSemiBold from '@components/text/PoppinsSemiBold'
import PoppinsRegular from '@components/text/PoppinsRegular'

// Global Styles
import { globalStyles } from '@globalStyles/global'

const HarvestPlan = () => {
  const [plans, setPlans] = useState({
    lokasiPanen: false,
    mandorDanPemanen: false,
    angkongMekanis: false,
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
    btnText,
  } = globalStyles

  const buttonPress = () => {
    console.log(plans)
  }

  return (
    <View style={container}>
      {/* Title */}
      <PoppinsMedium style={[textSecondary, { opacity: 0.5 }]}>
        Kamu harus menentukan rencana sesuai dengan item di bawah ini
      </PoppinsMedium>

      <View style={mt2} />

      {/* Boxes */}
      <View style={boxPrimary}>
        <View style={boxBody}>
          <View style={boxCheckBoxInput}>
            <CheckBox
              checkedIcon="dot-circle-o"
              uncheckedIcon="circle-o"
              uncheckedColor="#407BFF"
              checkedColor="#407BFF"
              checked={lokasiPanen}
              onPress={() => {
                setPlans({ ...plans, lokasiPanen: !lokasiPanen })
              }}
            />
          </View>
          <View style={textWrap}>
            <PoppinsSemiBold style={boxTitle}>Lokasi Panen</PoppinsSemiBold>
            <PoppinsRegular style={boxSubTitle}>
              Pilih lokasi di mana panen akan dilakukan
            </PoppinsRegular>
          </View>
        </View>
      </View>
      <View style={boxPrimary}>
        <View style={boxBody}>
          <View style={boxCheckBoxInput}>
            <CheckBox
              checkedIcon="dot-circle-o"
              uncheckedIcon="circle-o"
              uncheckedColor="#407BFF"
              checkedColor="#407BFF"
              checked={mandorDanPemanen}
              onPress={() =>
                setPlans({ ...plans, mandorDanPemanen: !mandorDanPemanen })
              }
            />
          </View>
          <View style={textWrap}>
            <PoppinsSemiBold style={boxTitle}>Mandor & Pemanen</PoppinsSemiBold>
            <PoppinsRegular style={boxSubTitle}>
              Menentukan mandor dan pemanen
            </PoppinsRegular>
          </View>
        </View>
      </View>
      <View style={boxPrimary}>
        <View style={boxBody}>
          <View style={boxCheckBoxInput}>
            <CheckBox
              checkedIcon="dot-circle-o"
              uncheckedIcon="circle-o"
              uncheckedColor="#407BFF"
              checkedColor="#407BFF"
              checked={plans.angkongMekanis}
              onPress={() =>
                setPlans({ ...plans, angkongMekanis: !angkongMekanis })
              }
            />
          </View>
          <View style={textWrap}>
            <PoppinsSemiBold style={boxTitle}>Angkong Mekanis</PoppinsSemiBold>
            <PoppinsRegular style={boxSubTitle}>
              Menentukan kendaraan dan operator
            </PoppinsRegular>
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

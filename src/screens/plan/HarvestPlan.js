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
    angkongMekanis: false,
  })
  const { lokasiPanen, mandorDanPemanen, angkongMekanis } = plans

  const done = () => {
    console.log(plans)
  }

  return (
    <View style={globalStyles.container}>
      {/* Title */}
      <Text style={[globalStyles.textSecondary, { opacity: 0.5 }]}>
        Kamu harus menentukan rencana sesuai dengan item di bawah ini
      </Text>

      <View style={globalStyles.mt2} />

      {/* Boxes */}
      <View style={globalStyles.boxPrimary}>
        <View style={globalStyles.boxBody}>
          <View style={globalStyles.boxCheckBoxInput}>
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
          <View style={globalStyles.textWrap}>
            <Text style={globalStyles.boxTitle}>Lokasi Panen</Text>
            <Text style={globalStyles.boxSubTitle}>
              Pilih lokasi di mana panen akan dilakukan
            </Text>
          </View>
        </View>
      </View>
      <View style={globalStyles.boxPrimary}>
        <View style={globalStyles.boxBody}>
          <View style={globalStyles.boxCheckBoxInput}>
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
          <View style={globalStyles.textWrap}>
            <Text style={globalStyles.boxTitle}>Mandor & Pemanen</Text>
            <Text style={globalStyles.boxSubTitle}>
              Menentukan mandor dan pemanen
            </Text>
          </View>
        </View>
      </View>
      <View style={globalStyles.boxPrimary}>
        <View style={globalStyles.boxBody}>
          <View style={globalStyles.boxCheckBoxInput}>
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
          <View style={globalStyles.textWrap}>
            <Text style={globalStyles.boxTitle}>Angkong Mekanis</Text>
            <Text style={globalStyles.boxSubTitle}>
              Menentukan kendaraan dan operator
            </Text>
          </View>
        </View>
      </View>

      <View style={globalStyles.mt4} />

      <TouchableOpacity style={globalStyles.btn} onPress={done}>
        <Text style={globalStyles.btnText}>Selesai</Text>
      </TouchableOpacity>
    </View>
  )
}

export default HarvestPlan

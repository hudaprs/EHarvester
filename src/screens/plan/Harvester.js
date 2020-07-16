import React, { useState } from 'react'
import {
  View,
  Text,
  StyleSheet,
  Image,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
} from 'react-native'
import { CheckBox } from 'react-native-elements'

// Icons
import { FontAwesome } from '@expo/vector-icons'

// Componnets
import PoppinsMedium from '@components/text/PoppinsMedium'
import PoppinsSemiBold from '@components/text/PoppinsSemiBold'
import PoppinsRegular from '@components/text/PoppinsRegular'

// Svg
import AddIcon from '@imgs/harvester/AddIcon'
import PlusIcon from '@imgs/PlusIcon'

// Global Styles
import { globalStyles } from '@globalStyles/global'

const Harvester = () => {
  const [harvesters, setHarvesters] = useState({
    one: false,
    two: false,
  })

  const { one, two } = harvesters

  const {
    container,
    mt4,
    btnOutLine,
    btnOutLinePrimary,
    btnOutLineText,
    btnOutLineTextPrimary,
    mt3,
    boxPrimary,
    boxBody,
    boxCheckBoxInput,
    boxTitle,
    boxSubTitle,
    badge,
    badgePrimary,
    btn,
    btnText,
  } = globalStyles

  const {
    harvesterHeader,
    harvesterRole,
    harvesterName,
    harvesterCode,
    harvesterMenu,
    harvesterMenuTitle,
    harvesterMenuSubTitle,
    addHarvest,
    image,
  } = styles

  const submit = () => {
    const arr = []

    for (let key in harvesters) {
      if (harvesters[key] === true) arr.push(key)
    }

    console.log(arr.toString())
  }

  return (
    <SafeAreaView style={container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Harvester Header */}
        <View style={harvesterHeader}>
          <View>
            <Image source={require('@imgs/home/ImageOne.png')} style={image} />
          </View>
          <View>
            <PoppinsRegular style={harvesterRole}>Mandor Panen</PoppinsRegular>
            <PoppinsSemiBold style={harvesterName}>
              Débora Barbosa
            </PoppinsSemiBold>
            <PoppinsSemiBold style={harvesterCode}>
              41/4121/413/3920
            </PoppinsSemiBold>
          </View>
        </View>

        {/* Harvester Body */}
        <View style={mt4}>
          {/* Harvester Menu */}
          <View style={harvesterMenu}>
            <View>
              <PoppinsSemiBold style={harvesterMenuTitle}>
                Pilih Pemanen
              </PoppinsSemiBold>
              <PoppinsRegular style={harvesterMenuSubTitle}>
                2 Pemanen
              </PoppinsRegular>
            </View>
            <View>
              <TouchableOpacity style={[btnOutLine, btnOutLinePrimary]}>
                <PlusIcon style={{ marginRight: 10, marginBottom: 3 }} />
                <PoppinsRegular style={[btnOutLineText, btnOutLineTextPrimary]}>
                  Tambah Pemanen
                </PoppinsRegular>
              </TouchableOpacity>
            </View>
          </View>

          {/* Harvester */}
          <View style={mt3}>
            <View style={boxPrimary}>
              <View style={boxBody}>
                <View style={boxCheckBoxInput}>
                  <CheckBox
                    checkedIcon="dot-circle-o"
                    uncheckedIcon="circle-o"
                    uncheckedColor="#407BFF"
                    checkedColor="#407BFF"
                    checked={one}
                    onPress={() => setHarvesters({ ...harvesters, one: !one })}
                  />
                </View>
                <View>
                  <PoppinsMedium style={[badge, badgePrimary]}>
                    Pinjam Pemanen
                  </PoppinsMedium>
                  <PoppinsSemiBold style={boxTitle}>Qiu Xun</PoppinsSemiBold>
                  <PoppinsRegular style={boxSubTitle}>
                    41/4121/413/454
                  </PoppinsRegular>
                </View>
                <View style={addHarvest}>
                  <TouchableOpacity>
                    <AddIcon />
                  </TouchableOpacity>
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
                    checked={two}
                    onPress={() => setHarvesters({ ...harvesters, two: !two })}
                  />
                </View>
                <View>
                  <PoppinsSemiBold style={boxTitle}>
                    Tongbang Jun-Seo
                  </PoppinsSemiBold>
                  <PoppinsRegular style={boxSubTitle}>
                    41/4121/413/454
                  </PoppinsRegular>
                </View>
                <View style={addHarvest}>
                  <TouchableOpacity>
                    <AddIcon />
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>

          <TouchableOpacity style={btn} onPress={submit}>
            <Text style={btnText}>Simpan</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  // Headers
  harvesterHeader: {
    flexDirection: 'row',
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 2,
    marginRight: 20,
  },
  harvesterRole: {
    color: '#626D87',
    fontSize: 10,
  },
  harvesterName: {
    fontFamily: 'Poppins-SemiBold',
    color: '#407BFF',
    fontSize: 18,
  },
  harvesterCode: {
    fontFamily: 'Poppins-Medium',
    color: '#626D87',
    fontSize: 12,
  },

  // Harvester Menu
  harvesterMenu: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  harvesterMenuTitle: {
    color: '#626D87',
    fontFamily: 'Poppins-SemiBold',
    fontSize: 14,
  },
  harvesterMenuSubTitle: {
    color: '#626D87',
    fontFamily: 'Poppins-Regular',
    fontSize: 12,
  },

  addHarvest: {
    marginLeft: 'auto',
  },
})

export default Harvester

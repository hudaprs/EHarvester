import React, { useState } from "react"
import {
  View,
  Text,
  StyleSheet,
  Image,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
} from "react-native"
import { CheckBox } from "react-native-elements"

// Icons
import { FontAwesome } from "@expo/vector-icons"

// Global Styles
import { globalStyles } from "@globalStyles/global"

const Harvester = () => {
  const [harvesters, setHarvesters] = useState({
    one: false,
    two: false,
  })

  const { one, two } = harvesters

  const submit = () => {
    const arr = []

    for (let key in harvesters) {
      if (harvesters[key] === true) arr.push(key)
    }

    console.log(arr.toString())
  }

  return (
    <SafeAreaView style={globalStyles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Harvester Header */}
        <View style={styles.harvesterHeader}>
          <View>
            <Image
              source={require("@imgs/home/ImageOne.png")}
              style={styles.image}
            />
          </View>
          <View>
            <Text style={styles.harvesterRole}>Mandor Panen</Text>
            <Text style={styles.harvesterName}>Débora Barbosa</Text>
            <Text style={styles.harvesterCode}>41/4121/413/3920</Text>
          </View>
        </View>

        {/* Harvester Body */}
        <View style={globalStyles.mt4}>
          {/* Harvester Menu */}
          <View style={styles.harvesterMenu}>
            <View>
              <Text style={styles.harvesterMenuTitle}>Pilih Pemanen</Text>
              <Text style={styles.harvesterMenuSubTitle}>2 Pemanen</Text>
            </View>
            <View>
              <TouchableOpacity
                style={[
                  globalStyles.btnOutLine,
                  globalStyles.btnOutLinePrimary,
                ]}
              >
                <FontAwesome
                  name='plus'
                  size={20}
                  color={"#407BFF"}
                  style={{ marginRight: 10 }}
                />
                <Text
                  style={[
                    globalStyles.btnOutLineText,
                    globalStyles.btnOutLineTextPrimary,
                  ]}
                >
                  Tambah Pemanen
                </Text>
              </TouchableOpacity>
            </View>
          </View>

          {/* Harvester */}
          <View style={globalStyles.mt3}>
            <View style={globalStyles.boxPrimary}>
              <View style={globalStyles.boxBody}>
                <View style={globalStyles.boxCheckBoxInput}>
                  <CheckBox
                    checkedIcon='dot-circle-o'
                    uncheckedIcon='circle-o'
                    uncheckedColor='#407BFF'
                    checkedColor='#407BFF'
                    checked={one}
                    onPress={() => setHarvesters({ ...harvesters, one: !one })}
                  />
                </View>
                <View>
                  <Text style={[globalStyles.badge, globalStyles.badgePrimary]}>
                    Pinjam Pemanen
                  </Text>
                  <Text style={globalStyles.boxTitle}>Qiu Xun</Text>
                  <Text style={globalStyles.boxSubTitle}>41/4121/413/454</Text>
                </View>
                <View style={styles.addHarvest}>
                  <TouchableOpacity style={styles.addIcon}>
                    <FontAwesome
                      name='plus'
                      size={10}
                      style={{ color: "#fff" }}
                    />
                  </TouchableOpacity>
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
                    checked={two}
                    onPress={() => setHarvesters({ ...harvesters, two: !two })}
                  />
                </View>
                <View>
                  <Text style={globalStyles.boxTitle}>Tongbang Jun-Seo</Text>
                  <Text style={globalStyles.boxSubTitle}>41/4121/413/454</Text>
                </View>
                <View style={styles.addHarvest}>
                  <TouchableOpacity style={styles.addIcon}>
                    <FontAwesome
                      name='plus'
                      size={10}
                      style={{ color: "#fff" }}
                    />
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>

          <TouchableOpacity style={globalStyles.btn} onPress={submit}>
            <Text style={globalStyles.btnText}>Simpan</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  // Headers
  harvesterHeader: {
    flexDirection: "row",
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 2,
    marginRight: 20,
  },
  harvesterRole: {
    fontFamily: "Poppins-Regular",
    color: "#626D87",
    fontSize: 10,
  },
  harvesterName: {
    fontFamily: "Poppins-SemiBold",
    color: "#407BFF",
    fontSize: 18,
  },
  harvesterCode: {
    fontFamily: "Poppins-Medium",
    color: "#626D87",
    fontSize: 12,
  },

  // Harvester Menu
  harvesterMenu: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  harvesterMenuTitle: {
    color: "#626D87",
    fontFamily: "Poppins-SemiBold",
    fontSize: 14,
  },
  harvesterMenuSubTitle: {
    color: "#626D87",
    fontFamily: "Poppins-Regular",
    fontSize: 12,
  },

  // Harvester
  addHarvest: {
    marginLeft: "auto",
  },
  addIcon: {
    backgroundColor: "#F9686A",
    color: "#fff",
    borderRadius: 2.5,
    padding: 5,
  },
})

export default Harvester

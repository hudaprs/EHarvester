import React, { Fragment } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

// Svg
import ArrowRight from "@imgs/ArrowRight.svg";
import MapMarkerIcon from "@imgs/home/MapMarkerIcon.svg";
import UserItemIcon from "@imgs/home/UserItemIcon.svg";

import { globalStyles } from "@globalStyles/global";

const HomeItem = ({ navigation }) => {
  return (
    <Fragment>
      <View style={globalStyles.box}>
        {/* Header */}
        <View style={styles.homeItemHeader}>
          <View>
            <Text style={styles.homeItemTitle}>Rencana Panen</Text>
            <Text style={styles.homeItemSubTitle}>Hari Ini</Text>
          </View>
          <View>
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("PlanTab", {
                  screen: "HarvestPlan",
                })
              }
            >
              <ArrowRight />
            </TouchableOpacity>
          </View>
        </View>

        {/* Body */}
        <View style={styles.homeItemBody}>
          <View style={styles.homeItemBodyContent}>
            <MapMarkerIcon size={15} style={styles.homeItemBodyIcon} />
            <Text style={styles.homeItemBodyText}>Blok D20</Text>
          </View>
          <View style={styles.homeItemBodyContent}>
            <UserItemIcon size={15} style={styles.homeItemBodyIcon} />
            <Text style={styles.homeItemBodyText}>Artem Sazonov</Text>
          </View>
        </View>
      </View>
    </Fragment>
  );
};

const styles = StyleSheet.create({
  // Header
  homeItemHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  homeItemTitle: {
    fontSize: 14,
    fontFamily: "Poppins-SemiBold",
    color: "#626D87",
  },
  homeItemSubTitle: {
    fontFamily: "Poppins-SemiBold",
    color: "#233258",
    opacity: 0.4,
    fontSize: 12,
  },

  // Body
  homeItemBody: {
    marginTop: 10,
  },
  homeItemBodyText: {
    fontSize: 12,
    color: "#626D87",
    fontFamily: "Poppins-SemiBold",
  },
  homeItemBodyContent: {
    alignItems: "center",
    flexDirection: "row",
  },
  homeItemBodyIcon: {
    marginRight: 10,
  },
});

export default HomeItem;

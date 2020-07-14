import React, { Fragment } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

// Svg
import ArrowRight from "@imgs/ArrowRight.svg";
import MapMarkerIcon from "@imgs/home/MapMarkerIcon.svg";
import UserItemIcon from "@imgs/home/UserItemIcon.svg";

import { globalStyles } from "@globalStyles/global";

const HomeItem = ({ navigation }) => {
  const {
    box
  } = globalStyles

  const {
    homeItemHeader,
    homeItemTitle,
    homeItemSubTitle,
    homeItemBody,
    homeItemBodyText,
    homeItemBodyContent,
    homeItemBodyIcon
  } = styles

  return (
    <Fragment>
      <View style={box}>
        {/* Header */}
        <View style={homeItemHeader}>
          <View>
            <Text style={homeItemTitle}>Rencana Panen</Text>
            <Text style={homeItemSubTitle}>Hari Ini</Text>
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
        <View style={homeItemBody}>
          <View style={homeItemBodyContent}>
            <MapMarkerIcon size={15} style={homeItemBodyIcon} />
            <Text style={homeItemBodyText}>Blok D20</Text>
          </View>
          <View style={homeItemBodyContent}>
            <UserItemIcon size={15} style={homeItemBodyIcon} />
            <Text style={homeItemBodyText}>Artem Sazonov</Text>
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

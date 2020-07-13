import React from "react";
import {
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
  ImageBackground,
} from "react-native";

// SVG
import HomeNotification from "@imgs/home/HomeNotification.svg";
import SearchIcon from "@imgs/home/SearchIcon.svg";

// Components
import HomeSubMenu from "./HomeSubMenu";
import HomeItem from "./HomeItem";

// Global Styles
import { globalStyles } from "@globalStyles/global";

const Home = ({ navigation }) => {
  return (
    <View style={styles.homeContainer}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Header */}
        <ImageBackground
          source={require("@imgs/home/HomeBackgroundHeader.png")}
          style={styles.homeImageBackground}
          resizeMode={"stretch"}
        >
          <View style={[styles.homeHeader, styles.homePadding]}>
            {/* Photo Profile */}
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("PlanTab", {
                  screen: "Harvester",
                })
              }
            >
              <Image
                source={require("@imgs/home/ImageOne.png")}
                style={styles.image}
              />
            </TouchableOpacity>

            {/* HomeNotification Icon */}
            <View style={styles.homeHeaderIcon}>
              <TouchableOpacity style={{ marginRight: 15 }}>
                <SearchIcon />
              </TouchableOpacity>
              <TouchableOpacity>
                <View style={styles.redDotNotification} />
                <HomeNotification />
              </TouchableOpacity>
            </View>
          </View>

          {/* Sub Menu */}
          <View style={styles.homePadding}>
            <HomeSubMenu />
          </View>
        </ImageBackground>

        <View style={[styles.homePadding, globalStyles.mt4]}>
          {/* Home Item */}
          <HomeItem navigation={navigation} />
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  homeContainer: {
    backgroundColor: "#fff",
    flex: 1,
  },
  homePadding: {
    padding: 24,
  },
  homeImageBackground: {
    height: 172,
  },
  homeHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  homeHeaderIcon: {
    flexDirection: "row",
    alignItems: "center",
  },
  homeImage: {
    marginTop: 30,
  },
  image: {
    borderRadius: 12,
    width: 50,
    height: 50,
  },
  redDotNotification: {
    backgroundColor: "#F9686A",
    position: "absolute",
    right: 1,
    width: 10,
    height: 10,
    borderRadius: 10 / 2,
    zIndex: 1,
  },
});

export default Home;

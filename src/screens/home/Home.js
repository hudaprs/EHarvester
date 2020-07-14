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
import HomeSubMenu from "@components/homes/HomeSubMenu";
import HomeItem from "@components/homes/HomeItem";

// Global Styles
import { globalStyles } from "@globalStyles/global";

const Home = ({ navigation }) => {
  const {
    mt4
  } = globalStyles

  const { 
    homeContainer,
    homePadding,
    homeImageBackground,
    homeHeader,
    homeHeaderIcon,
    homeImage,
    image,
    redDotNotification
  } = styles

  return (
    <View style={homeContainer}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Header */}
        <ImageBackground
          source={require("@imgs/home/HomeBackgroundHeader.png")}
          style={homeImageBackground}
          resizeMode={"stretch"}
        >
          <View style={[homeHeader, homePadding]}>
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
                style={image}
              />
            </TouchableOpacity>

            {/* HomeNotification Icon */}
            <View style={homeHeaderIcon}>
              <TouchableOpacity style={{ marginRight: 15 }}>
                <SearchIcon />
              </TouchableOpacity>
              <TouchableOpacity>
                <View style={redDotNotification} />
                <HomeNotification />
              </TouchableOpacity>
            </View>
          </View>

          {/* Sub Menu */}
          <View style={homePadding}>
            <HomeSubMenu />
          </View>
        </ImageBackground>

        <View style={[homePadding, mt4]}>
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

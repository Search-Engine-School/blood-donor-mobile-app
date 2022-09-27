import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Image, Pressable, StyleSheet, View } from "react-native";
import {
  responsiveScreenHeight,
  responsiveScreenWidth,
} from "react-native-responsive-dimensions";
import arrow from "../../../assets/arrow-icon.png";
import topLogo from "../../../assets/white-logo.png";

export default function TopCircle() {
  const navigation = useNavigation();
  return (
    <View>
      <View style={styles.circle}></View>
      <View style={styles.circle3}></View>
      <View opacity={0.6} style={styles.circle2}></View>
      <View style={styles.topLogo}>
        <Pressable onPress={() => navigation.goBack()}>
          <Image style={styles.arrow} source={arrow}></Image>
        </Pressable>
        <Image style={styles.topLogoimg} source={topLogo}></Image>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  circle: {
    height: responsiveScreenHeight(15),
    width: responsiveScreenHeight(15),
    backgroundColor: "#DB1F26",
    borderRadius: 100,
    position: "absolute",
    elevation: 20,
    top: responsiveScreenWidth(-5),
    left: responsiveScreenWidth(-5),
    zIndex: 5,
  },
  circle2: {
    height: responsiveScreenHeight(20),
    width: responsiveScreenHeight(20),
    backgroundColor: "#FF0E0E",
    elevation: 20,
    borderRadius: 100,
    position: "absolute",
    top: responsiveScreenWidth(0),
    left: responsiveScreenWidth(-20),
    zIndex: 3,
  },
  circle3: {
    height: responsiveScreenHeight(20),
    width: responsiveScreenHeight(20),
    backgroundColor: "#FF0E0E",
    borderRadius: 100,
    position: "absolute",
    elevation: 20,
    top: responsiveScreenWidth(-20),
    left: responsiveScreenWidth(0),
    zIndex: 2,
  },
  topLogo: {
    position: "absolute",
    top: responsiveScreenHeight(2),
    left: responsiveScreenHeight(2),
    zIndex: 6,
    flexDirection: "row",
  },
  topLogoimg: {
    marginTop: 20,
    height: responsiveScreenWidth(9),
    width: responsiveScreenWidth(9),
  },
  arrow: {
    height: responsiveScreenWidth(4),
    width: responsiveScreenWidth(4),
  },
});

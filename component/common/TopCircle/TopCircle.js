import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Image, Pressable, StyleSheet, View } from "react-native";
import { responsiveScreenHeight } from "react-native-responsive-dimensions";
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
    top: -30,
    left: -30,
    zIndex: 5,
  },
  circle2: {
    height: responsiveScreenHeight(20),
    width: responsiveScreenHeight(20),
    backgroundColor: "#FF0E0E",
    elevation: 20,
    borderRadius: 100,
    position: "absolute",
    top: 0,
    left: -80,
    zIndex: 3,
  },
  circle3: {
    height: responsiveScreenHeight(20),
    width: responsiveScreenHeight(20),
    backgroundColor: "#FF0E0E",
    borderRadius: 100,
    position: "absolute",
    elevation: 20,
    top: -80,
    left: 0,
    zIndex: 2,
  },
  topLogo: {
    position: "absolute",
    top: 20,
    left: 20,
    zIndex: 6,
    flexDirection: "row",
  },
  topLogoimg: {
    marginTop: 20,
  },
  arrow: {
    height: 20,
    width: 20,
  },
});

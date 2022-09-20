import React from "react";
import { Image, Pressable, StyleSheet, View } from "react-native";
import arrow from "../../../assets/arrow-icon.png";
import topLogo from "../../../assets/white-logo.png";

export default function TopCircle() {
  return (
    <View>
      <View style={styles.circle}></View>
      <View style={styles.circle3}></View>
      <View style={styles.circle2}></View>
      <View style={styles.topLogo}>
        <Pressable>
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
    height: 150,
    width: 150,
    backgroundColor: "#DB1F26",
    borderRadius: 100,
    position: "absolute",
    top: -30,
    left: -30,
    zIndex: 5,
  },
  circle2: {
    height: 200,
    width: 200,
    backgroundColor: "#fff",
    borderRadius: 100,
    position: "absolute",
    top: 0,
    left: -80,
    zIndex: 3,
  },
  circle3: {
    height: 200,
    width: 200,
    backgroundColor: "#fff",
    borderRadius: 100,
    position: "absolute",
    top: -80,
    left: 0,
    zIndex: 3,
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

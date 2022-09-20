import React from "react";
import { ImageBackground, StyleSheet, View } from "react-native";
import bgImg from "../../assets/register-bg.png";
import TopCircle from "../common/TopCircle/TopCircle";

export default function Verification() {
  return (
    <View style={styles.container}>
      <TopCircle></TopCircle>
      <ImageBackground source={bgImg} style={styles.image}>
        <View style={styles.pinBox}></View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: "center",
  },
  pinBox: {
    height: 450,
    width: 390,
    alignSelf: "center",
    borderRadius: 10,
    elevation: 20,
    backgroundColor: "#fff",
  },
});

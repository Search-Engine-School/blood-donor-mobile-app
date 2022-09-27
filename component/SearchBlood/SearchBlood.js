import React from "react";
import {
  ImageBackground,
  SafeAreaView,
  StatusBar,
  StyleSheet,
} from "react-native";
import bgImg from "../../assets/bg-three.png";
import TopBar from "../common/TopBar/TopBar";

export default function JoinOurCommunity() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar translucent={false}></StatusBar>
      <ImageBackground source={bgImg} style={styles.image}>
        <TopBar></TopBar>
      </ImageBackground>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
  },
});

import React, { useState } from "react";
import {
  Dimensions,
  ImageBackground,
  KeyboardAvoidingView,
  Pressable,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
  View,
} from "react-native";
import {
  responsiveScreenFontSize,
  responsiveScreenHeight,
  responsiveScreenWidth,
} from "react-native-responsive-dimensions";
import bgImg from "../../assets/bg-three.png";
import TopBar from "../common/TopBar/TopBar";

const Width = Dimensions.get("window").width;
const numOfColumn = 3;
export default function Vaccination({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar translucent={false}></StatusBar>
      <ImageBackground source={bgImg} style={styles.image}>
        <TopBar></TopBar>
        <KeyboardAvoidingView style={{ flex: 1 }}>
          <View style={styles.header}>
            <Text style={styles.headerText}>Vaccination</Text>
          </View>

          <View style={styles.body}>
            <View style={styles.info}>
              <Text style={styles.infoText}>EPI schedule</Text>
            </View>
            <View style={styles.info}>
              <Text style={styles.infoText}>Covid Vaccination</Text>
            </View>
            <View style={styles.info}>
              <Text style={styles.infoText}>Hepaitysis B</Text>
            </View>
            <View style={styles.info}>
              <Text style={styles.infoText}>Polio</Text>
            </View>
            <View style={styles.info}>
              <Text style={styles.infoText}>Titenus</Text>
            </View>
          </View>

          <View style={styles.memberBtn}>
            <Pressable
              style={{
                width: "50%",
                borderRightWidth: 2,
                borderColor: "#fff",
              }}
            >
              <Text style={styles.btnText}>Community Member</Text>
            </Pressable>
            <Pressable
              style={{
                width: "50%",
              }}
            >
              <Text style={styles.btnText}>Active Donor</Text>
            </Pressable>
          </View>
        </KeyboardAvoidingView>
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
    alignItems: "center",
  },
  header: {
    width: responsiveScreenWidth(95),
    height: responsiveScreenHeight(8),
    backgroundColor: "#EB3738",
    margin: "3%",
    marginBottom: "5%",
    borderRadius: 10,
    elevation: 20,
  },
  headerText: {
    color: "#fff",
    fontSize: responsiveScreenFontSize(3),
    textAlign: "center",
    top: "20%",
    fontWeight: "900",
  },
  body: {
    width: responsiveScreenWidth(85),
    flexDirection: "column",
    alignItems: "center",
    left: "8%",
    marginBottom: "3%",
  },
  info: {
    width: responsiveScreenWidth(65),
    height: responsiveScreenHeight(8),
    backgroundColor: "#fff",
    margin: "3%",
    marginBottom: "5%",
    borderRadius: 10,
  },
  infoText: {
    color: "#EB3738",
    fontSize: responsiveScreenFontSize(3),
    textAlign: "center",
    top: "20%",
    fontWeight: "900",
  },
  memberBtn: {
    backgroundColor: "#EB3738",
    width: responsiveScreenWidth(98),
    bottom: responsiveScreenHeight(2),
    elevation: 20,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    left: "1%",
  },
  btnText: {
    color: "#fff",
    textAlign: "center",
    fontSize: responsiveScreenFontSize(3),
    fontWeight: "700",
  },
});

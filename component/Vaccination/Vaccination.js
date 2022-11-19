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
  Button,
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
            <Pressable style={{ marginHorizontal: "3%" }}>
              <Button title="Community Member" color="#EB3738" />
            </Pressable>
            <Pressable>
              <Button title="Active Donor" color="#EB3738" />
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
    marginBottom: "10%",
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
    width: responsiveScreenWidth(98),
    bottom: responsiveScreenHeight(2),
    elevation: 20,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
});

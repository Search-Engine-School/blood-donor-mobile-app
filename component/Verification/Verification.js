import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  ImageBackground,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import bgImg from "../../assets/register-bg.png";
import TopCircle from "../common/TopCircle/TopCircle";

export default function Verification({ navigation }) {
  return (
    <View style={styles.container}>
      <StatusBar translucent={false}></StatusBar>
      <TopCircle></TopCircle>
      <ImageBackground source={bgImg} style={styles.image}>
        <View style={styles.pinBox}>
          <Text style={styles.headingTxt}>PHONE VERIFICATION</Text>
          <Text style={styles.paragraphTxt}>
            Enter the OTP we have sent on your mobile number: +3064567873
          </Text>
          <View style={styles.inputPin}>
            <TextInput style={styles.input}></TextInput>
            <TextInput style={styles.input}></TextInput>
            <TextInput style={styles.input}></TextInput>
            <TextInput style={styles.input}></TextInput>
          </View>
          <Pressable
            onPress={() => navigation.navigate("Login")}
            style={styles.btn}
          >
            <Text style={styles.textBtn}>VERIFY</Text>
          </Pressable>
        </View>
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
    zIndex: 10,
    alignSelf: "center",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    elevation: 20,
    backgroundColor: "#fff",
  },
  headingTxt: {
    fontSize: 25,
    color: "#000",
    fontWeight: "700",
  },
  paragraphTxt: {
    color: "#000",
    marginVertical: 30,
    textAlign: "center",
  },
  input: {
    height: 42,
    width: 42,
    borderColor: "#DB1F26",
    borderWidth: 1,
    fontSize: 20,
    borderRadius: 10,
    textAlign: "center",
  },
  inputPin: {
    width: 300,
    marginTop: 20,
    justifyContent: "space-around",
    flexDirection: "row",
  },
  btn: {
    width: 254,
    height: 61,
    marginRight: 25,
    marginLeft: 25,
    backgroundColor: "#EB3738",
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    bottom: -50,
    elevation: 20,
    marginBottom: 15,
  },
  textBtn: {
    color: "#fff",
    fontSize: 30,
  },
});

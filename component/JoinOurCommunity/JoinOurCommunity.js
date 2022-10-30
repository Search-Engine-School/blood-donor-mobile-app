import React from "react";
import {
  ImageBackground,
  Pressable,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import {
  responsiveScreenFontSize,
  responsiveScreenHeight,
  responsiveScreenWidth,
} from "react-native-responsive-dimensions";
import bgImg from "../../assets/register-bg.png";
import TopCircle from "../common/TopCircle/TopCircle";

export default function JoinOurCommunity({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar translucent={false}></StatusBar>
      <TopCircle></TopCircle>
      <ImageBackground source={bgImg} style={styles.image}>
        <View style={styles.pinBox}>
          <View
            style={{
              width: responsiveScreenWidth(90),
              borderBottomWidth: 1,
              borderBottomColor: "#000",
              marginBottom: 15,
            }}
          >
            <Text style={styles.inputLabel}>FULL NAME</Text>
            <TextInput
              style={styles.input}
              defaultValue="type your name"
            ></TextInput>
          </View>
          <View
            style={{
              width: responsiveScreenWidth(90),
              borderBottomWidth: 1,
              borderBottomColor: "#000",
              marginBottom: 15,
            }}
          >
            <Text style={styles.inputLabel}>CONTACT NO</Text>
            <TextInput
              style={styles.input}
              defaultValue="type your phone number"
            ></TextInput>
          </View>
          <View
            style={{
              width: responsiveScreenWidth(90),
              borderBottomWidth: 1,
              borderBottomColor: "#000",
              marginBottom: 15,
            }}
          >
            <Text style={styles.inputLabel}>EMAIL</Text>
            <TextInput
              style={styles.input}
              defaultValue="type your email"
            ></TextInput>
          </View>
          <View
            style={{
              width: responsiveScreenWidth(90),
              borderBottomWidth: 1,
              borderBottomColor: "#000",
              marginBottom: 15,
            }}
          >
            <Text style={styles.inputLabel}>DATE OF BIRTH</Text>
            <TextInput style={styles.input} defaultValue="01/01/90"></TextInput>
          </View>
        </View>
        <View>
          <Pressable
            onPress={() => navigation.navigate("SearchBlood")}
            style={styles.btn}
          >
            <Text style={styles.joinBtn}>Join the community</Text>
          </Pressable>
        </View>
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
    justifyContent: "center",
    alignItems: "center",
  },
  pinBox: {
    height: responsiveScreenHeight(50),
    width: responsiveScreenWidth(95),
    top: "2%",
    zIndex: 10,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    elevation: 20,
    backgroundColor: "#fff",
  },
  inputLabel: {
    color: "#DB1F26",
    fontSize: responsiveScreenFontSize(2),
    fontWeight: "600",
  },
  input: {
    height: 40,
    color: "#6A6A6A",
    fontSize: responsiveScreenFontSize(2),
  },
  btn: {
    width: responsiveScreenWidth(80),
    height: responsiveScreenHeight(6),
    paddingHorizontal: 30,
    backgroundColor: "#EB3738",
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
    top: "90%",
  },
  joinBtn: {
    color: "#fff",
    fontSize: responsiveScreenFontSize(3),
    fontWeight: "700",
  },
});

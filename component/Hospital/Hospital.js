import React, { useState } from "react";
import {
  Dimensions,
  Button,
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
import vector from "../../assets/Vector.png";
import TopBar from "../common/TopBar/TopBar";

const Width = Dimensions.get("window").width;
const numOfColumn = 3;
const Item = ({ item, onPress, backgroundColor, textColor }) => (
  <TouchableOpacity onPress={onPress} style={[styles.item, backgroundColor]}>
    <Text style={[styles.title, textColor]}>{item.name}</Text>
  </TouchableOpacity>
);

export default function Hospital({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar translucent={false}></StatusBar>
      <ImageBackground source={bgImg} style={styles.image}>
        <TopBar></TopBar>
        <KeyboardAvoidingView style={{ flex: 1 }}>
          <View style={styles.header}>
            <Text style={styles.headerText}>Hospital</Text>
          </View>

          <View style={styles.body}>
            <View style={{ flexDirection: "row", marginBottom: "7%" }}>
              <Image
                style={{
                  height: responsiveScreenHeight(2),
                  width: responsiveScreenHeight(2),
                  resizeMode: "contain",
                  margin: "2%",
                }}
                source={vector}
              ></Image>
              <View style={styles.text}>
                <Text
                  style={{
                    fontSize: 18,
                    top: "7%",
                    color: "#EB3738",
                    fontWeight: "900",
                  }}
                >
                  Chittagong Medical College, Chittagong
                </Text>
              </View>
              <Text
                style={{
                  fontSize: 18,
                  top: "1%",
                  color: "#EB3738",
                  fontWeight: "900",
                  marginLeft: "10%",
                }}
              >
                1.2 km
              </Text>
            </View>
            <View style={{ flexDirection: "row", marginBottom: "7%" }}>
              <Image
                style={{
                  height: responsiveScreenHeight(2),
                  width: responsiveScreenHeight(2),
                  resizeMode: "contain",
                  margin: "2%",
                }}
                source={vector}
              ></Image>
              <View style={styles.text}>
                <Text
                  style={{
                    fontSize: 18,
                    top: "7%",
                    color: "#EB3738",
                    fontWeight: "900",
                  }}
                >
                  Chittagong Sadar Hospital, Chittagong
                </Text>
              </View>
              <Text
                style={{
                  fontSize: 18,
                  top: "1%",
                  color: "#EB3738",
                  fontWeight: "900",
                  marginLeft: "10%",
                }}
              >
                1 km
              </Text>
            </View>
            <View style={{ flexDirection: "row", marginBottom: "7%" }}>
              <Image
                style={{
                  height: responsiveScreenHeight(2),
                  width: responsiveScreenHeight(2),
                  resizeMode: "contain",
                  margin: "2%",
                }}
                source={vector}
              ></Image>
              <View style={styles.text}>
                <Text
                  style={{
                    fontSize: 18,
                    top: "7%",
                    color: "#EB3738",
                    fontWeight: "900",
                  }}
                >
                  Shevron, Chittagong
                </Text>
              </View>
              <Text
                style={{
                  fontSize: 18,
                  top: "1%",
                  color: "#EB3738",
                  fontWeight: "900",
                  marginLeft: "10%",
                }}
              >
                4.2 km
              </Text>
            </View>
            <View style={{ flexDirection: "row", marginBottom: "7%" }}>
              <Image
                style={{
                  height: responsiveScreenHeight(2),
                  width: responsiveScreenHeight(2),
                  resizeMode: "contain",
                  margin: "2%",
                }}
                source={vector}
              ></Image>
              <View style={styles.text}>
                <Text
                  style={{
                    fontSize: 18,
                    top: "7%",
                    color: "#EB3738",
                    fontWeight: "900",
                  }}
                >
                  Ibne Sina
                </Text>
              </View>
              <Text
                style={{
                  fontSize: 18,
                  top: "1%",
                  color: "#EB3738",
                  fontWeight: "900",
                  marginLeft: "10%",
                }}
              >
                4.2 km
              </Text>
            </View>
            <View style={{ flexDirection: "row", marginBottom: "7%" }}>
              <Image
                style={{
                  height: responsiveScreenHeight(2),
                  width: responsiveScreenHeight(2),
                  resizeMode: "contain",
                  margin: "2%",
                }}
                source={vector}
              ></Image>
              <View style={styles.text}>
                <Text
                  style={{
                    fontSize: 18,
                    top: "7%",
                    color: "#EB3738",
                    fontWeight: "900",
                  }}
                >
                  CSCR in Chittagong
                </Text>
              </View>
              <Text
                style={{
                  fontSize: 18,
                  top: "1%",
                  color: "#EB3738",
                  fontWeight: "900",
                  marginLeft: "10%",
                }}
              >
                4.2 km
              </Text>
            </View>
            <View style={{ flexDirection: "row", marginBottom: "7%" }}>
              <Image
                style={{
                  height: responsiveScreenHeight(2),
                  width: responsiveScreenHeight(2),
                  resizeMode: "contain",
                  margin: "2%",
                }}
                source={vector}
              ></Image>
              <View style={styles.text}>
                <Text
                  style={{
                    fontSize: 18,
                    top: "7%",
                    color: "#EB3738",
                    fontWeight: "900",
                  }}
                >
                  Karim Benzema Hospital
                </Text>
              </View>
              <Text
                style={{
                  fontSize: 18,
                  top: "1%",
                  color: "#EB3738",
                  fontWeight: "900",
                  marginLeft: "10%",
                }}
              >
                4.2 km
              </Text>
            </View>
            <View style={{ flexDirection: "row", marginBottom: "7%" }}>
              <Image
                style={{
                  height: responsiveScreenHeight(2),
                  width: responsiveScreenHeight(2),
                  resizeMode: "contain",
                  margin: "2%",
                }}
                source={vector}
              ></Image>
              <View style={styles.text}>
                <Text
                  style={{
                    fontSize: 18,
                    top: "7%",
                    color: "#EB3738",
                    fontWeight: "900",
                  }}
                >
                  Sonamiya Hospital, Chittagong
                </Text>
              </View>
              <Text
                style={{
                  fontSize: 18,
                  top: "1%",
                  color: "#EB3738",
                  fontWeight: "900",
                  marginLeft: "10%",
                }}
              >
                4.2 km
              </Text>
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
    backgroundColor: "#fff",
    margin: "3%",
    marginBottom: "5%",
    borderRadius: 10,
  },
  headerText: {
    color: "#EB3738",
    fontSize: responsiveScreenFontSize(3),
    textAlign: "center",
    top: "20%",
    fontWeight: "900",
  },
  body: {
    width: responsiveScreenWidth(95),
    borderRadius: 10,
    backgroundColor: "#fff",
    marginBottom: "10%",
    left: "3%",
  },
  text: {
    width: "60%",
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

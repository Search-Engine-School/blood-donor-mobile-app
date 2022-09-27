import React from "react";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import {
  responsiveScreenFontSize,
  responsiveScreenHeight,
  responsiveScreenWidth,
} from "react-native-responsive-dimensions";
import inbox from "../../../assets/inbox.png";
import logo from "../../../assets/logo.png";
import bell from "../../../assets/notification.png";
import settings from "../../../assets/settings.png";

export default function TopBar() {
  return (
    <View style={styles.topbar}>
      <View style={styles.logoName}>
        <Image
          style={{
            height: responsiveScreenHeight(4),
            width: responsiveScreenHeight(4),
            resizeMode: "contain",
          }}
          source={logo}
        ></Image>
        <Text
          style={{
            fontSize: responsiveScreenFontSize(2.5),
            color: "#DB1F26",
            fontWeight: "700",
          }}
        >
          bloodbuddy
        </Text>
      </View>
      <View style={styles.settings}>
        <Pressable style={styles.pressStyle}>
          <Image
            style={{
              height: responsiveScreenHeight(2),
              width: responsiveScreenHeight(2),
              resizeMode: "contain",
            }}
            source={bell}
          ></Image>
        </Pressable>
        <Pressable style={styles.pressStyle}>
          <Image
            style={{
              height: responsiveScreenHeight(2),
              width: responsiveScreenHeight(2),
              resizeMode: "contain",
            }}
            source={inbox}
          ></Image>
        </Pressable>
        <Pressable style={styles.pressStyle}>
          <Image
            style={{
              height: responsiveScreenHeight(2),
              width: responsiveScreenHeight(2),
              resizeMode: "contain",
            }}
            source={settings}
          ></Image>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  topbar: {
    width: responsiveScreenWidth(100),
    height: responsiveScreenHeight(6),
    borderWidth: 2,
    flexDirection: "row",
    justifyContent: "center",
    borderBottomStartRadius: 15,
    borderBottomEndRadius: 15,
    borderColor: "#DB1F26",
    backgroundColor: "#fff",
  },
  logoName: {
    width: responsiveScreenWidth(50),
    flexDirection: "row",
    alignItems: "center",
  },
  settings: {
    width: responsiveScreenWidth(50),
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
  },
  pressStyle: {
    backgroundColor: "#DB1F26",
    borderRadius: 100,
    height: responsiveScreenHeight(4),
    width: responsiveScreenHeight(4),
    alignItems: "center",
    justifyContent: "center",
  },
});

import React from "react";
import {
  Dimensions,
  ImageBackground,
  KeyboardAvoidingView,
  Pressable,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import {
  responsiveScreenHeight,
  responsiveScreenWidth,
} from "react-native-responsive-dimensions";
import bgImg from "../../assets/bg-three.png";
import TopBar from "../common/TopBar/TopBar";

const height = Dimensions.get("window").height;
const width = Dimensions.get("window").width;
const fontScale = Dimensions.get("window").fontScale;

export default function SearchBlood2() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar translucent={false}></StatusBar>
      <ImageBackground source={bgImg} style={styles.image}>
        <TopBar></TopBar>
        <KeyboardAvoidingView style={{ flex: 1 }}>
          <View style={styles.inputView}>
            <TextInput
              multiline={true}
              numberOfLines={5}
              textAlignVertical="top"
              style={{
                backgroundColor: "#fff",
                width: "95%",
                height: height * 0.15,
                padding: height * 0.01,
                fontSize: 20 / fontScale,
                borderRadius: 10,
              }}
            ></TextInput>
            <Pressable style={styles.btn}>
              <Text style={styles.textBtn}>Search Blood</Text>
            </Pressable>
          </View>
          <View style={styles.list}>
            <View style={styles.listItem}>
              <Text
                style={{
                  fontWeight: "700",
                  color: "#DB1F26",
                  fontSize: 20 / fontScale,
                }}
              >
                Group:
              </Text>
            </View>
            <View style={styles.listItem}>
              <Text
                style={{
                  fontWeight: "700",
                  color: "#DB1F26",
                  fontSize: 20 / fontScale,
                }}
              >
                Location:
              </Text>
            </View>
            <View style={styles.listItem}>
              <Text
                style={{
                  fontWeight: "700",
                  color: "#DB1F26",
                  fontSize: 20 / fontScale,
                }}
              >
                Hospital:
              </Text>
            </View>
            <View style={styles.listItem}>
              <Text
                style={{
                  fontWeight: "700",
                  color: "#DB1F26",
                  fontSize: 20 / fontScale,
                }}
              >
                Indication:
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
  inputView: {
    flex: 1,
    width: responsiveScreenWidth(95),
    borderRadius: 10,
    alignItems: "center",
    marginVertical: responsiveScreenHeight(2),
  },
  btn: {
    width: responsiveScreenWidth(85),
    height: responsiveScreenHeight(6),
    backgroundColor: "#EB3738",
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
    marginBottom: 15,
    elevation: 20,
  },
  textBtn: {
    color: "#fff",
    fontSize: 25 / fontScale,
  },
  list: {
    flex: 2,
    justifyContent: "center",
    alignItems: "center",
  },
  listItem: {
    marginVertical: 15,
    backgroundColor: "#fff",
    width: "70%",
    elevation: 10,
    paddingHorizontal: 10,
    paddingVertical: 20,
    borderRadius: 10,
  },
  memberBtn: {
    backgroundColor: "#EB3738",
    width: "95%",
    bottom: "3%",
    elevation: 20,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  btnText: {
    color: "#fff",
    textAlign: "center",
    fontSize: 25 / fontScale,
    fontWeight: "700",
  },
});

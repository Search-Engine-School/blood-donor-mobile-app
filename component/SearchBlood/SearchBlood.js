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
  TextInput,
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
const Item = ({ item, onPress, backgroundColor, textColor }) => (
  <TouchableOpacity onPress={onPress} style={[styles.item, backgroundColor]}>
    <Text style={[styles.title, textColor]}>{item.name}</Text>
  </TouchableOpacity>
);

export default function SearchBlood({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar translucent={false}></StatusBar>
      <ImageBackground source={bgImg} style={styles.image}>
        <TopBar></TopBar>
        <KeyboardAvoidingView style={{ flex: 1 }}>
          <View style={styles.inputView}>
            <TextInput
              multiline={true}
              textAlignVertical="top"
              style={{
                backgroundColor: "#fff",
                width: responsiveScreenWidth(85),
                height: responsiveScreenHeight(7),
                padding: responsiveScreenHeight(2),
                fontSize: responsiveScreenFontSize(3),
                borderRadius: 10,
              }}
            ></TextInput>
            <Pressable style={styles.btn}>
              <Text style={styles.textBtn}>Search Blood</Text>
            </Pressable>
          </View>

          <View style={{ width: "100%", marginTop: "35%" }}>
            <View style={{ flexDirection: "row", width: "90%", bottom: "18%" }}>
              <Pressable
                style={styles.profileBtn}
                onPress={() => navigation.navigate("ThalassemiaProfile")}
              >
                <Text style={styles.Txt}>Thalassemia</Text>
              </Pressable>
              <Pressable style={styles.profileBtn}>
                <Text style={styles.Txt}>News Feed</Text>
              </Pressable>
              <Pressable
                style={styles.profileBtn}
                onPress={() => navigation.navigate("Vaccination")}
              >
                <Text style={styles.Txt}>Vaccination</Text>
              </Pressable>
            </View>
            <View style={{ flexDirection: "row", width: "90%", bottom: "18%" }}>
              <Pressable style={styles.profileBtn}>
                <Text style={styles.Txt}>BMI Meter</Text>
              </Pressable>
              <Pressable
                style={styles.profileBtn}
                onPress={() => navigation.navigate("AllDonors")}
              >
                <Text style={styles.Txt}>All Donors</Text>
              </Pressable>
              <Pressable
                style={styles.profileBtn}
                onPress={() => navigation.navigate("BloodBuddyId")}
              >
                <Text style={styles.Txt}>Blood Buddy</Text>
              </Pressable>
            </View>
            <View style={{ flexDirection: "row", width: "90%", bottom: "18%" }}>
              <Pressable
                style={styles.profileBtn}
                onPress={() => navigation.navigate("DoctorsList")}
              >
                <Text style={styles.Txt}>Doctor List</Text>
              </Pressable>
              <Pressable
                style={styles.profileBtn}
                onPress={() => navigation.navigate("Hospital")}
              >
                <Text style={styles.Txt}>Hospital</Text>
              </Pressable>
              <Pressable
                style={styles.profileBtn}
                onPress={() => navigation.navigate("DoctorsList")}
              >
                <Text style={styles.Txt}>Blood Myth</Text>
              </Pressable>
            </View>
          </View>

          <View style={styles.memberBtn}>
            <Pressable style={styles.communityBtn}>
              <Text style={styles.textBtn2}>Community Member</Text>
            </Pressable>
            <Pressable style={styles.communityBtn}>
              <Text style={styles.textBtn2}>Active Donor</Text>
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
    marginBottom: "10%",
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
    fontSize: responsiveScreenFontSize(3),
  },
  profileBtn: {
    width: responsiveScreenWidth(32),
    height: responsiveScreenHeight(16),
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    margin: "0.5%",
    elevation: 20,
    borderColor: "#EB3738",
    borderWidth: 2,
  },
  Txt: {
    color: "#EB3738",
    fontSize: responsiveScreenFontSize(2),
    fontWeight: "bold",
  },
  title: {
    fontSize: responsiveScreenFontSize(2.2),
    textAlign: "center",
    fontWeight: "700",
  },
  memberBtn: {
    width: responsiveScreenWidth(95),
    bottom: responsiveScreenHeight(6),
    elevation: 20,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    marginLeft: "2%",
  },
  communityBtn: {
    width: responsiveScreenWidth(47),
    height: responsiveScreenHeight(6),
    backgroundColor: "#EB3738",
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
    elevation: 20,
    marginHorizontal: "1%",
  },
  textBtn2: {
    color: "#fff",
    fontSize: responsiveScreenFontSize(2),
    fontWeight: "900",
  },
});

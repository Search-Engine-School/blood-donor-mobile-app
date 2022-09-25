import React from "react";
import {
  ImageBackground,
  Pressable,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import bgImg from "../../assets/register-bg.png";
import TopCircle from "../common/TopCircle/TopCircle";

export default function JoinOurCommunity({ navigation }) {
  return (
    <View style={styles.container}>
      <StatusBar translucent={false}></StatusBar>
      <TopCircle></TopCircle>
      <ImageBackground source={bgImg} style={styles.image}>
        <View style={styles.pinBox}>
          <View
            style={{
              width: "90%",
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
              width: "90%",
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
              width: "90%",
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
              width: "90%",
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
          <Pressable style={styles.btn}>
            <Text style={styles.textBtn}>Join the community</Text>
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
  inputLabel: {
    color: "#DB1F26",
    fontSize: 16,
    fontWeight: "600",
  },
  input: {
    height: 40,
    color: "#6A6A6A",
    fontSize: 16,
    paddingRight: 10,
  },
  btn: {
    width: 377,
    height: 61,
    marginRight: 25,
    marginLeft: 25,
    backgroundColor: "#EB3738",
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
    marginBottom: 15,
  },
  textBtn: {
    color: "#fff",
    fontSize: 30,
    fontWeight: "700",
  },
});
